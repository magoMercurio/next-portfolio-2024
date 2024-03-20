/* import { Inter } from "next/font/google"; */
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "../components/Header";



/* const inter = Inter({ subsets: ["latin"] });
 */

export const metadata = {
  title: "porfolio 2024",
  description: "portfolio de Raul davila",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body >
        <ThemeProvider attribute="class">     
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
