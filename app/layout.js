import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Work_Sans, Nunito } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Bishworaj Poudel | Course",
  description: "Learn tons of things from Bishworaj Poudel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <div className="flex flex-col justify-between w-full min-h-screen">
          <Navbar />
          <div className="w-full grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
