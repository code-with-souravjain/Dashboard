import Pagination from "@mui/material/Pagination";

const DemoPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className="flex justify-end mt-10 ">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
         color="success"
        
      />
    </div>
  );
};

export default DemoPagination;
