import Navbar from "@/components/navbar/Navbar";
import "../globals.css";
import { Nunito } from "next/font/google";
import Footer from "@/components/footer/Footer";

const nunito = Nunito({ weight: "700", subsets: ["latin"] });

export default function ArabicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
