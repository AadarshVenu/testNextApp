import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'My Test App',
  description: 'Test App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
