import React, { useState } from "react";
import "./styles/reset.css";
import "./styles/main.css";
import Router from "./router/router.jsx";
import { AuthContext } from "./context/AuthContext.js";

function App() {

const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
        <Router />
    </AuthContext.Provider>
  );
}

export default App;
