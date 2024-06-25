import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "../index.css";


function BasicPagination({setPage,Page =10}) {

  

const handlePage = (Page) => {
setPage(Page);
  window.scroll(0,0)
  }

  return (
    <div className='pages'>
    
    <Stack spacing={2}>
      <Pagination 
      onChange={(e) => handlePage(e.target.textContent)}
      count={10}/>
    </Stack>
    </div>
  );
}

export default BasicPagination;
