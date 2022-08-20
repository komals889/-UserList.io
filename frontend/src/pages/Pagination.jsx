import React from 'react'
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Pagination() {
    const [items, setItems] = useState([]);

    const [pageCount, setpageCount] = useState(0);
  
    let limit = 3;
  
    useEffect(() => {
      const getComments = async () => {
        const  res = await axios.get(
          `http://localhost:5000/api/v1?_page=1&_limit=${limit}`
         
        );
        const data = res.data.data;
        console.log( res.data)
        // setItems(res.data.data);
        
        const slice=data.slice(pageCount,pageCount+limit)        
        console.log(slice)
        setpageCount(Math.ceil(data.length / limit));         
        setItems(slice)
      };
  
      getComments();
    }, [limit]);
  
    const fetchComments = async (currentPage) => {
      const  res = await axios.get(
        `http://localhost:5000/api/v1?_page=${currentPage}&_limit=${limit}`         
      );
    //   console.warn(res.data)
      const data = res.data.data;
      return data;
    };
  
    const handlePageClick = async (data) => {
      console.log(data.selected);
  
      let currentPage = data.selected + 1;
  
      const commentsFormServer = await fetchComments(currentPage);
  
      setItems(commentsFormServer);
      // scroll to the top
      //window.scrollTo(0, 0)
    };
  return (
    <div className="container">
        <div className="container">
            <div className="row">
                <div className="col-sm-8  offset-sm-2">
                    {
                        <div className='table-responsive'>
                            <table className="table table-bordered  mt-4 text-center">
                                <thead className='bg-info'>
                                <tr>
                                    <th scope='col'>Sr. No</th>
                                    <th scope='col'>User Name</th>
                                    <th scope='col'>Email</th>
                                    <th>Password</th>
                                     <th>Profile Picture</th>
                                </tr>
                            </thead>
                            <tbody className='bg-dark text-light font-weight-bold w-100'>
                                    {
                                        items?.map(((item,index)=>(
                                            <tr key={item._id}>
                                                <th>{index+1}</th>
                                                <td>{item.userName}</td>
                                                <td>{item.email}</td>
                                                <td>{item.password}</td>
                                                <td> 
                                                <img src={"http://localhost:5000/" + item.pic} alt="" height="50px" width="50px"/>
                                                </td>
                                                 
                                            </tr>
                                        )))
                                    }
                                </tbody>
                            </table>
                            </div>
                             
                        }
                    </div>    

                </div>

                </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>


  )
}
