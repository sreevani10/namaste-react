import React from "react";
import ReactDOM from "react-dom/client";
 
const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src=""/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) =>{
return(
    <div className="resto-card" style = {{backgroundColor:"#f0f0f0"}}>
        <img className="resto-logo" src="https://www.shutterstock.com/image-photo/chicken-biryani-quick-tasty-dum-600nw-2468105649.jpg" alt="img"/>
        <h3>{props.resname}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4.4 stars</h4>
        <h4>38 minutes</h4>
    </div>
)
}

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="resto-container">
             <RestaurantCard resname="Meghana" cuisine="Biryani, North Indian, Asian"/>
             <RestaurantCard resname="KFC" cuisine="Burger, Fast Food"/>
             
             
            </div>

        </div>
    )
}


const AppLayout=()=>{
    return (
        <div>
         <Header/>
         <Body/>
        </div>
    )
}

  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)
