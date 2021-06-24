import React from 'react';
import Select from 'react-select';
import ProductLists from './ProductLists';

class Villages extends React.Component {
    constructor(props){
        super(props);
        this.map = new Map([["Karnataka", ["Hubli", "Belakavadi", "Hoskote"]],
            ["Tamil Nadu" , ["Attur", "Sathyamangalam", "Pudukottai"]],
            ["Gujarat", ["Amreli", "Babra", "Dasada"]],
            ["Telangana", ["Narsapur (Buzurg)", "Andholi", "Ghatti"]],
            ["Orissa", ["Balibahal", "Atanaka"]],
            ["Assam", ["Sualkuchi", "Baksa", "Salmara-Mankachar"]],
            ["Jammu Kashmir", ["Kulgam", "Duru", "Sopore"]],
            ["West Bengal", ["Panchmura", "Junput", "Rimbick"]]]);
        this.state = {
            selectedVillage : null,
            isVillagePresent: false
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        console.log(e.value);
        this.setState({
            selectedVillage : e.value,
            isVillagePresent : true
        });
    }
    render() {
        var villagesList = [];
        this.map.get(this.props["MyProp"]).forEach(element => {
            villagesList.push({label: element, value : element})
        });
        console.log(villagesList);
        return(
            <div>
                <br />
                <Select id="Villages"  className="ui fluid dropdown" onChange={this.handleChange}
                options={villagesList}/>
                {this.state.isVillagePresent ? <ProductLists MyProp = {this.state.selectedVillage}/>  : <div></div>}
            </div>
        )
    }
}

export default Villages;