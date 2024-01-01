import React, {useEffect, useState} from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

const PaypalCheckoutButton = ({product}) => {

    const { description,price } = product; // destructure props 

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(false)



    const handleApprove = (orderID) =>{
        // call backend to fulfill order
        
        //if response is success
        setPaidFor(true);
    
        //refresh user's account or subscription status


        //if the response is error 
        // alert the user 
    }

    if(paidFor){
        // display success message, modal or redirect the user to the success page
        alert("Thank you for your purchase")
        window.location.reload(true);
    }

    if(error){
        //display error message 
        alert(error)
    }

  return (
    <PayPalButtons
    className='pt-3 w-[50%]'
    style={{
        locale: 'en-US',
        color: "black",
        size: "responsive",
        layout: "horizontal",
        tagline: "false",
        shape: "pill",
        label: "pay"
    }}
    forceReRender={[description,price]}
        createOrder={(data,actions)=>{
            return actions.order.create({
                purchase_units: [
                    { 
                        description,   // ovdje nastaje problem, on ne cita uopste nekada sta je za description
                        amount: {
                            value: price,
                            description: description // ovdje uredno cita cijenu 
                        }
                    }
                ]
    
            })
        }}

        onApprove={async (data,actions) =>{
            const order = await actions.order.capture();
            console.log("order",order)

            handleApprove(data.orderID)
        }}

        onError={(err)=>{
            setError(err);
            console.error("Paypal checkout on error", err);
        }}
    >

    </PayPalButtons>
  )
}

export default PaypalCheckoutButton