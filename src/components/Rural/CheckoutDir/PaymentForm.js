import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

export default function PaymentForm() {
  return (
    <PayPalButton
            amount="100"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert("Transaction completed by " + details.payer.name.given_name);
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
              clientId: "AdavDwNP5-_FbYNQinJ6IPQhJzTQlQmqNXU3FultsauYCkJHzmzb5nlp3uy6qWxTkTqIApigZoWQ2BSm"
            }}
    />
  );
}

