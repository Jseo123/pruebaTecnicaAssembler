import { useState } from "react";
import { useAuth } from "./context/authContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(user.Email, user.Password);
    } catch (error) {
      console.log("I shit on your mother");
      setError(error.message);
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
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
    </div>
  );
};
