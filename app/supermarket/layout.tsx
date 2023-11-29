import Footer from "@/components/custom/Footer";
import Navbar from "../../components/custom/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Supermarket",
    template: "%s | Supermarket",
  },
  description: "Created By Niroyan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="w-screen h-screen  flex flex-col justify-between"
      suppressHydrationWarning>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
