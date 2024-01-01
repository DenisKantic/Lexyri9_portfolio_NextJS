'use client'
import ShopSite from "../components/ShopSite"
import Navigation from "../components/Navigation"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
 



export default function Shop(){
    
    
          const clientID= "AceliHG-lGyBnO_SbJ2RHLivdbAiaRvnxSsxQ_c3n08FGiGcbKwfPbLDqXdJTwSGA7EB-snx_A8esBy6"
        

    return (
        <PayPalScriptProvider options={{
            "clientId": clientID
          }}>
        <div className="bg-[#000D2E] min-h-[100vh]">
        <Navigation className="z-40"></Navigation>
            <ShopSite />
        </div>
        </PayPalScriptProvider>
    )
}