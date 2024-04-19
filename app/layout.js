import "./globals.css";
import Header from './components/Header'
import Footer from './components/Footer'

import {DM_Serif_Display} from "next/font/google"


const serif=DM_Serif_Display({

  weight:'400',
  subsets:["latin"]
})
export default function RootLayout({ children }) {
  return (
    <>

      <html lang="en">
        <body className={serif.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
