import React from 'react'
import {
    Link
  } from "react-router-dom";
  

export const MenuList = () => {
    return (
        <div>
            <section className="menu-list mt-3">

<nav className="manu-item-holder">
    <ul className="menu-items text-center">



        <li className="py-2 ps-3 mt-1 activate">
            
            <Link to="/" className="dashboard menu-item-links">Home</Link>
            
        </li>






        <li className="py-2 ps-3 mt-1">
            
            <Link to="/Episodes" className="Lead menu-item-links">Episodes</Link>
            
        </li>







        <li className="py-2 ps-3 mt-1">
            
            <Link to="/Quote" className="Customer menu-item-links">Quote</Link>
            
        </li>






        <li className="py-2 ps-3 mt-1">
            
            <Link to="/Deaths" className="Expense menu-item-links">Deaths</Link>
            
        </li>














        


    </ul>
</nav>

</section>
        </div>
    )
}
