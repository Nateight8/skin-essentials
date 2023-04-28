import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Inter, Montserrat, Poiret_One } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";

const customFont = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--customfont",
});

const montese = Montserrat({ subsets: ["latin"], variable: "--inter" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${customFont.variable} ${montese.variable}`}>
        {/* <Provider store={store}> */}
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
        {/* </Provider> */}
      </body>
    </html>
  );
}
