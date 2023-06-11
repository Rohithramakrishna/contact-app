import * as types from "./ActionType";
import axios from "axios";

const getUsers = users => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});
const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload:user,
});
const userUpdated = () => ({
  type: types.UPDATE_USER,
});

//to get user//...................................................
export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then(resp => {
        console.log("resp", resp);
        dispatch(getUsers(resp.data));
      })
      .catch(error => console.log(error));
  };
};

//to delete user//...................................................
export const deleteUser = id => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then(response => {
        console.log("response", response);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch(error => console.log(error));
  };
};

//to Add user//...................................................
export const addUser = user => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then(response => {
        console.log("response", response);
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch(error => console.log(error));
  };
};

//to Edit user//...................................................
export const getSingleUser = id => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then(response => {
        console.log("response", response);
        dispatch(getUser(response.data));
        
      })
      .catch(error => console.log(error));
  };
};

//to update user//...................................................

export const updateUser = (user,id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`,user)
      .then(response => {
        console.log("response", response);
        dispatch(userUpdated());
      })
      .catch(error => console.log(error));
  };
};
