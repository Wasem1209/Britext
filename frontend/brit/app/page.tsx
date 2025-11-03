import "./globals.css";

import Hero from "./Components/Hero";
import Trending from "./Components/Trending";
import ShoppingExperience from "./Components/ShoppingExperience";

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
        <Hero />
        <Trending />
        <ShoppingExperience />
        {children}
      </body>
    </html>
  );
}