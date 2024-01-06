import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LEXYRI9',
  description: 'Vaš omiljeni tiktoker, Lexyri9! Kupovinom mojih proizvoda ne samo da \n' +
  'podržavate vrhunski proizvod, već i pružate podršku osobama s invaliditetom. Svakom kupovinom \n' +
  'doprinosite stvaranju radnih mjesta, unapređujete kvalitet života i promovišete inkluzivnost, čineći \n' + 
  'svijet boljim mjestom za sve. Unisex kape, unisex majice kratkih rukava, unisex majice dugih rukava, parfemi i mnogo toga',
  metadataBase: new URL('http://www.lexyri9.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
