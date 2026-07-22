import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/footer";
import { AuthProvider } from "./api/Provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Toonlance | 2D Animation Studio",
  description:
    "Toonlance creates high-quality 2D animations, storyboards, character designs, and visual experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&icon_names=keyboard_double_arrow_up" />
      </head>
      <body className="min-h-full flex flex-col">
        <AuthProvider>
         <Navbar/>
        {children}
        <Footer/>
        </AuthProvider>
        </body>
    </html>
  );
}
