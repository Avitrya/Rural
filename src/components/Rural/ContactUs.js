import React from "react";
import './LandingPage.css';


const ContactUs = () => (
  <div className="footer">
      <h2>Contact Us:</h2>
    <h3>paypalhandicrafts@paypal.com</h3>
    <h3>9876543210</h3>
  </div>
);

export default ContactUs;





// import React from 'react';
// import axios from 'axios';

// class ContactUs extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       message: ''
//     }
//   }

//   handleSubmit(e){
//     e.preventDefault();
//     // axios({
//     //   method: "POST",
//     //   url:"http://localhost:3002/send",
//     //   data:  this.state
//     // }).then((response)=>{
//     //   if (response.data.status === 'success') {
//     //     alert("Message Sent.");
//     //     this.resetForm()
//     //   } else if (response.data.status === 'fail') {
//     //     alert("Message failed to send.")
//     //   }
//     // })
//   }

//   resetForm(){
//     this.setState({name: '', email: '', message: ''})
//   }

//   render() {
//     return(
//       <div className="App">
//           <h1 style={{fontSize:'45px'}}>Contact Us!</h1>
//         <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//           <div className="ui form">
//           <div className="seven wide field">
//               <label>Name</label>
//               <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//           </div>
//           </div>
//           <div className="ui form">
//           <div className="seven wide field">
//               <label>Email address</label>
//               <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//           </div>
//           </div>
//           <div className="ui form">
//           <div className="seven wide field">
//               <label>Message</label>
//               <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//           </div>
//           </div>
//           <br />
//           <button type="submit" className="ui primary button">Submit</button>
//         </form>
//       </div>
//     );
//   }

//   onNameChange(event) {
// 	  this.setState({name: event.target.value})
//       console.log(event.target.value)
//   }

//   onEmailChange(event) {
// 	  this.setState({email: event.target.value})
//       console.log(event.target.value)
//   }

//   onMessageChange(event) {
// 	  this.setState({message: event.target.value})
//       console.log(event.target.value)
//   }
// }

// export default ContactUs;