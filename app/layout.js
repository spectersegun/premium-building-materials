import './globals.css';
import SiteChrome from '../components/SiteChrome';

export const metadata = {
  title: 'PREMIUM Building Materials — Imported finishes, Nigeria',
  description: 'Imported sanitary ware, doors, windows, cabinets, tiles and finishes, delivered to site across Nigeria.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body><SiteChrome>{children}</SiteChrome></body>
    </html>
  );
}
