import Navbar from "@/components/custom/Setting/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="w-screen h-screen flex  justify-between"
      suppressHydrationWarning>
      <Navbar />
      {children}
    </div>
  );
}
