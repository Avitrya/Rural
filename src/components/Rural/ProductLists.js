import React, { useState } from 'react';
import Select from 'react-select';

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
             
                    <div className="ui fluid card" key ={idx} style={{ width: '385px', backgroundColor: 'transparent' }}>
                        <div className="image">
                            <img src={product.image} style={{ height: '400px' }} />
                        </div>
                        <div className="content" style={{ textAlign: 'justify', backgroundColor: 'lightblue' }}>
                            <a className="header">{product.name} </a>
                        </div>
                        <div className="content" style={{ backgroundColor: 'lightblue' }}>
                            <a className="header" style={{ float: 'left' }}> {product.cost}</a>
                            <div className="ui vertical animated button" tabindex="0" style={{ float: 'right' }} >
                                <button onClick={() => addToCart(product)}> Add to Cart</button>
                            </div>
                        </div>
                    </div>
          
                
            ))}
           
            
     
    </>
    );

    const renderCart = () => (

        <>
         <div>
        {cart.map((product, idx) => (
                <div className="column" key={idx}>
                    <div className="ui fluid card" style={{ width: '385px', backgroundColor: 'transparent' }}>
                        
                        <div className="content" style={{ textAlign: 'justify', backgroundColor: 'lightblue' }}>
                            <a className="header">{product.name} </a>
                        </div>
                        <div className="content" style={{ backgroundColor: 'lightblue' }}>
                            <a className="header" style={{ float: 'left' }}> {product.cost}</a>
                            <div className="ui vertical animated button" tabindex="0" style={{ float: 'right' }} >
                            <button onClick={() => removefromCart(product)}> Remove from Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
             <h1> Total cart Value= {getCartValue()}</h1>
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
                <h3 style={{ float: 'right' }}>Products from {props["MyProp"]}</h3>
                <br />
            </div>

            <header>
                <button onClick={() => navigateTo(PAGE_CART)}> Go to cart ({cart.length})</button>
                <button onClick={() => navigateTo(PAGE_PRODUCTS)}> View Products</button>
            </header>
            <div>
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