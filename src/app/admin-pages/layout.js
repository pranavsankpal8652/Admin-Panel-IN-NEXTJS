import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css"
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
import Head from "next/head";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Admin Panel | Frank and Oak</title>
      <body>
        <div class="flex h-screen">
          <aside class="min-w-64 bg-gray-800 text-white overflow-y-scroll scrollbar-hide">
            <SideBar />
          </aside>

          <main class="flex-1 bg-gray-100 overflow-y-auto">
            {children}
            <Footer/>
          </main>
        </div>


      </body>
    </html>
  );
}
