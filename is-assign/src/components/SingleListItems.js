import React from 'react'

export const SingleListItems = ({name,dob,occupetation,status,logo}) => {
    // const addBackground = {
    //     background:`url(${logo}) no-repeat center cover`,
        
    // }
    return (
       
            <section className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="items m-2  w-20  d-flex flex-row flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xll-row" >
                    <div className="imgae py-2 ms-1">
                        <img src={logo} alt="image of character" />
                    </div>
                    <div className="details py-2 px-1 ps-2">
                        <h3 className="name">{name}</h3>
                        <div className="dob-occupation d-flex flex-column">
                            <p className="dob">{dob}</p>
                            <p className="occupetion">{occupetation}</p>
                        </div>
                        <h3 className="status">
                            {
                                status === "Presumed dead" ? "Dead" : status 
                             }
                        </h3>
                    </div>
                </div>
            </section>
    )
}
