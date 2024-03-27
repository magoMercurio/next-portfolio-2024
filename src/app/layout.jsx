/* import { Inter } from "next/font/google"; */
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "../components/ui/Header";

export const metadata = {
  title: "porfolio 2024",
  description: "portfolio de Raul davila",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className=" bg-[#f2f2f2] dark:bg-slate-800" >
        <ThemeProvider attribute="class">     
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
