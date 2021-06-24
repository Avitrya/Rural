import React from 'react';
import Select from 'react-select';

class ProductLists extends React.Component {
    constructor(props){
        super(props);
        this.location = props.MyProp
    }
    render(){
        return(
            <div>
                <br/>
                <h3 className="ui header">Products from {this.location}</h3>
                <br/>
                <section className="cards">
                <div className="ui three column grid">
                    <div className="column">
                        <div className="ui fluid card" style={{width: '385px', backgroundColor: 'transparent'}}>
                            <div className="image">
                                <img src="../../images/prod1.jpeg" style={{height: '400px'}}/>
                            </div>
                            <div className="content" style={{textAlign:'justify'}}>
                                <a className="header">Terracotta Artisans of Panchmura </a>
                            </div>
                            <div className="content">
                                <a className="header" style={{float:'left'}}> 500/- </a>
                                <div class="ui vertical animated button" tabindex="0" style={{float:'right'}} >
                                <div class="hidden content">Shop</div>
                                    <div class="visible content">
                                        <i class="shop icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="ui fluid card" style={{width: '385px', backgroundColor: 'transparent'}}>
                            <div className="image">
                                <img src="../../images/prod1.jpeg" style={{height: '400px'}}/>
                            </div>
                            <div className="content" style={{textAlign:'justify'}}>
                                <a className="header">Terracotta Artisans of Panchmura </a>
                            </div>
                            <div className="content">
                                <a className="header" style={{float:'left'}}> 500/- </a>
                                <div class="ui vertical animated button" tabindex="0" style={{float:'right'}} >
                                <div class="hidden content">Shop</div>
                                    <div class="visible content">
                                        <i class="shop icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="ui fluid card" style={{width: '385px', backgroundColor: 'transparent'}}>
                            <div className="image">
                                <img src="../../images/prod1.jpeg" style={{height: '400px'}}/>
                            </div>
                            <div className="content" style={{textAlign:'justify'}}>
                                <a className="header">Terracotta Artisans of Panchmura </a>
                            </div>
                            <div className="content">
                                <a className="header" style={{float:'left'}}> 500/- </a>
                                <div class="ui vertical animated button" tabindex="0" style={{float:'right'}} >
                                <div class="hidden content">Shop</div>
                                    <div class="visible content">
                                        <i class="shop icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
            </div>

        )
    }
}

export default ProductLists;