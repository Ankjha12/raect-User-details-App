import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;

// at line 6 we are setting the className dynamically that we are accepting through the props in this file and also we are sending through the AddUser  file so that it get added dynamically cause Card componnt is our  custom Component so we Have to manually add any styles that is comming from the different file

// At line 6 Inside teh Div element we are also accepting the props.children cause we are wrappping the AddUser.js file jsx code inside the Card Component so through the props.children we are getting all the codes of the File AddUser.js inside this File as props.children

// This is the whole code {/*<form onSubmit={addUserHandler} <label htmlFor="username">Username</label><input id="username" type="text" /><label htmlFor="age">Age (Year)</label><input id="age" type="number" />button type="submit">Add User</button></form> */} this code e are geting fom the props.children method in the above line of this file as ypu can see in the above llone of code.
