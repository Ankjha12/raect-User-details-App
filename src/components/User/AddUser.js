import React, { Fragment, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      // this is for checking the userInput is valid or not so here we are checking the condition and simply return but we return nothing but that also work because the return statement in javascript stop the next function execution
      setError({
        title: "Invalid input",
        message: "Please Enter a Valid Name and Age (non-Empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      // here also we are checking for the age validation simply we write +enterdAge because when user did input his age in the input field then that value is going to  be a string so to convert that string to number for safer comparision with the number we did write the +enteredAge variable instead of simply writing the enteredAge variable
      setError({
        title: "Invalid Age ",
        message: "Please Enter a valid Age (> 0)",
      });

      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
