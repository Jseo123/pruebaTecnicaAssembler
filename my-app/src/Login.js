import "./App.css";
import "./Login.css";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="imgHolder">
        {" "}
        <img src="/images/giphyLogo.png" alt="Page Logo"></img>
      </div>
      <form className="logForm">
        <div className="formHolder">
          <label for="user"> Insert your username or email</label>
          <input name="user" type="text"></input>
        </div>

        <div className="formHolder">
          <label for="password">Please introduce your password</label>
          <input name="password" type="password"></input>
        </div>

        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
