import { useState } from 'react';
import '../App.css';
import data from '../DATA.json';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
    const [users, setUsers] = useState(data.slice(0, 100));
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;
    
    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user)=>{
        return (
            <div className='user'>
                <h3>Id:{user.id}</h3>
                <h3>Title:{user.name}</h3>
                <h3>Email:{user.email}</h3>
            </div>
        );
    });

    const pageCount =Math.ceil(users.length/usersPerPage);

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <div className="App">
            {displayUsers}
            <ReactPaginate
                previousLabel="prev"
                nextLabel="next"
                breakLabel={"..."}
                pageCount={pageCount} //total pages
                onPageChange={handlePageClick}
                containerClassName={'paginationBttns'} //main class i.e ul tag 
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
            />
        </div>
    )
}

export default Pagination
