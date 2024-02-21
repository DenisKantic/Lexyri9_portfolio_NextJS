'use client'
import Shop from '.page';
import Navigation from "../Navigation"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"



export default function Paypal(){
    
    
          const clientID= "AYe6kMGJrxSJkvqb99RxWetKgQgzw6c0E0x_1MYMP3o_Uviio8hjbO-u7g9K_4Fq0cKwQvJ865SvDetn"
        

    return (
        <PayPalScriptProvider options={{
            "clientId": clientID
          }}>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#000D2E] via-[#021d62] to-[#000D2E] min-h-[100vh]">
        <Navigation className="z-40"></Navigation>
            <Shop />
        </div> 
        </PayPalScriptProvider>
    )
}