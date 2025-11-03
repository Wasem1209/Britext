import Footer from "./Components/Footer";
import "./globals.css";
import Header from "./Components/Header";

export const metadata = {
  title: "Fast Book Shopping",
  description: "Shop your favorite books easily and quickly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}