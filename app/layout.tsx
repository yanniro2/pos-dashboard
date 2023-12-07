import type { Metadata } from "next";
// import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/custom/Theme/theme-provider";
import Footer from "@/components/custom/Footer";
import { CartProvider } from "./contexts/CartContext";
import Header from "@/components/custom/Header";


export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Pos System",
  },
  description: "Created By Niroyan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-screen h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          themes={["red", "blue", "green", "orange", "dark", "light"]}>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
