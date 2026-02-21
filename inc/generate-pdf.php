<?php
require_once __DIR__ . '/lib/fpdf.php';

class WingatePDF extends FPDF {
    protected $data = [];
    protected $temp_files = [];
    
    // Convert hex color to FPDF RGB
    protected $col_navy = [14, 27, 61];
    protected $col_gold = [197, 160, 89];
    
    function setData($data) {
        // Normalize keys to lowercase
        $this->data = array_change_key_case($data, CASE_LOWER);
    }

    protected function get_logo_candidates() {
        $candidates = [];

        if (defined('ABSPATH')) {
            $candidates[] = ABSPATH . 'wp-content/uploads/2026/02/logo_compressed.png';
            $candidates[] = ABSPATH . 'docs/assets/images/wingate_logo.webp';
        }

        $candidates[] = dirname(__DIR__, 4) . '/docs/assets/images/wingate_logo.webp';
        $candidates[] = dirname(__DIR__, 4) . '/docs/assets/images/wingate_logo.png';

        return $candidates;
    }

    protected function ensure_png_logo($path) {
        $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
        if ($ext !== 'webp') {
            return $path;
        }

        if (!function_exists('imagecreatefromwebp') || !function_exists('imagepng')) {
            return null;
        }

        $im = @imagecreatefromwebp($path);
        if (!$im) {
            return null;
        }

        $tmp_png = tempnam(sys_get_temp_dir(), 'wingate_logo_');
        if ($tmp_png === false) {
            imagedestroy($im);
            return null;
        }

        $tmp_png_with_ext = $tmp_png . '.png';
        if (!@imagepng($im, $tmp_png_with_ext)) {
            @unlink($tmp_png);
            imagedestroy($im);
            return null;
        }

        @unlink($tmp_png);
        imagedestroy($im);
        $this->temp_files[] = $tmp_png_with_ext;

        return $tmp_png_with_ext;
    }

    protected function resolve_logo_path() {
        foreach ($this->get_logo_candidates() as $path) {
            if (!file_exists($path)) {
                continue;
            }

            $renderable = $this->ensure_png_logo($path);
            if ($renderable && file_exists($renderable)) {
                return $renderable;
            }
        }

        return null;
    }

    function Header() {
        // Register Fonts
        $this->AddFont('Cinzel', '', 'cinzel.php');
        $this->AddFont('Montserrat', '', 'montserrat.php');
        
        // Use Regular for Bold (temporary fallback)
        $this->AddFont('Cinzel', 'B', 'cinzel.php'); 
        $this->AddFont('Montserrat', 'B', 'montserrat.php');

        $logo_path = $this->resolve_logo_path();
        if ($logo_path) {
            $this->Image($logo_path, 18, 10, 18);
        }
        
        // Header
        $this->SetFont('Cinzel', 'B', 26);
        $this->SetTextColor($this->col_navy[0], $this->col_navy[1], $this->col_navy[2]);
        $this->Text(40, 25, 'WINGATE PARK');
        
        $this->SetFont('Montserrat', 'B', 10); 
        $this->Text(40, 32, 'GOLF CLUB   EST. 1974');
        
        $this->SetFont('Montserrat', 'B', 11);
        $this->SetTextColor($this->col_gold[0], $this->col_gold[1], $this->col_gold[2]);
        $this->Text(40, 38, 'MEMBERSHIP APPLICATION FORM');
        
        // Lines
        $this->SetDrawColor($this->col_navy[0], $this->col_navy[1], $this->col_navy[2]);
        $this->SetLineWidth(0.7);
        $this->Line(18, 42, 192, 42); // Margin 18mm
        
        $this->SetDrawColor($this->col_gold[0], $this->col_gold[1], $this->col_gold[2]);
        $this->SetLineWidth(0.3);
        $this->Line(18, 43, 192, 43);
        
        $this->Ln(40); // Move cursor down
    }

    function Footer() {
        $this->SetFillColor($this->col_navy[0], $this->col_navy[1], $this->col_navy[2]);
        $this->Rect(0, 282, 210, 15, 'F');
        
        $this->SetFont('Montserrat', '', 8);
        $this->SetTextColor(255, 255, 255);
        $this->SetXY(0, 286.0);
        $this->Cell(210, 3.8, 'Wingate Golf Club  |  73JG+RJ2, Alpes Rd, Harare, Zimbabwe  |  077 233 9670', 0, 0, 'C');
        $this->SetXY(0, 290.0);
        $this->Cell(210, 3.8, 'wingate.co.zw', 0, 0, 'C');
    }

    function __destruct() {
        foreach ($this->temp_files as $temp_file) {
            if (file_exists($temp_file)) {
                @unlink($temp_file);
            }
        }
    }

    function SectionHeader($label) {
        $this->Ln(3);
        $this->SetFont('Cinzel', 'B', 12);
        $this->SetTextColor($this->col_navy[0], $this->col_navy[1], $this->col_navy[2]);
        $this->Cell(0, 8, $label, 0, 1, 'L');
        
        $this->SetDrawColor($this->col_gold[0], $this->col_gold[1], $this->col_gold[2]);
        $this->SetLineWidth(0.5);
        $y = $this->GetY();
        $this->Line(18, $y, 192, $y);
        $this->Ln(2);
    }
    
    function FieldRow($fields) {
        $margin = 18;
        $start_y = $this->GetY();
        $row_h = 14;
        
        foreach ($fields as $field) {
            $label = $field[0];
            $key = $field[1];
            $w = $field[2];
            
            $x = $this->GetX();
            $y = $this->GetY();
            
            // Draw Label
            $this->SetFont('Montserrat', 'B', 8);
            $this->SetTextColor($this->col_navy[0], $this->col_navy[1], $this->col_navy[2]);
            $this->Text($x + 1, $y + 3, $label);
            
            // Draw Box
            $box_y = $y + 4;
            $box_h = 6;
            $this->SetDrawColor($this->col_gold[0], $this->col_gold[1], $this->col_gold[2]);
            $this->SetLineWidth(0.3);
            $this->Rect($x, $box_y, $w - 2, $box_h); 
            
            // Fill Value
            if ($key && isset($this->data[$key])) {
                $val = strtoupper($this->data[$key]);
                $this->SetFont('Montserrat', '', 9);
                $this->SetTextColor($this->col_navy[0], $this->col_navy[1], $this->col_navy[2]);
                $this->Text($x + 2, $box_y + 4.2, $val);
            }
            
            $this->SetXY($x + $w, $y);
        }
        
        $this->SetXY($margin, $start_y + $row_h);
    }
    
    function CheckboxTable($selected_cat) {
        $this->Ln(2);
        $this->SetFont('Montserrat', '', 9);
        $this->SetTextColor($this->col_navy[0], $this->col_navy[1], $this->col_navy[2]);
        
        // Headers
        $this->Cell(60, 6, 'MEN', 0, 0, 'L');
        $this->Cell(60, 6, 'LADIES', 0, 0, 'L');
        $this->Cell(50, 6, 'OTHER', 0, 1, 'L');
        
        $rows = [
            [['Full (18+)', 'full_men'], ['Full (18+)', 'full_ladies'], ['Student (with ID)', 'student']],
            [['Country (>50km)', 'country_men'], ['Country (>50km)', 'country_ladies'], ['Junior (<18)', 'junior']],
            [['Senior (70+)', 'senior'], ['Limited Rounds', 'limited'], ['', '']]
        ];
        
        foreach ($rows as $row) {
            foreach ($row as $col) {
                $text = $col[0];
                $key = $col[1];
                
                if (empty($text)) {
                    $this->Cell(60, 6, '', 0, 0);
                    continue;
                }
                
                $mark = ($selected_cat == $key) ? '[X]' : '[  ]';
                $this->Cell(($key == 'junior' || $key == 'student') ? 50 : 60, 6, "$mark $text", 0, 0, 'L');
            }
            $this->Ln();
        }
        $this->Ln(3);
    }
}

function wingate_generate_pdf_php($data, $output_path) {
    $pdf = new WingatePDF();
    $pdf->setData($data);
    $pdf->AddPage();
    $pdf->SetMargins(18, 18, 18);
    
    // Personal Details
    $pdf->SectionHeader('PERSONAL DETAILS');
    $pdf->FieldRow([
        ['SURNAME', 'surname', 90],
        ['FIRST NAMES', 'first_names', 84]
    ]);
    $pdf->FieldRow([
        ['TITLE', 'title', 30],
        ['DATE OF BIRTH', 'dob', 50],
        ['OCCUPATION', 'occupation', 94]
    ]);
    $pdf->FieldRow([
        ['HOME ADDRESS', 'home_address', 90],
        ['POSTAL ADDRESS', 'postal_address', 84]
    ]);
    
    $pdf->Ln(2);
    
    // Contact Details
    $pdf->SectionHeader('CONTACT DETAILS');
    $pdf->FieldRow([
        ['EMAIL ADDRESS', 'email', 174]
    ]);
    $pdf->FieldRow([
        ['MOBILE', 'mobile', 58],
        ['HOME TEL', 'home_tel', 58],
        ['WORK TEL', 'work_tel', 58]
    ]);
    
    $pdf->Ln(2);

    // Golf History
    $pdf->SectionHeader('GOLF HISTORY');
    $pdf->FieldRow([
        ['PREVIOUS CLUB', 'prev_club', 90],
        ['HANDICAP', 'handicap', 30],
        ['SA PLAYER ID', 'player_id', 54]
    ]);
    
    $pdf->Ln(2);

    // Membership Category
    $pdf->SectionHeader('MEMBERSHIP CATEGORY');
    $pdf->CheckboxTable($data['category'] ?? '');
    
    // Proposal
    $pdf->SectionHeader('PROPOSAL & SECONDING');
    $pdf->FieldRow([
        ['PROPOSER NAME', 'proposer_name', 87],
        ['MEMBERSHIP NO', 'proposer_id', 87]
    ]);
    $pdf->FieldRow([
        ['SECONDER NAME', 'seconder_name', 87],
        ['MEMBERSHIP NO', 'seconder_id', 87]
    ]);
    
    $pdf->Ln(5);
    
    // Declaration
    $pdf->SetFont('Montserrat', 'B', 8);
    $pdf->Cell(25, 5, 'DECLARATION:', 0, 0);
    $pdf->SetFont('Montserrat', '', 8);
    $pdf->Cell(0, 5, 'I confirm that the information above is correct and agree to abide by the Constitution and Rules of the Club.', 0, 1);
    
    $pdf->Ln(8);
    
    // Signature
    $pdf->SetFont('Montserrat', 'B', 9);
    $pdf->Cell(20, 5, 'Signature:', 0, 0);
    $pdf->Line(40, $pdf->GetY() + 4, 100, $pdf->GetY() + 4);
    
    $pdf->SetX(110);
    $pdf->Cell(10, 5, 'Date:', 0, 0);
    $pdf->Line(125, $pdf->GetY() + 4, 190, $pdf->GetY() + 4);
    
    $date_signed = isset($data['date_signed']) ? strtoupper($data['date_signed']) : date('d/m/Y');
    $pdf->SetFont('Montserrat', '', 9);
    $pdf->Text(127, $pdf->GetY() + 3, $date_signed);

    $pdf->Output('F', $output_path);
}
