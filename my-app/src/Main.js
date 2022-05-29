import Header from "./components/Header";
import Media from "./components/Media";
import SearchContainer from "./components/SearchContainer";
import "./App.css";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <SearchContainer />
      <Media />
    </div>
  );
};

export default Main;
