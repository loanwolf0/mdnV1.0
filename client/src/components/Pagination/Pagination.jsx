import React, { useEffect, useState } from "react";

const Pagination = ({ paginationData, onUpdatePagination }) => {
  const [paginationObj, setPaginationObj] = useState({
    activePage: paginationData.currentPage,
    lastPage: null,
    displayNumList: [],
  });

  const setDisplayPagination = () => {
    const pages = Math.ceil(
      (paginationData?.dataLength || 0) / paginationData.perPageData
    );
    const displayNumList = [];

    if (pages <= 5) {
      for (let index = 1; index <= pages; index++) {
        displayNumList.push(index);
      }
    } else if (paginationObj.activePage <= 3) {
      displayNumList.push(1, 2, 3, "...", pages);
    } else if (paginationObj.activePage >= pages - 3) {
      displayNumList.push(1, "...", pages - 2, pages - 1, pages);
    } else {
      displayNumList.push(
        1,
        "...",
        paginationObj.activePage - 1,
        paginationObj.activePage,
        paginationObj.activePage + 1,
        "...",
        pages
      );
    }

    setPaginationObj({ ...paginationObj, lastPage: pages, displayNumList });
  };

  const handleOnNumber = (value) => {
    if (isNaN(value)) return;
    onUpdatePagination(value);
  };

  const handlePrevNext = (direction) => {
    const newPage =
      direction === "prev"
        ? paginationObj.activePage - 1
        : paginationObj.activePage + 1;
    onUpdatePagination(newPage);
  };

  useEffect(() => {
    setDisplayPagination();
  }, [paginationData, paginationObj.activePage]);

  return (
    <div className="pagination-container">
      {paginationData.dataLength ? (
        <>
          <div className="pagination_text text-zinc-200 flex items-center gap-3">
            Showing{" "}
            {(paginationObj.activePage - 1) * paginationData.perPageData + 1} to{" "}
            {paginationObj.activePage * paginationData.perPageData <
            paginationData.dataLength
              ? paginationObj.activePage * paginationData.perPageData
              : paginationData.dataLength}{" "}
            of {paginationData.dataLength} entries
          </div>
          <div className="pagination_data flex items-center gap-2 mt-2">
            <div
              className={`pagination-prev-btn bg-blue-500 text-zinc-200  ${
                paginationObj.activePage === 1 ? "disabled-radio" : ""
              }`}
              onClick={() => handlePrevNext("prev")}
            >
              PREV
            </div>
            {paginationObj.displayNumList.map((element, index) => (
              <p
                key={index}
                className={`custom-pages text-zinc-100 ${
                  paginationObj.activePage === element ? "active-page" : ""
                }`}
                onClick={() => handleOnNumber(element)}
              >
                {element}
              </p>
            ))}
            <div
              className={`pagination-prev-btn bg-blue-500 text-zinc-200  ${
                paginationObj.activePage === paginationObj.lastPage
                  ? "disabled-radio"
                  : ""
              }`}
              onClick={() => handlePrevNext("next")}
            >
              NEXT
            </div>
          </div>
        </>
      ) : (
        <div className="no_data_found flex justify-center items-center">
          <img src="../../../assets/json/empty-data.webp" alt="no-data" />
        </div>
      )}
    </div>
  );
};

export default Pagination;
