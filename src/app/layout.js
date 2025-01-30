import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <title>Admin Panel | Frank and Oak</title>
        <body>
          {children}
        </body>
      </html>
    

  );
}
