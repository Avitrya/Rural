// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
// import SortIcon from '@material-ui/icons/Sort';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Link as Scroll } from 'react-scroll';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     fontFamily: 'Nunito',
//   },
//   appbar: {
//     background: 'none',
//   },
//   appbarWrapper: {
//     width: '80%',
//     margin: '0 auto',
//   },
//   appbarTitle: {
//     flexGrow: '1',
//   },
//   icon: {
//     color: '#fff',
//     fontSize: '2rem',
//   },
//   colorText: {
//     color: '#5AFF3D',
//   },
//   container: {
//     textAlign: 'center',
//   },
//   title: {
//     color: '#fff',
//     fontSize: '4.5rem',
//   },
//   goDown: {
//     color: '#5AFF3D',
//     fontSize: '4rem',
//   },
// }));
// export default function Header() {
//   const classes = useStyles();
//   const [checked, setChecked] = useState(false);
//   useEffect(() => {
//     setChecked(true);
//   }, []);
//   return (
//     <div className={classes.root} id="header">
//       <AppBar className={classes.appbar} elevation={0}>
//         <Toolbar className={classes.appbarWrapper}>
//           <h1 className={classes.appbarTitle}>
//             My<span className={classes.colorText}>Island.</span>
//           </h1>
//           <IconButton>
//             <SortIcon className={classes.icon} />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Collapse
//         in={checked}
//         {...(checked ? { timeout: 3000 } : {})}
//         collapsedHeight={50}
//       >
//         <div className={classes.container}>
//           <h1 className={classes.title}>
//             Welcome to <br />
//             My<span className={classes.colorText}>Island.</span>
//           </h1>
//           <Scroll to="place-to-visit" smooth={true}>
//             <IconButton>
//               <ExpandMoreIcon className={classes.goDown} />
//             </IconButton>
//           </Scroll>
//         </div>
//       </Collapse>
//     </div>
//   );
// }









import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <div className="ui secondary pointing menu" style={{height: '65px'}}>
            <Link to="/" className="item">
                <i className="home icon"></i>
                Home
            </Link>
            <Link to="/product" className="item">
                All Products
            </Link>
            <div className="right menu">
                <Link to="/blog" className="item">
                    Stories
                </Link>
                <Link to="/login" className="item">
                    <button className="ui google plus button">
                        Login
                    </button>
                </Link>
                <Link to="/cart" className="item">
                    <i className="shopping cart big icon"></i>
                </Link>
            </div>
        </div>
    );
};

export default Header;