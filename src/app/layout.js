import Sidebar from "./components/sidebar";
import "./globals.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col ">
          <div className="[600px]">{children} </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
