<?php
/**
 * Template Name: Maintenance Mode
 * Description: A custom maintenance mode page.
 */

// Don't convert this to a full HTML page with get_header() as we want to control everything
// but we DO need wp_head() for styles/scripts
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Maintenance Mode | <?php bloginfo( 'name' ); ?></title>
    <?php wp_head(); ?>
    <style>
        :root {
            --wingate-blue: #0e1b3d;
            --wingate-yellow: #ffcc00;
            --wingate-cream: #f8f5ec;
            --wingate-white: #ffffff;
        }

        body {
            margin: 0;
            padding: 80px 20px; /* Add top padding to push content down */
            box-sizing: border-box;
            font-family: 'Montserrat', sans-serif;
            background-color: var(--wingate-blue);
            color: var(--wingate-white);
            min-height: 100vh; /* Allow content to grow */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start; /* Start from top + padding instead of center (which can clip) */
            text-align: center;
            overflow-y: auto; /* Allow scrolling if screen is short */
        }

        .maintenance-container {
            max-width: 600px;
            padding: 40px;
            position: relative;
            z-index: 2;
        }

        /* Ensure footer content is white */
        #footer-root {
            color: var(--wingate-white);
            width: 100%;
            position: relative;
            z-index: 2;
        }
        
        /* Force styles on footer links if they exist */
        #footer-root a {
            color: var(--wingate-white) !important;
        }

        .maintenance-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, #1b3576 0%, var(--wingate-blue) 70%);
            opacity: 0.8;
            z-index: 1;
        }
        
        h1 {
            font-family: 'Cinzel', serif;
            font-size: 3.5rem;
            color: var(--wingate-yellow);
            margin-bottom: 20px;
            line-height: 1.1;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin-bottom: 40px;
            color: var(--wingate-white);
            opacity: 0.9;
            font-weight: 300;
        }

        .maintenance-icon {
            font-size: 4rem;
            color: var(--wingate-yellow);
            margin-bottom: 30px;
            opacity: 1;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 40px;
        }

        .social-links a {
            color: var(--wingate-white);
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 12px 24px;
            border-radius: 4px;
        }

        .social-links a:hover {
            color: var(--wingate-blue);
            background-color: var(--wingate-yellow);
            border-color: var(--wingate-yellow);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);
        }
    </style>
</head>
<body>
    <div class="maintenance-bg"></div>
    <div class="maintenance-container">
        <div class="maintenance-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
        </div>
        <h1>Under Maintenance</h1>
        <p>
            We are currently performing scheduled maintenance to improve your experience. 
            Please check back soon.
        </p>
        <?php 
        $contact = wingate_get_contact_details(); 
        if ( ! empty( $contact ) ) : 
        ?>
        <div class="social-links">
            <?php if ( '#' !== $contact['facebook'] ) : ?>
                <a href="<?php echo esc_url( $contact['facebook'] ); ?>" target="_blank">Facebook</a>
            <?php endif; ?>
            <?php if ( '#' !== $contact['instagram'] ) : ?>
                <a href="<?php echo esc_url( $contact['instagram'] ); ?>" target="_blank">Instagram</a>
            <?php endif; ?>
            <?php if ( '#' !== $contact['email'] ) : ?>
                <a href="mailto:<?php echo esc_attr( $contact['email'] ); ?>">Email Us</a>
            <?php endif; ?>
        </div>
        <?php endif; ?>
    </div>
    <?php wp_footer(); ?>
</body>
</html>
