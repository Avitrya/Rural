import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import Swal from 'sweetalert2'

export default function PaymentForm() {
  return (
    <PayPalButton
            amount="1000"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              //alert("Transaction completed by " + details.payer.name.given_name);
              Swal.fire('Payment Successful!', 'Thank you for shopping with us, ' + details.payer.name.given_name +'!\nYour order details have been sent to ' + details.payer.email_address + ".\n Your Order ID is: " + data.orderID + ".", 'success').then(function (result) { if (result.value) { window.location = "http://quiet-brushlands-83332.herokuapp.com/"; } })

              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                  orderId: data.orderID
                })
              });
            }}
            options={{
              vault: true,
              clientId: process.env.CLIENT_ID
            }}
    />
  );
}
