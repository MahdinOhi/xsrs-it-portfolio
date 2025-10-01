import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

export const metadata = {
  title: "XSRS-IT - Digital Dreams Take Flight",
  description: "Empowering startups, igniting innovation. XSRS - Where Digital Dreams Take Flight.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
