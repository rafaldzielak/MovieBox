import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Paginate, { Page, CurrentPage } from "../elements/Paginate";
import { useHistory } from "react-router";

const Pagination = () => {
  const { page, currentSearch, moviesDetails } = useContext(MovieContext);
  const maxPage = moviesDetails?.totalResults ? parseInt(moviesDetails.totalResults / 10 + 1) : 1;
  const history = useHistory();
  const changePage = (page) => {
    if (page > 0 && page <= maxPage) history.push(`/search/${currentSearch}/page/${page || 1}`);
  };
  return (
    <Paginate>
      <Page next={page > 1} onClick={(e) => changePage(page - 1)}>
        <FaChevronLeft style={{ verticalAlign: "middle" }} />
      </Page>
      <CurrentPage>
        Page {page} of {maxPage}
      </CurrentPage>
      <Page next={maxPage > page} onClick={(e) => changePage(page + 1)}>
        <FaChevronRight style={{ verticalAlign: "middle" }} />
      </Page>
    </Paginate>
  );
};

export default Pagination;
