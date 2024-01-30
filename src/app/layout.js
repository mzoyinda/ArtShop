import { Inter } from "next/font/google";
import "./globals.css";
import App from "../components/App";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArtShop",
  description: "Art products showcase"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/favicon.png' />
      </head>
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
