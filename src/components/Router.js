
import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
            exact path="/" 
            element={
                isLoggedIn ? (
                    <Home />
                ) : (
                    <Auth/>
                )
            }/>
        
      </Routes>
    </Router>
  );
};

export default AppRouter;


// Router select which component to be rendered.