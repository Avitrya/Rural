import React from 'react';
import './LandingPage.css';
import handicraft1 from '../../assets/handicraft1.jpg';
import handicraft2 from '../../assets/handicraft2.jpg';
import handicraft3 from '../../assets/handicraft3.jpg';
import ContactUs from './ContactUs';
// import Checkout from './Checkout';

const LandingPage = () => {

    const str1="The Thanjavur Art Plate or plaque was introduced by Rajah Serfoji-II (1777–1832) during the Maratha rule in Thanjavur. It was made as an exclusive gift item by the artisans of Thanjavur at the suggestion of the Rajah. It is an inherited art, and is a way of living for them.";
    const str2="It is believed that somewhere 1500 years ago, tribal Rajasthani Bhat community started the use of Kathputli as string marionette art and it is in their love for tradition that art of Kathputli survived the test of time. Tradition of Kathputli is based on folk tales and stories";
    const str3="The art of bamboo craft is believed to have originated from the rural areas of Goa. The origin of this art was to cater to bamboo carriers and baskets which were specially designed for the farmers and fishermen. Farmers carried baskets that used to carry coconut, rice, paddy, fish, and flowers.";

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
                        <div className="ui fluid card" style={{width: '450px', backgroundColor: 'transparent'}}>
                        <div className="image">
                            <img src={handicraft1} style={{height: '400px'}}/>
                        </div>
                        <div className="content" style={{textAlign:'justify'}}>
                            <a className="header">{str1}</a>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card"style={{width: '450px', backgroundColor: 'transparent'}}>
                        <div className="image">
                            <img src={handicraft2} style={{height: '400px'}}/>
                        </div>
                        <div className="content" style={{textAlign:'justify'}}>
                            <a className="header">{str2}</a>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card"style={{width: '450px', backgroundColor: 'transparent'}}>
                        <div className="image">
                            <img src={handicraft3} style={{height: '400px'}}/>
                        </div>
                        <div className="content" style={{textAlign:'justify'}}>
                            <a className="header">{str3}</a>
                        </div>
                        </div>
                    </div>
                    </div>
            </section>
            <ContactUs />
            {/* <section className="contact">
                <ContactUs />
            </section> */}
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