"use client";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Montserrat, Poiret_One } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import Header from "@/components/header/Header";

const customFont = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--customfont",
});

const montese = Montserrat({ subsets: ["latin"], variable: "--inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${customFont.variable} ${montese.variable} antialiased scroll-smooth`}
      >
        <Provider store={store}>
          <>
            {/* <Navbar /> */}
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        </Provider>
      </body>
    </html>
  );
}
