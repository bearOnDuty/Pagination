
const Pagination = ({ postsPerpage, totalPosts, currentPage, paginate }) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerpage); i++) {
        pageNumbers.push(i);
    };
    console.log("pageNumber", pageNumbers);

    return (
        <nav className="pagination">
            {
                pageNumbers.map(
                    (number, i) => (
                        <li className="page-item"
                            key={`${i}-${number}`}
                        >
                            <a className={`page-link ${ currentPage === number ? "active-page" : "" }`}
                               onClick={() => paginate(number)}
                            >
                                {number}
                            </a>
                        </li>
                    )
                )
            }
        </nav>
    );
};

export default Pagination;