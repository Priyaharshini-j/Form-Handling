import React, { useState } from "react";

function FormFunctionComponent() {
  const [userName, setUserName] = useState("");
  const [userAge, setAge] = useState(0);
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userMobileNumber, setMobileNumber] = useState("");
  const [userAddress, setAddress] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
    console.log(userName);
  };
  const userAgeHandler = (event) => {
    setAge(event.target.value);
    console.log(userAge);
  };
  const userEmailHandler = (event) => {
    setEmail(event.target.value);
    console.log(userAge);
  };
  const userPasswordHandler = (event) => {
    setPassword(event.target.value);
    console.log(userAge);
  };
  const userMobileNumberHandler = (event) => {
    setMobileNumber(event.target.value);
    console.log(userAge);
  };
  const userAddressHandler = (event) => {
    setAddress(event.target.value);
    console.log(userAge);
  };
  const formSubmitHandler = (event) => {
    alert("User Details are submitted");
    event.preventDefault();
    console.log(userName + " " + userEmail);
  };
  return (
    <React.Fragment>
      <h3>User Details Form</h3>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="UserName">Name</label>
        <input
          type="text"
          placeholder="Your Name..."
          value={userName}
          onChange={userNameHandler}
          required
        />
        <br />
        <label htmlFor="UserAge">User Age</label>
        <input
          type="number"
          value={userAge}
          onChange={userAgeHandler}
          required
        />
        <br />
        <label htmlFor="userEmail">User Email</label>
        <input
          type="email"
          value={userEmail}
          onChange={userEmailHandler}
          placeholder="Enter your Mail Id"
          required
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          value={userPassword}
          onChange={userPasswordHandler}
          required
        />
        <br />
        <label htmlFor="MobileNumber">Mobile Number</label>
        <input
          type="text"
          value={userMobileNumber}
          placeholder="Your Mobile no..."
          onChange={userMobileNumberHandler}
          required
        />
        <br />
        <label htmlFor="Address">Address</label>
        <textarea
          value={userAddress}
          placeholder="Your Address..."
          onChange={userAddressHandler}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}
export default FormFunctionComponent;
