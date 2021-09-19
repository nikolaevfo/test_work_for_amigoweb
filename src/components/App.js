import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Register from "./Register";

function App() {
  const history = useHistory();
  React.useEffect(() => {
    history.push("/signup");
  });
  return (
    <div className="root">
      <Switch>
        <Route exact path="/signup">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
