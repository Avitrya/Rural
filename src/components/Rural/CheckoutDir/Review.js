import React from 'react';

const Review = () => {
  return(
    <div className="ui teal segment" style={{textAlign:'center'}}>
      <h2>Your order has been placed successfully!</h2>
    </div>
  );
}

export default Review;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Grid from '@material-ui/core/Grid';

// const products = [
//   { name: 'Handicraft', desc: '1 Qt.', price: '₹299' },
//   { name: 'Farm Fresh Tomatoes', desc: '1 kg.', price: '₹79' },
//   { name: 'Product 3', desc: '1 Qt.', price: '₹100' },
//   { name: 'Product 4', desc: '1 Qt.', price: '₹100' },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];
// const addresses = ['1 Drive', 'Town', 'City', '100000', 'India'];
// const payments = [
//   { name: 'Payment', detail: 'PayPal' },
//   { name: 'User', detail: 'PayPal User' },
//   { name: 'PayPal ID', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

// const useStyles = makeStyles((theme) => ({
//   listItem: {
//     padding: theme.spacing(1, 0),
//   },
//   total: {
//     fontWeight: 700,
//   },
//   title: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function Review() {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Order summary
//       </Typography>
//       <List disablePadding>
//         {products.map((product) => (
//           <ListItem className={classes.listItem} key={product.name}>
//             <ListItemText primary={product.name} secondary={product.desc} />
//             <Typography variant="body2">{product.price}</Typography>
//           </ListItem>
//         ))}
//         <ListItem className={classes.listItem}>
//           <ListItemText primary="Total" />
//           <Typography variant="subtitle1" className={classes.total}>
//             ₹578
//           </Typography>
//         </ListItem>
//       </List>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <Typography variant="h6" gutterBottom className={classes.title}>
//             Shipping
//           </Typography>
//           <Typography gutterBottom>PayPal User</Typography>
//           <Typography gutterBottom>{addresses.join(', ')}</Typography>
//         </Grid>
//         <Grid item container direction="column" xs={12} sm={6}>
//           <Typography variant="h6" gutterBottom className={classes.title}>
//             Payment details
//           </Typography>
//           <Grid container>
//             {payments.map((payment, index) => (
//               <React.Fragment key={index}>
//                 <Grid item xs={6}>
//                   <Typography gutterBottom>{payment.name}</Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography gutterBottom>{payment.detail}</Typography>
//                 </Grid>
//               </React.Fragment>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }