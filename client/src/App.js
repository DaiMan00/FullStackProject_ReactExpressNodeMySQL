import "./App.css";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

/*changed "componment" in react router dom version 5 becomes "element" in version 6*/
/* "Switch" in react router dom version 5 becomes "Routes" in version 6*/
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
        <Link to="/createpost"> Create a Post </Link>
        <Link to="/"> Home </Link>
        </div>
        <Routes>
          <Route exact path= "/" element={ <Home/> } />
          <Route exact path= "/createpost" element={ <CreatePost/> } />
          <Route exact path= "/post/:id" element={ <Post/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
