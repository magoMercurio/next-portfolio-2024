/* import { Inter } from "next/font/google"; */
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "../components/ui/Header";
import { Space_Mono } from 'next/font/google'

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export const metadata = {
  title: "porfolio 2024",
  description: "portfolio de Raul davila",
};

export default function RootLayout({ children }) {
  return (
    <html className={` ${mono.className}`} lang="es" suppressHydrationWarning>
      <body className=" bg-[#eff1f5] dark:bg-[#1d1e21]" >
        <ThemeProvider attribute="class">     
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
