import Navbar from "@/components/en/navbar/Navbar";
import "../globals.css";
import { Nunito } from "next/font/google";
import Footer from "@/components/en/footer/Footer";

const nunito = Nunito({ weight: "700", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
