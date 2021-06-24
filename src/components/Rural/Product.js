import React from 'react';
import Villages from './Villages';
import Select from 'react-select';
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
        console.log(this.state.isStatePresent);
        console.log(this.state.selectedState);
        var StateList = [];
        this.states.forEach(element => { StateList.push({label: element, value : element})});
        return (
                <div>
                    <Select id="States"  className="ui fluid dropdown" onChange={this.handleChange}
                options={StateList}/>
                    {this.state.isStatePresent ? <Villages MyProp = {this.state.selectedState}/> : <div></div>}
                </div>
             );
    }
};

export default Product;