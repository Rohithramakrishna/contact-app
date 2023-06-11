import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addUser } from "../../redux/Action";

const FormStyle = styled("div")({
  width: "400px",
  height: "350px",
  // backgroundColor: "blue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "50px auto",
  border: "1px solid black",
  borderRadius: "10px",
});
const FormField = styled("div")({
  marginTop: "10px",
  width: "100%",
});
const FormBtn = styled("div")({
  marginTop: "10px",
  width: "100%",
  marginLeft: "215px",
  marginTop: "30px",
});
const FormText = styled("h1")({
  textAlign: "center",
  fontSize: "25px",
  marginTop: "20px",
  color: "#6739b7",
});

const AddUser = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;

  const handleInput = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      setError("please fill all input fields");
    } else {
      dispatch(addUser(state));
      navigate("/todo-list");
      setError("");
    }
    };
    console.log(state)

  return (
    <div>
      <FormText> ADD USER</FormText>
          {error && <h6 style={{color:"red",textAlign:"center"}}>{ error}</h6>}
      <FormStyle>
        <form onSubmit={handleSubmit}>
          <FormField>
            <TextField
              style={{ width: "300px" }}
              id="standard-basic"
              label="Name"
              variant="standard"
              value={name}
              name="name"
              type="text"
              onChange={handleInput}
            />
          </FormField>
          <FormField>
            <TextField
              style={{ width: "300px" }}
              id="standard-basic"
              label="Email-ID"
              variant="standard"
              value={email}
              name="email"
              type="email"
              onChange={handleInput}
            />
          </FormField>
          <FormField>
            <TextField
              style={{ width: "300px" }}
              id="standard-basic"
              label="Contact"
              variant="standard"
              value={contact}
              type="number"
              name="contact"
              onChange={handleInput}
            />
          </FormField>
          <FormField>
            <TextField
              style={{ width: "300px" }}
              id="standard-basic"
              label="Address"
              variant="standard"
              value={address}
              name="address"
              type="text"
              onChange={handleInput}
            />
          </FormField>
          <FormBtn>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </FormBtn>
        </form>
      </FormStyle>
      <div>
        {" "}
        <Button variant="contained" onClick={() => navigate("/todo-list")}>
          GO BACK
        </Button>
      </div>
    </div>
  );
};

export default AddUser;
