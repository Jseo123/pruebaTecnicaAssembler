import { Password } from "@mui/icons-material";
import { useState } from "react";
import { useAuth } from "./context/authContext";

export const Register = () => {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const { signUp } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(user.Email, user.Password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="Email"
        placeholder="youremail@provider.com"
        onChange={handleChange}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        onChange={handleChange}
        type="password"
        name="Password"
        placeholder="********"
      ></input>
      <button>Register</button>
    </form>
  );
};
