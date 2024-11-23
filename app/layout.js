import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Mirija Marc - Software Developer",
  description:
    "Welcome to the portfolio of Mirija Marc! I am a passionate full-stack developer and a self-taught programmer. Driven by curiosity, I enjoy exploring new technologies and thrive on continuous learning. I am open to collaboration, eager to take on new challenges, and committed to growing with every opportunity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        {/* <Footer /> */}
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
