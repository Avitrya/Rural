import React from 'react';
import Villages from './Villages';
class Product extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedState : null,
            isStatePresent: false
        };
    }
    handleStateChange(e){
        this.setState({
            selectedState : e.target.value,
            isStatePresent : true
        }) 
    }
    render() {
        console.log(this.state.isStatePresent);
        console.log(this.state.selectedState);
        return (
                <div>
                    <select id="States" multiple="" className="ui fluid dropdown"
                    onChange = {(e) => {this.handleStateChange(e)}}>
                        <option value="TN">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Assam">Assam</option>
                        <option value="Jammu Kashmir">Jammu Kashmir</option>
                        <option value="Orissa">Orissa</option>
                    </select>
                    {this.state.isStatePresent ? <Villages MyProp = {this.state.selectedState}/> : <div></div>}
                </div>
             );
    }
};

export default Product;