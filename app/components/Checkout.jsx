"use client"
import PaypalCheckoutButton from "./PaypalCheckoutButton";

export default function Checkout ({items}){


    const { price, position, color, size, quantity} = items;

    const hodieDescription = "Boja dukserice: " + color + " / " + " Pozicija natpisa: " +position + " Velicina:" + size + " / " + " kolicina: " +quantity;

    return (
        <div className="w-full h-[350px] flex justify-center items-center bg-black/50" >
        
        <div className="flex flex-col items-center justify-center text-xl w-full w-full h-[350px]">
        <h1>You choosed:</h1>
        <p className={(position==undefined) ? "hidden" : "block"}>Image position: {position}</p>
        <p>Color: {color}</p>
        <p className={(size==undefined) ? "hidden" : "block"}>Size: {size}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: {(price)}</p>

        
        <PaypalCheckoutButton 
        product={{description: hodieDescription, price: price}}/>

        <h1 className="text-md text-center w-[90%]">If you don't have paypal, you can contact me  directly on e-mail with order</h1>
        </div>
          </div>
    )
}
    