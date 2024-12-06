import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import "../styles/TodoPagination.css";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));

export const TodoPagination = ({ page, handlePageChange, totalPages }) => {
  const classes = useStyles();

  return (
    <div className="todo-pagination">
      <Stack spacing={2}>
        <Pagination
          page={page}
          onChange={handlePageChange}
          classes={{ ul: classes.ul }}
          count={totalPages}
          color="secondary"
        />
      </Stack>
    </div>
  );
};
