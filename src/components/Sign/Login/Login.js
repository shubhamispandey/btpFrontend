import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FormLabel, TextField } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useAuth();

  const handleSubmit = () => {
    setLoading(true);
    handleLogin(
      {
        email,
        password,
      },
      setLoading
    );
  };

  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      <p className="login__desc">Create your account now</p>
      <form className="login__form">
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
          Login
        </LoadingButton>
      </form>
      <div className="login__forward">
        <p>Don't have an account? </p>
        <Link to="/sign/signup">Create New!</Link>
      </div>
      .
    </div>
  );
};

export default Login;
