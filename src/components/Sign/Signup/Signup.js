import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FormLabel, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { LoginOutlined } from "@mui/icons-material";
import "./Signup.css";

const Signup = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleSignup } = useAuth();

  const handleSubmit = () => {
    setLoading(true);
    handleSignup(
      {
        email,
        name: fname,
        lastName: lname,
        password,
      },
      setLoading
    );
  };

  return (
    <div className="signup">
      <h2 className="signup__title">Signup</h2>
      <p className="signup__desc">Create your account now</p>
      <form className="signup__form">
        <div className="form-group">
          <FormLabel htmlFor="fname">First Name</FormLabel>
          <TextField
            id="fname"
            variant="outlined"
            placeholder="Eg: Rahul"
            value={fname}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <FormLabel htmlFor="lname">Last Name</FormLabel>
          <TextField
            id="lname"
            variant="outlined"
            placeholder="Eg: Mishra"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            id="email"
            variant="outlined"
            placeholder="Eg: abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            type={"password"}
            id="password"
            variant="outlined"
            placeholder="Eg: abc@gmail.com"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <LoadingButton
          variant="contained"
          disableElevation
          onClick={handleSubmit}
          endIcon={<LoginOutlined />}
          loading={loading}
          loadingPosition="center"
        >
          Sign up
        </LoadingButton>
      </form>
      <div className="signup__forward">
        <p>Already have an account? </p>
        <Link to="/sign/login">Login!</Link>
      </div>
      .
    </div>
  );
};

export default Signup;
