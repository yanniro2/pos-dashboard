import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/custom/Theme/theme-provider";

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   // variable: "--font-sans",
// });

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Supermarket",
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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
          // fontSans.variable
        )}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
