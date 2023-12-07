import Navbar from "@/components/custom/Setting/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-between"
      suppressHydrationWarning>
      <div className="w-full h-full  flex  justify-between">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
