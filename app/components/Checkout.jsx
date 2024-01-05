"use client"
import PaypalCheckoutButton from "./PaypalCheckoutButton";

export default function Checkout ({items}){



    const { price, position, color, size,  text, clothes,perfume} = items;

    const hodieDescription = "Tip majice: " + clothes + "/" + "Boja: "  + color + " / " + " Pozicija natpisa: " +position + " / " + "Natpis po zelji:" +text+ " / " + " Velicina:" + size + " / ";

    return (
        <div className="w-full h-auto flex flex-row justify-center items-center bg-black/50 p-3" >
        
        <div className="flex flex-col items-center justify-center text-xl w-full h-auto">
        <h1>Vaš izbor:</h1> <br />
        <div className="flex justify-center items-center flex-col">
        <p className={(position==undefined) ? "hidden" : "block"}>Pozicija natpisa: {position}</p> 
        <p className={(text=="") ? "hidden" : "block"}>Text po želji: {text}</p>
        <p className={(color==undefined) ? "hidden" : "block"}>Boja: {color}</p> 
        <p className={perfume ? "block" : "hidden"}>Parfem: {perfume}</p> 
        <p className={(size==undefined) ? "hidden" : "block"}>Veličina: {size}</p> 
        <p>Ukupno: {(price)} &euro;</p>
        </div>

        
        <PaypalCheckoutButton
        product={{description: hodieDescription, price: price}}/>

        </div>

          </div>
    )
}
    