import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - IfeChukwu",
  description: "Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ovo.variable} scroll-smooth`}>
      <body className="antialiased leading-8 overflow-x-hidden">
        {children}
        <Toaster position="top-center" reverseOrder={false} />

      </body>
    </html>
  );
}
