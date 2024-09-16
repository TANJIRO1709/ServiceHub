export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main  className="bg-Natural-image bg-cover bg-center">
        {children}
      </main>
    );
  }