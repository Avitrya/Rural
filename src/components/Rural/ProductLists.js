import React from 'react';

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
                            <div className="content" style={{textAlign:'justify', backgroundColor:'lightblue'}}>
                                <a className="header">Terracotta Horse from Panchmura, Bengal </a>
                            </div>
                            <div className="content" style={{ backgroundColor:'lightblue'}}>
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
                                <img src="../../images/prod2.jpeg" style={{height: '400px'}}/>
                            </div>
                            <div className="content" style={{textAlign:'justify', backgroundColor:'lightblue'}}>
                                <a className="header">Jaapi from Khargulli, Assam </a>
                            </div>
                            <div className="content" style={{backgroundColor:'lightblue'}}>
                                <a className="header" style={{float:'left'}}> 1000/- </a>
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
                                <img src="../../images/prod3.jpeg" style={{height: '400px'}}/>
                            </div>
                            <div className="content" style={{textAlign:'justify', backgroundColor:'lightblue'}}>
                                <a className="header">Little Indian Elephant from Udaipur, Rajasthan</a>
                            </div>
                            <div className="content" style={{backgroundColor:'lightblue'}}>
                                <a className="header" style={{float:'left'}}> 2450/- </a>
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
            <br/>
            <br/>
            <section className="cards">
            <div className="ui three column grid">
                    <div className="column">
                        <div className="ui fluid card" style={{width: '385px', backgroundColor: 'transparent'}}>
                            <div className="image">
                                <img src="../../images/prod4.jpeg" style={{height: '400px'}}/>
                            </div>
                            <div className="content" style={{textAlign:'justify' , backgroundColor:'lightblue'}}>
                                <a className="header">Krishna Stone Carving from Solur, Karnataka </a>
                            </div>
                            <div className="content" style={{backgroundColor:'lightblue'}}>
                                <a className="header" style={{float:'left'}}> 2500/- </a>
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
                                <img src="../../images/prod5.jpeg" style={{height: '400px'}}/>
                            </div>
                            <div className="content" style={{textAlign:'justify', backgroundColor:'lightblue'}}>
                                <a className="header"> Wooden Kerala Boat from Vengoor, Kerala </a>
                            </div>
                            <div className="content" style={{backgroundColor:'lightblue'}}>
                                <a className="header" style={{float:'left'}}> 250/- </a>
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
                                <img src="../../images/prod6.jpeg" style={{height: '400px'}}/>
                            </div>
                            <div className="content" style={{textAlign:'justify', backgroundColor:'lightblue'}}>
                                <a className="header">Coir and Cane Floor mats from Kollam, Kerala</a>
                            </div>
                            <div className="content" style={{backgroundColor:'lightblue'}}>
                                <a className="header" style={{float:'left'}}> 250/- </a>
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
            <br/>
            <br/>

            <section className="cards">
            <div className="ui three column grid">
                    <div className="column">
                        <div className="ui fluid card" style={{width: '385px', backgroundColor: 'transparent'}}>
                            <div className="image">
                                <img src="../../images/prod7.jpeg" style={{height: '400px'}}/>
                            </div>
                            <div className="content" style={{textAlign:'justify', backgroundColor:'lightblue'}}>
                                <a className="header">Kathakali Mask from Kalady, Kerala </a>
                            </div>
                            <div className="content" style={{backgroundColor:'lightblue'}}>
                                <a className="header" style={{float:'left'}}> 200/- </a>
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
                                <img src="../../images/prod8.jpeg" style={{height: '400px'}}/>
                            </div>
                            <div className="content" style={{textAlign:'justify', backgroundColor:'lightblue'}}>
                                <a className="header"> Sandalwood War Elephant from Mysore, Karnataka </a>
                            </div>
                            <div className="content" style={{backgroundColor:'lightblue'}}>
                                <a className="header" style={{float:'left'}}> 10000/- </a>
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
                                <img src="../../images/prod9.jpeg" style={{height: '400px'}}/>
                            </div>
                            <div className="content" style={{textAlign:'justify', backgroundColor:'lightblue'}}>
                                <a className="header">Bamboo and Cane baskets from Birbhum, West Bengal</a>
                            </div>
                            <div className="content" style={{backgroundColor:'lightblue'}}>
                                <a className="header" style={{float:'left'}}> 200/- </a>
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