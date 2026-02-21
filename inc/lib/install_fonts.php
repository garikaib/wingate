<?php
require_once __DIR__ . '/makefont/makefont.php';

$root = '/home/garikaib/Documents/sites/new-wingate';
$fonts_dir = $root . '/docs/assets/fonts';
$output_dir = __DIR__ . '/font';

if (!file_exists($output_dir)) {
    mkdir($output_dir, 0755, true);
}

$fonts = [
    'Cinzel.ttf' => 'Cinzel',
    'Montserrat.ttf' => 'Montserrat',
    'Cinzel-Bold.ttf' => 'Cinzel-Bold',
    'Montserrat-Bold.ttf' => 'Montserrat-Bold'
];

foreach ($fonts as $file => $name) {
    $path = $fonts_dir . '/' . $file;
    if (file_exists($path)) {
        MakeFont($path, 'cp1252', true);
        echo "Converted $name\n";
        
        // MakeFont output files in current dir (where script is run?) or relative to script?
        // FPDF MakeFont typically outputs to current working directory or directory of script if not specified? 
        // Actually usually CWD.
        // We will move them.
        
        $base = basename($file, '.ttf');
        $base_lower = strtolower($base);
        
        // FPDF usually lowercases filename for output .php and .z
        
        // We look for generated files in CWD
        if (file_exists("$base_lower.php")) {
            rename("$base_lower.php", "$output_dir/$base_lower.php");
            rename("$base_lower.z", "$output_dir/$base_lower.z");
            echo "Moved $base_lower to $output_dir\n";
        } elseif (file_exists("$base.php")) {
             rename("$base.php", "$output_dir/$base.php");
             rename("$base.z", "$output_dir/$base.z");
             echo "Moved $base to $output_dir\n";
        }
    } else {
        echo "Missing $name at $path\n";
    }
}
