import Pagination from "@mui/material/Pagination";

const DemoPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className="flex justify-center my-6">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        color="primary"
      />
    </div>
  );
};

export default DemoPagination;
