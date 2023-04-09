import { signup } from "../Services/Auth/Signup";
import { login } from "../Services/Auth/Login";
import { setUser } from "../Redux/Slices/User";
import { setToken } from "../Redux/Slices/Authorization";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInit = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    if (user && token) {
      dispatch(setUser(user));
      dispatch(setToken(token));
      navigate("/dashboard");
    }
  };

  const handleLogin = (data, setLoading) => {
    login(data)
      .then((response) => {
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        toast.success("Login Success");
        setLoading(false);
        console.log(response.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
        console.log(err);
      });
  };

  const handleSignup = (data, setLoading) => {
    signup(data)
      .then((response) => {
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        toast.success("Registration Success");
        setLoading(false);
        console.log(response.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
        console.log(err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(setUser(null));
    dispatch(setToken(null));
    navigate("/sign/login");
  };

  return { handleInit, handleLogin, handleSignup, handleLogout };
};

export default useAuth;
