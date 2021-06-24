import React from 'react';
import Select from 'react-select';

class Villages extends React.Component {
    constructor(props){
        super(props);
        this.map = new Map([["Karnataka", ["Hubli", "Belakavadi", "Hoskote"]],
            ["Tamil Nadu" , ["Attur", "Sathyamangalam", "Pudukottai"]],
            ["Gujarat", ["Amreli", "Babra", "Dasada"]]]);
    }
    render() {
        var villagesList = [];
        this.map.get(this.props["MyProp"]).forEach(element => {
            villagesList.push({label: element, value : element})
        });
        console.log(villagesList);
        return(
            <div>
                <Select id="Villages"  className="ui fluid dropdown"
                options={villagesList}/>
            </div>
        )
    }
}

export default Villages;