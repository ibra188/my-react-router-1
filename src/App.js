import  {Outlet, Link} from "react-router-dom";
import  './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="top-heading">Bookers</h1>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <Link className="nav-item" to="/invoice">Invoices</Link>
          <Link className="nav-item" to="/Expenses">Expenses</Link>
        </nav>
      <Outlet />
    </div>
  );
}

export default App;
