import "./globals.css";

import Hero from "./Components/Hero";
import Trending from "./Components/Trending";
import ShoppingExperience from "./Components/ShoppingExperience";
import OtherBooks from "./Components/OtherBooks";
import Testmonial from "./Components/Testmonial";
import SubscribeSection from "./Components/SubscribeSection";
import CommentSection from "./Components/CommentSection";


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
        <OtherBooks />
        {children}
        <Testmonial />
        <SubscribeSection />
        <CommentSection />
      </body>
    </html>
  );
}