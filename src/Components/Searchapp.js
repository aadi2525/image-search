import React, { useState } from 'react'
import BasicPagination from './pages'


const Searchapp = () => {
      const [value, setValue] = useState()
      const [Page, setPage] = useState(1)
      const [result, setResult] = useState([]);
     const inputHandle = (event) =>{
        console.log(event.target.value);
        setValue(event.target.value)
    
     }

     const searchImg = () =>{
        getData(value)
       
         
     }
     const getData = async (searchValue) =>{
        const get = await fetch(`https://api.unsplash.com/search/photos?page=${Page}&query=${searchValue}&client_id=H3s0Ay26iI-x_wZp9C2ly-Y91pIs_pENS1eN1YbKN2g`);
      
        const jsonData = await get.json();
        console.log(jsonData);
       
        if(value !== " "){
            setResult(jsonData.results);
             <BasicPagination/>

        }else{
            console.log("EMPTY");
        }
        
     }

 

      
  return (
    <>
        <div className='container'>
            <div className='inputs'>
                <input type='text' placeholder='Search Images' value={value} onChange={inputHandle} />
                <button onClick={searchImg}>Search</button>
            </div>
            <div className='images'>
             {
                result.map((curVal, index)=>{
                    console.log(curVal)
                    return (
                        <div className='container1'>
                            
                        <div>

                            <img className='img' src={curVal.urls.full}   />
                        </div>
                        <div className='details'>
                             <h4> description </h4>
                             <p>{curVal.alt_description}</p>
                        </div>

                        </div>

                    )
                })
             }

<BasicPagination  setPage={setPage} Page={Page}/>
            
            </div>

        </div>

    </>
  )
}

export default Searchapp;