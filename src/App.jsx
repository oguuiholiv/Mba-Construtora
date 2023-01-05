import * as Router from "react-router-dom";
import { Home } from "./Pages/Home/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/" component={<Home />} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
