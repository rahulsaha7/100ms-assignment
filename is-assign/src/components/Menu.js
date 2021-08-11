import React from 'react'


export const Menu = () => {
    const [menulist, setmenulist] = React.useState(0)


    const showMenuList = () =>{
      

       if(menulist === 1){
           document.querySelector('.sidebardiv').style.display = "block";
           setmenulist(0)
   
       }
       else{
        document.querySelector('.sidebardiv').style.display = "none";
            // document.querySelector(".header").style.marginLeft="0";
            // document.querySelector(".menu").style.marginLeft="0";
            // document.querySelector(".main-items").style.marginLeft="0";
        setmenulist(1)

           
       }
    }

    return (
        <div className="menu-div">
            <div className="menu d-flex justify-content-between pt-1 px-2">
                <p>Menu</p>
                <button className="Menu-button" onClick = {()=>showMenuList()}><i class="fas fa-bars"></i></button>
                    
            </div>
        </div>
    )
}
