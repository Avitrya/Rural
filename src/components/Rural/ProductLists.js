import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './ProductList.css';
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const ProductLists = (props) => {

    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    const [products1] = useState([
        {
            name: 'Terracotta Horse from Panchmura, Bengal',
            cost: 500,
            image: '../../images/prod1.jpeg'
        },
        {
            name: 'Jaapi from Khargulli, Assam',
            cost: 1000,
            image: '../../images/prod2.jpeg'
        },
        {
            name: 'Little Indian Elephant from Udaipur, Rajasthan',
            cost: 2450,
            image: '../../images/prod3.jpeg'
        },
        {
            name: 'Krishna Stone Carving from Solur, Karnataka',
            cost: 2500,
            image: '../../images/prod4.jpeg'
        },
        {
            name: ' Wooden Kerala Boat from Vengoor, Kerala ',
            cost: 250,
            image: '../../images/prod5.jpeg'
        },
        {
            name: 'Coir and Cane Floor mats from Kollam, Kerala',
            cost: 250,
            image: '../../images/prod6.jpeg'
        },
        {
            name: 'Kathakali Mask from Kalady, Kerala',
            cost: 2450,
            image: '../../images/prod7.jpeg'
        },
        {
            name: 'Sandalwood War Elephant from Mysore, Karnataka',
            cost: 10000,
            image: '../../images/prod8.jpeg'
        },
        {
            name: 'Bamboo and Cane baskets from Birbhum, West Bengal',
            cost: 200,
            image: '../../images/prod9.jpeg'
        }
    ])

    const addToCart = (product) => {
        console.log('We are in add to cart');
        setCart([...cart, {...product}]);
    }
    
    const removefromCart = (productToRemove) => {
        setCart(cart.filter(product => product!=productToRemove))
    }

    const getCartValue = () => {
        let value = 0;
        cart.map((product,idx) => {
            value = value + product.cost;
        })
        return value;
    }
    const renderProducts = () => (
        <>
       
            {products1.map((product, idx) => (
             
                    <div className="ui fluid card" key ={idx} style={{ width: '385px', backgroundColor: 'transparent', marginRight: '20px'}}>
                        <div className="image">
                            <img src={product.image} style={{ height: '400px' }} />
                        </div>
                        <div className="content" style={{ textAlign: 'center', backgroundColor: 'rgb(212, 169, 131)' }}>
                            <a className="header">{product.name} </a>
                        </div>
                        <div className="content" style={{ backgroundColor: 'peachpuff' }}>
                            <a className="header" style={{ float: 'left', marginTop:'10px' }}> ${product.cost}</a>
                            <div >
                                <div class="ui right floated google plus vertical animated button" tabindex="0">
                                    <div class="hidden content" onClick={() => addToCart(product)}>Shop</div>
                                    <div class="visible content">
                                        <i class="shop icon"></i>
                                    </div>
                                </div>
                                {/* <button className="ui right floated google plus button" onClick={() => addToCart(product)}> Add to Cart</button> */}
                            </div>
                        </div>
                    </div>
          
                
            ))}
           
            
     
    </>
    );

    const renderPrice = () => {
        return(
            <div>
            <div className="ui bottom attached warning compact message" style={{display:'flex', justifyContent:'center'}}>
                <h3> Total cart Value= ${getCartValue()}</h3>
            </div>
            <br />
            <br />
            <Link to="/cart" className="item">
                <button className="ui right floated google plus button">
                    Proceed For Checkout
                </button>
            </Link>
            </div>
        );
    };

    const renderCart = () => (

        <>
         <div>
        {cart.map((product, idx) => (
                <div className="column" style={{ width: '500px', marginBottom:'10px'}} key={idx}>
                    <div className="ui fluid card card-display" style={{backgroundColor: 'transparent', marginRight: '20px' }}>
                        
                        <div className="content" style={{ textAlign: 'center', backgroundColor: 'rgb(212, 169, 131)' }}>
                            <a className="header">{product.name} </a>
                        </div>
                        <div className="content" style={{ backgroundColor: 'peachpuff'}}>
                            <a className="header" style={{ float: 'left', marginTop:'10px' }}> ${product.cost}</a>
                            <button className="ui right floated google plus button" onClick={() => removefromCart(product)}> Remove from Cart</button>
                        </div>
                    </div>
                </div>
                
            ))}
            <br />
            <br />
            {getCartValue()===0 ? 
                <div className="ui bottom attached warning compact message" style={{textAlign:'center'}} >
                    <h2>
                        Your cart feels so light!
                    </h2>
                    <h3>
                        Go to the products page to select your favorite items!
                    </h3>
                </div> : 
                renderPrice()
            }
            </div>
        </>
    );

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }
    

    return (
        <div>
            <div>
                <br />
                <br />
            </div>

            <header>
                <button 
                    className="ui right floated google plus button" 
                    onClick={() => navigateTo(PAGE_CART)}
                > 
                    <i className="shopping cart icon"></i> 
                        Go to cart ({cart.length})
                </button>
                <button 
                    className="ui right floated google plus button" 
                    onClick={() => navigateTo(PAGE_PRODUCTS)}
                > 
                        View Products
                </button>
            </header>
            <div className="products">
                <br />
                <br />
                <br />
                
                {page === PAGE_PRODUCTS && renderProducts()}
                {page === PAGE_CART && renderCart()}


            </div>
            <br />



        </div>

    )
}


export default ProductLists;