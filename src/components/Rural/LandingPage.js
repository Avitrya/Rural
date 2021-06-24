import React from 'react';
import './LandingPage.css';
import handicraft1 from '../../assets/handicraft1.jpg';
import handicraft2 from '../../assets/handicraft2.jpg';
import handicraft3 from '../../assets/handicraft3.jpg';
import handicraft4 from '../../assets/handicraft4.jpg';
import ContactUs from './ContactUs';
// import Checkout from './Checkout';

const LandingPage = () => {

    const str1="The Thanjavur Art Plate or plaque was introduced by Rajah Serfoji-II (1777–1832) during the Maratha rule in Thanjavur. It was made as an exclusive gift item by the artisans of Thanjavur at the suggestion of the Rajah. It is an inherited art, and is a way of living for them.";
    const str2="It is believed that somewhere 1500 years ago, tribal Rajasthani Bhat community started the use of Kathputli as string marionette art and it is in their love for tradition that art of Kathputli survived the test of time. Tradition of Kathputli is based on folk tales and stories";
    const str3="The art of bamboo craft is believed to have originated from the rural areas of Goa. The origin of this art was to cater to bamboo carriers and baskets which were specially designed for the farmers and fishermen. Farmers carried baskets that used to carry coconut, rice, paddy, fish, and flowers.";
    const str4="An effort to connect consumers directly to the source of the products they consume and their producers. Get to know the stories behind the scene.";
    const str5="Revolutionizing Rural Economy!";
    const str6="Getting India Online!";
    
    return (
        <div>
            <section className="welcome">
                <svg style={{width: '100%', height: '220px'}}>
                   <text x="50%" y="60%"  textAnchor="middle">A New Hope</text>
                </svg>
                
            </section>
            <section className="newhope">
                <div className="content" style={{textAlign:'center'}}><h2>{str4}</h2></div>
                <br />
                <div className="content" style={{textAlign:'center'}}><h3>{str6}</h3></div>
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
            <section className="contact">
            <div className="ui cards">
                <div className="card" style={{backgroundColor: 'transparent'}}>
                <div className="image">
                    <img src={handicraft4}/>
                </div>
                    <div className="content" >
                        <div className="description" >
                            <h3 style={{textAlign:'center'}}>{str5}</h3>
                        </div>
                    </div>
                </div>
            </div>
                
            </section>
        </div>
      );
};

export default LandingPage;

