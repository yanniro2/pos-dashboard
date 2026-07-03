import type { Metadata, Viewport } from "next";
// import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/Theme/theme-provider";
import Footer from "@/components/custom/Footer";
import { CartProvider } from "./contexts/CartContext";
import Header from "@/components/custom/Header";


export const metadata: Metadata = {
  metadataBase: new URL("https://n12oyan.vercel.app"),
  title: {
    default: "POS Dashboard | Sales, Inventory & Reports",
    template: "%s | POS Dashboard",
  },
  description:
    "A responsive point of sale dashboard for managing sales, inventory, employees, reports, and store operations.",
  applicationName: "POS Dashboard",
  authors: [{ name: "Niroyan", url: "https://n12oyan.vercel.app/" }],
  creator: "Niroyan",
  publisher: "Niroyan",
  keywords: [
    "POS dashboard",
    "point of sale",
    "sales dashboard",
    "inventory management",
    "retail dashboard",
    "business reports",
    "Niroyan",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "POS Dashboard | Sales, Inventory & Reports",
    description:
      "Manage sales, inventory, employees, and reports from a responsive POS dashboard.",
    url: "/",
    siteName: "POS Dashboard",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "POS Dashboard interface preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POS Dashboard | Sales, Inventory & Reports",
    description:
      "A responsive point of sale dashboard for sales, inventory, employees, and reports.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="h-screen w-full overflow-hidden bg-skin-medium">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={[
            "light",
            "red-light",
            "red-dark",
            "blue-light",
            "blue-dark",
            "green-light",
            "green-dark",
            "orange-light",
            "orange-dark",
          ]}>
          <CartProvider>
            <div className="flex h-screen w-full flex-col overflow-hidden">
              <Header />
              <div className="flex min-h-0 flex-1 flex-col">{children}</div>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
