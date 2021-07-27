import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const shops = [
  {
    id:1,
    name: "TEST",
    link: "https://youtube.com/"
  },
  {
    id:2,
    name:"TEST2",
    link: "https://youtube.com/"
  },
  {
    id: 3,
    name:"TEST3",
    link: "https://youtube.com/"
  }
]

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            {shops.map (shop => {
              return PersonalUsers(shop)
            })}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          {/*<div>
            {shops.map (shop => {
              return PersonalUsers(shop)
            })}
          </div>*/}
        </Switch>
      </div>
    </Router>
  );
}

function PersonalUsers(shop)
{
  return(
      <Route path={`/users/${shop.id}`}>
        {Users(shop)}
      </Route>
  )
}

function DrawHome(shop) {
  return (
    <div>
      <div style={{ background: '#000000', width: 500, height: 3, marginLeft: 30 }}/>
      <div style={{ background: '#607d8b', width: 500, height: 75, marginLeft: 30 }}>
        <pre style={{ margin: 0, padding: 0, border: 0, width: 10, height: 0}}>{shop.name}         <a href={shop.link}>{shop.link}</a>    <Link to={`/users/${shop.id}`} activeClassName="current">user</Link></pre>
        <div style={{ background: '#000000', width: 3, height: 75, marginLeft: 80 }}/>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className="MainPage">
      {shops.map(shop => {
            return DrawHome(shop)
      })}
    </div>
  )
}

function About() {
  return <h2>About</h2>;
}

function Users(shop) {
  return (
    <div>
      <h2>NEW USER</h2>
      <h2>{shop.name}</h2>
      <h2>{shop.link}</h2>
    </div>
  )
}

// ========================================

ReactDOM.render(
    App(),
    document.getElementById('root')
);