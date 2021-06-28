import React from 'react';
import './Subscription.css';
import PayPalBtn from './PayPalBtn';
import Swal from 'sweetalert2';

const paypalSubscribe = (data, actions) => {
    return actions.subscription.create({
    'plan_id': 'P-6WB949741N9490633MDKWVHI',
    });
};
const paypalOnError = (err) => {
    console.log("Error")
}
const paypalOnApprove = (data, detail) => {
// call the backend api to store transaction details
    console.log("Paypal approved")
    Swal.fire('Subscription Successful!', 'Thank you for shopping with us! Your Order ID is: ' + data.orderID , 'success')
    
};
function Subscription() {
    return (
        <div className="App">
            <PayPalBtn
                amount = "50"
                currency = "USD"
                createSubscription={paypalSubscribe}
                onApprove={paypalOnApprove}
                catchError={paypalOnError}
                onError={paypalOnError}
                onCancel={paypalOnError}
            />
        </div>
    );
}
export default Subscription;



















// other code ------------------------------


// import { PayPalButton } from "react-paypal-button-v2";
// import React from 'react';

// export default class Subscription extends React.Component {
//     render() {
//         const paypalKey = "AdavDwNP5-_FbYNQinJ6IPQhJzTQlQmqNXU3FultsauYCkJHzmzb5nlp3uy6qWxTkTqIApigZoWQ2BSm&vault=true&intent=subscription";
//         return (
//             <PayPalButton
//                 options={{clientId: paypalKey, vault: true}}
//                 createSubscription={(data, actions) => {
//                     return actions.subscription.create({
//                         plan_id: 'P-6WB949741N9490633MDKWVHI'
//                     });
//                 }}
//                 onApprove={(data, actions) => {
//                     // Capture the funds from the transaction
//                     return actions.subscription.get().then(function(details) {
//                         // Show a success message to your buyer
//                         alert("Subscription completed");

//                         // OPTIONAL: Call your server to save the subscription
//                         return fetch("/paypal-subscription-complete", {
//                             method: "post",
//                             body: JSON.stringify({
//                                 orderID: data.orderID,
//                                 subscriptionID: data.subscriptionID
//                             })
//                         });
//                     });
//                 }}
//             />
//         );
//     }
// }



