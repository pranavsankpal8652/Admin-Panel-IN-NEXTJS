import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css"
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
import Head from "next/head";



export default function RootLayout({ children }) {
  return (
  <>
   <div className="flex h-screen">
          <aside className="min-w-64 bg-gray-800 text-white overflow-y-scroll scrollbar-hide">
            <SideBar />
          </aside>

          <main className="flex-1 bg-gray-100 overflow-y-auto">
            {children}
            <Footer/>
          </main>
        </div>
  </>
       


     
  );
}
