import React, { Component } from "react";

class FormClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userAge: 0,
      userEmail: "",
      userPassword: "",
      userMobileNumber: "",
      userAddress: "",
    };
  }
  userNameHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  userAgeHandler = (event) => {
    this.setState({
      userAge: event.target.value,
    });
  };

  userEmailHandler = (event) => {
    this.setState({
      userEmail: event.target.value,
    });
  };

  userPasswordHandler = (event) => {
    this.setState({
      userPassword: event.target.value,
    });
  };

  userMobileNumberHandler = (event) => {
    this.setState({
      userMobileNumber: event.target.value,
    });
  };

  userAddressHandler = (event) => {
    this.setState({
      userAddress: event.target.value,
    });
  };

  formSubmitHandler = (event) => {
    alert("The Details of  user is submitted");
  };

  render() {
    const {
      userName,
      userAge,
      userEmail,
      userPassword,
      userMobileNumber,
      userAddress,
    } = this.state;

    return (
      <React.Fragment>
        <h3>User Details Form</h3>
        <form onSubmit={this.formSubmitHandler}>
          <label htmlFor="UserName">Name</label>
          <input
            type="text"
            placeholder="Your Name..."
            value={userName}
            onChange={this.userNameHandler}
            required
          />
          <br />
          <label htmlFor="UserAge">User Age</label>
          <input
            type="number"
            value={userAge}
            onChange={this.userAgeHandler}
            required
          />
          <br />
          <label htmlFor="userEmail">User Email</label>
          <input
            type="email"
            value={userEmail}
            onChange={this.userEmailHandler}
            placeholder="Enter your Mail Id"
            required
          />
          <br />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            value={userPassword}
            onChange={this.userPasswordHandler}
            required
          />
          <br />
          <label htmlFor="MobileNumber">Mobile Number</label>
          <input
            type="text"
            value={userMobileNumber}
            placeholder="Your Mobile no..."
            onChange={this.userMobileNumberHandler}
            required
          />
          <br />
          <label htmlFor="Address">Address</label>
          <textarea
            value={userAddress}
            placeholder="Your Address..."
            onChange={this.userAddressHandler}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default FormClassComponent;
