import React from 'react'
import {Header} from './Header.js';
import {ItemLists} from './ItemLists.js';
import {Menu} from './Menu.js';
import { MenuList } from './MenuList.js';


export const Structure = () => {
    return (
        <div>

        <section className="container-fluid w-100">
                <section className="row">
                    
                    <div className="col-12 header">
                            <Header  />
                    </div>
                    <div className="col-12 menu">
                        <Menu />
                    </div>
                    <div className="col-12">
                    <dic className="sidebardiv">
                        <MenuList />
                    </dic>
                        
                    </div>
                    <div className="col-12 main-items">
                        <ItemLists />
                    </div>
                </section>
        </section>
        </div>
    )
}
