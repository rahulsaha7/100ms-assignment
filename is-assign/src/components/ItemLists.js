import React,{useState,useEffect} from  'react'
import ReactPaginate from 'react-paginate';
import {SingleListItems} from './SingleListItems.js';

export const ItemLists = () => {
    const [result, setresult] = useState([]);
    const [offset, setoffset] = useState(0);
    const [perpage] = useState(10);
    const [pagecount, setpagecount] = useState(0);
    const [alldata, setalldata] = useState([]);

    const fetchData = async ()=>{
        let api = 'https://www.breakingbadapi.com/api/characters?limit='+perpage+'&offset='+(offset*perpage);
        const data = await fetch(api);
        const response = await data.json();
        setresult(response);
       
        
    }

const searchData =  async (e) =>{
    e.preventDefault();

    let value = document.getElementById("search").value;
    value = value.replace(/\s/g, '+');
    const data = await fetch("https://www.breakingbadapi.com/api/characters?name="+value);
    const response = await data.json();

    setresult(response);

}

const increase = (e) =>{
    const selectedpage = e.selected;
    setoffset(selectedpage);
}


const getalldata = async ()=>{
    const api = 'https://www.breakingbadapi.com/api/characters';
    const data = await fetch(api);
    const response = await data.json();
    if(alldata.length === 0 ){
        setalldata(response);
    }  
    setpagecount(Math.ceil(alldata.length/perpage));
    
}



const reset = () =>{
    window.location.reload();
}


useEffect(() => {
    getalldata();


}, [alldata])


    useEffect(() => {
       
        fetchData();
        
    },[offset])



    


    return (
        <div>
                <section className="container-fluid">
                <div className="search d-flex justify-content-end px-2 pt-2">
                    <form method="post" ></form>
                        {/* <input type="text" placeholder="Search by name" id="search" />     */}
                        <input className="form-control" type="text" placeholder="Search by name" aria-label="Search by name" id="search"/>
                        <input className="form-control" type="button" value="Submit" className="btn btn-primary" onClick = {searchData}/>
                        <input className="form-control" type="reset" value="Rest" className="btn btn-danger" onClick = {reset}/>
                </div>  
                <div className="row">
                    {
                        result.map((itemlist)=>{
                            return <SingleListItems logo={itemlist.img} name = {itemlist.name} key={itemlist.char_id} dob = {itemlist.birthday} occupetation={itemlist.occupation} status={itemlist.status} />
                        })
                    }
                    
                </div>
                <div className="row">

                <section className="col-12">
                        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pagecount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={6}
                    onPageChange={increase}
                    containerClassName={"pagination justify-content-center"}
                    subContainerClassName={"page-item"}
                    activeClassName={"active page-item"}
                    pageLinkClassName={'page-link'}
                    pageClassName = {"page-item"}
                    previousClassName = {'page-item'}
                    previousLinkClassName = {'page-link'}
                    nextClassName = {'page-item'}
                    nextLinkClassName = {'page-link'}
                    />
                
                </section>

                </div>
                </section>
        </div>
    )
}
