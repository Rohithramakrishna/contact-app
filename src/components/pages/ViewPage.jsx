import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../redux/Action";
import { deleteUser } from "../../redux/Action";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const EditUser = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { users } = useSelector(state => state.data);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = id => {
    console.log("delete items", id);

    if (window.confirm("You want to Delete contact ?? ")) {
      dispatch(deleteUser(id));
    }
  };
  const addUser = () => {
    navigate("/add-user");
  };
  const CenteredTableContainer = styled(TableContainer)({
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    width: "1200px",
    margin: "0px auto",
  });
  const CenteredButton = styled(Button)({
    marginLeft: "68px",
    marginTop: "30px",
    
  });
 

  return (
    <div>
      <CenteredButton>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "5px", marginLeft: "10px" }}
          onClick={() => addUser()}
        >
          ADD USER
        </Button>
      </CenteredButton>
      <CenteredTableContainer>
        <TableContainer component={Paper} sx={{ marginTop: "40px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map(user => (
                  <StyledTableRow key={user.id}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {user.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.contact}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.address}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                      >
                        <Button
                          color="primary"
                          style={{ marginRight: "5px" }}
                          onClick={() => navigate(`/edit-user/${user.id}`)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="secondary"
                          style={{ marginRight: "5px" }}
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CenteredTableContainer>
    </div>
  );
};

export default EditUser;
