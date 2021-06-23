import React from 'react';
import './LandingPage.css';
import handicraft1 from '../../assets/handicraft1.jpg';
import handicraft2 from '../../assets/handicraft2.jpg';
import handicraft3 from '../../assets/handicraft3.jpg';
import ContactUs from './ContactUs';
import Checkout from './Checkout';

const LandingPage = () => {
    return (
        <div>
            <section className="welcome">
                <svg style={{width: '100%', height: '220px'}}>
                   <text x="50%" y="60%"  textAnchor="middle">Welcome!</text>
                </svg>
            </section>

            <section className="cards">
                <div className="ui three column grid">
                    <div className="column">
                        <div className="ui fluid card" style={{width: '450px'}}>
                        <div className="image">
                            <img src={handicraft1} style={{height: '400px'}}/>
                        </div>
                        <div className="content">
                            <a className="header">Daniel Louise</a>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card"style={{width: '450px'}}>
                        <div className="image">
                            <img src={handicraft2} style={{height: '400px'}}/>
                        </div>
                        <div className="content">
                            <a className="header">Helen Troy</a>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card"style={{width: '450px'}}>
                        <div className="image">
                            <img src={handicraft3} style={{height: '400px'}}/>
                        </div>
                        <div className="content">
                            <a className="header">Elliot Fu</a>
                        </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section className="contact">
                <ContactUs />
            </section>
        </div>
      );
};

export default LandingPage;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ImageCard from './ImageCard';
// import places from '../static/places';
// import useWindowPosition from '../hook/useWindowPosition';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     [theme.breakpoints.down('md')]: {
//       flexDirection: 'column',
//     },
//   },
// }));
// export default function () {
//   const classes = useStyles();
//   const checked = useWindowPosition('header');
//   return (
//     <div className={classes.root} id="place-to-visit">
//       <ImageCard place={places[1]} checked={checked} />
//       <ImageCard place={places[0]} checked={checked} />
//     </div>
//   );
// }