import './globals.css';

export const metadata = {
  title: 'Layover Friends',
  description: 'Connect with travelers during airport layovers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
