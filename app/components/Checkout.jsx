"use client"
import PaypalCheckoutButton from "./PaypalCheckoutButton";

export default function Checkout ({items}){


    const { price, position, color, size, quantity, text, clothes,perfum} = items;

    const hodieDescription = "Boja " +clothes + ": " + color + " / " + " Pozicija natpisa: " +position + " / " + "Natpis po zelji:" +text+ " / " + " Velicina:" + size + " / " + " kolicina: " +quantity;

    return (
        <div className="w-full h-[350px] flex justify-center items-center bg-black/50" >
        
        <div className="flex flex-col items-center justify-center text-xl w-full w-full h-[350px]">
        <h1>You choosed:</h1>
        <p className={(position==undefined) ? "hidden" : "block"}>Image position: {position}</p>
        <p className={(text==undefined) ? "hidden" : "block"}>Custom text: {(text==undefined) ? "/" : (text)}</p>
        <p className={(color==undefined) ? "hidden" : "block"}>Color: {color}</p>
        <p className={perfum ? "block" : "hidden"}>Perfume: {perfum}</p>
        <p className={(size==undefined) ? "hidden" : "block"}>Size: {size}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: {(price)}</p>

        
        <PaypalCheckoutButton 
        product={{description: hodieDescription, price: price}}/>

        <h1 className="text-md text-center w-[90%]">If you don't have paypal, you can contact me  directly on e-mail with order</h1>
        <h1 className="text-md text-center w-[90%]">Moguce placanje prilikom preuzimanja poste u Bosni i Hercegovini</h1>
        </div>

          </div>
    )
}
    