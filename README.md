# Wingate Theme

This is a custom WordPress theme designed and built for **Wingate Golf Club**.

## Credits

Designed and built by **Garikai Dzoma** ([garikai@zimpricecheck.com](mailto:garikai@zimpricecheck.com)) on behalf of **Wingate Golf Club**.

## Tech Stack

This theme leverages modern web technologies to provide a high-performance, interactive experience:

- **React 19**: Powered the dynamic components of the site.
- **Vite**: Used as the build tool for fast development and optimized production assets.
- **Tailwind CSS 4**: Utilized for utility-first styling and a modern design system.
- **Lucide React**: Provided a comprehensive set of clean and consistent icons.
- **WordPress**: Serves as the robust Content Management System backend.

## Structure

- `front-page.php`: The main entry point for the homepage, mounting the React application.
- `src/`: Contains the React source code, including components, pages, and styles.
- `dist/`: Contains the compiled and optimized production assets (JS & CSS).
- `functions.php`: Handles theme setup, asset queuing, and WordPress integration.

## Development

To start the development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```
