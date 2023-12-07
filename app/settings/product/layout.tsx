import Header from "@/components/custom/Setting/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-screen h-screen flex items-center justify-between flex-col">
      <Header />
      {children}
    </section>
  );
}
