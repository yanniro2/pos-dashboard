import Footer from "@/components/custom/Footer";
import Navbar from "../../components/custom/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen bg-orange-300 flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
