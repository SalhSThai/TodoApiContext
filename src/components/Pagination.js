import { useState } from "react";

function Pagination(props) {
    const { changePage, noPage , currentPage} = props;
    const arr = new Array(noPage).fill().map((e,i)=>i+1)
    
    

    return <>
        <ul className="pagination pagination-sm mb-0">
            <li value='0' className={`page-item ${currentPage==1?'disabled':''}`} >
                <button className="page-link" value='0' onClick={e=>changePage(currentPage-1)}>
                    <i className="fa-solid fa-angle-left small" />
                </button>
            </li>

            {arr.map((item, index) => {
                return <li key={index} value={item} className={`page-item `+ `${+currentPage === index+1 ? 'active' : ''}` }>
                    <button className="page-link" value={item} onClick={e=>changePage(e.target.value)}>{item}</button>
                </li>

            })}
            <li value='-1' className={`page-item ${currentPage==noPage?'disabled':''}`}>
                <button className="page-link" value='-1' onClick={e=>changePage(currentPage+1)}>
                    <i className="fa-solid fa-angle-right small" />
                </button>
            </li>
        </ul>
    </>

}
export default Pagination