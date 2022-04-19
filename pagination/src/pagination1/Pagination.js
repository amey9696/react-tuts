import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
    const [items,setItems]=useState([]);
    const [pageCount,setPageCount]=useState(0);
    let limit=12;

    //shows current page data
    useEffect(()=>{
        const getComments = async ()=>{
            const res= await fetch(
                // `http://localhost:3004/comments?_page=1&_limit=${limit}`
                `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
            );
            const data=await res.json();
            const total=res.headers.get('x-total-count');
            
            // console.log(total);
            setPageCount(Math.ceil(total/limit));
            setItems(data);
        }
        getComments();
    },[]);
    // console.log(items);

    //below logic for showing next pages
    const fetchComments= async (currentPage)=>{
        const res=await fetch(
            // `http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`
            `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        );
        const data=await res.json();
        return data;
    };

    const handlePageClick= async (data)=>{
        // console.log(data.selected);
        let currentPage=data.selected +1;
        const commentsFormServer= await fetchComments(currentPage);
        setItems(commentsFormServer);
    }
    return (
        <div className='container'>
            <div className='row m-2'>
                {
                    items.map((item)=>{
                        return <div className='col-sm-6 col-md-4 v my-2' key={item.id}>
                            <div className='card shadow-sm w-100' style={{minHeight:225}}>
                                <div className='card-body'>
                                    <h5 className='card-title text-center h2'>Id :{item.id}</h5>
                                    <h5 className='card-subtitle mb-2 text-muted text-center'>Email : {item.email}</h5>
                                    <p className='card-text'>Comments :{item.body}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
                <ReactPaginate
                    previousLabel="previous"
                    nextLabel="next"
                    breakLabel={"..."}
                    pageCount={pageCount} //total pages
                    marginPagesDisplayed={2}  //how many page no shows on first & last
                    pageRangeDisplayed={3} //click on dots how many page open
                    onPageChange={handlePageClick}
                    
                    //bootstrap classes of pagination
                    containerClassName={'pagination justify-content-center'} //main class i.e ul tag 
                    pageClassName={'page-item'} //sub class i.e li tag 
                    pageLinkClassName={'page-link'} //sub class i.e a tag 
                    
                    //styling for previous button
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}

                    //styling for previous button
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}

                    //styling for break ie for ...
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}

                    activeClassName={'active'}
                /> 
            </div> 
        </div>
    )
}

export default Pagination


//require package => 
//npm i react-paginate 
//npm install -g json-server
//first create db.json file outside src folder (i.e inside project where node_module folder found)
//use given command to run json server =>
//json-server --watch db.json --port 3004
//run for http://localhost:3004/comments address/link