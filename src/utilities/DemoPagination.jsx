import Pagination from "@mui/material/Pagination";
import { useContext } from "react";
import { ThemeColorContext } from "../context/ThemeColorContext";

const DemoPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const { color } = useContext(ThemeColorContext);

  return (
    <div className="flex justify-end mt-10">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        sx={{
          "& .MuiPaginationItem-root": {
            color: color, // text color for inactive items
          },
          "& .Mui-selected": {
            backgroundColor: color, // selected item background
            color: "black", // selected item text
            "&:hover": {
              backgroundColor: color, // hover same as selected
            },
          },
        }}
      />
    </div>
  );
};

export default DemoPagination;
