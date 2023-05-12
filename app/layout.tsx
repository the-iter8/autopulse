"use client";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' data-theme='dracula'>
      <title>AutoPulse</title>
      <body className={inter.className}>
        {children}
        <footer>
          <p className="text-center p-2">
            Made with &hearts; by{" "}
            <a href='https://iter8.netlify.app/' target='_blank' className='text-[#64ffda]' rel='noreferrer'>
              iter8
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
