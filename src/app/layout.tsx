import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uznain Rashid | MERN & Next.js Developer",
  description: "Portfolio of Uznain Rashid - Full-Stack Developer",
 icons: {
    icon: [
      {
        url: "/uznain-rashid.png", // Agar public folder mein hai
        href: "/uznain-rashid.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Humne bg-white ke sath dark mode background ko dark:bg-cyber-bg se badal diya hai taake cyber theme active ho */}
      <body 
        className={`${inter.className} bg-white dark:bg-cyber-bg text-slate-900 dark:text-slate-100 antialiased min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 md:px-6 pt-28 pb-12 space-y-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}