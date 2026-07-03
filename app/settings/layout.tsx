import Navbar from "@/components/custom/Setting/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="flex min-h-0 w-full flex-1 flex-col gap-3 overflow-y-auto p-3 lg:flex-row lg:justify-between lg:overflow-hidden"
      suppressHydrationWarning>
      <Navbar />
      <div className="min-h-0 w-full flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
