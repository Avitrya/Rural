import React from 'react';
import Villages from './Villages';
import Select from 'react-select';
import handicraft1 from '../../assets/handicraft1.jpg';
import handicraft2 from '../../assets/handicraft2.jpg';
import handicraft3 from '../../assets/handicraft3.jpg';
//import ProductLists from './ProductLists';


class Product extends React.Component {

    
    constructor(props) {
        super(props);
        
        this.state = {
            selectedState : null,
            isStatePresent: false
        };
        this.states = ["Karnataka", "Tamil Nadu", "Telangana", "Gujarat", "Assam", "Jammu Kashmir", "Orissa", "West Bengal" ];
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        console.log(e.value);
        this.setState({
            selectedState : e.value,
            isStatePresent : true
        });
    }
    render() {
        // console.log(this.state.isStatePresent);
        // console.log(this.state.selectedState);
        const str1="The Thanjavur Art Plate or plaque was introduced by Rajah Serfoji-II (1777–1832) during the Maratha rule in Thanjavur. It was made as an exclusive gift item by the artisans of Thanjavur at the suggestion of the Rajah. It is an inherited art, and is a way of living for them.";
        const str2="It is believed that somewhere 1500 years ago, tribal Rajasthani Bhat community started the use of Kathputli as string marionette art and it is in their love for tradition that art of Kathputli survived the test of time. Tradition of Kathputli is based on folk tales and stories";
        const str3="The art of bamboo craft is believed to have originated from the rural areas of Goa. The origin of this art was to cater to bamboo carriers and baskets which were specially designed for the farmers and fishermen. Farmers carried baskets that used to carry coconut, rice, paddy, fish, and flowers.";
    
        var StateList = [];
        this.states.forEach(element => { StateList.push({label: element, value : element})});
        return (
                <div>
                    <br />
                    <br />
                    <h3>Select the state from which you want to purahase the product from: </h3>
                    <Select id="States"  className="ui fluid dropdown" onChange={this.handleChange}
                        options={StateList}/>
                    {this.state.isStatePresent ? <Villages MyProp = {this.state.selectedState}/> : 
                    <div>
                        <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
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
                    </div></div>}
                    {/* <ProductLists /> */}

                </div>
             );
    }
};

export default Product;