// imports from react-router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";

// styles
import "./App.css";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
