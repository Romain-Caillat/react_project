import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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

function Profile(shop) {
  return (
    <div style={{ margin: 0, padding: 0, border: 0, width: 10, height: 0}}>{shop.name}         <a href={shop.link}>{shop.link}</a>
      <h1>{shop.name}</h1>
    </div>
  )
}

function Drawbox(shop) {
  return(
      <div>
        <div style={{ background: '#000000', width: 500, height: 3, marginLeft: 30 }}/>
        <div style={{ background: '#607d8b', width: 500, height: 75, marginLeft: 30 }}>
          <pre style={{ margin: 0, padding: 0, border: 0, width: 10, height: 0}}>{shop.name}         <a href={shop.link}>{shop.link}</a>    <Link to="/profile">profile</Link></pre>
         
          <div style={{ background: '#000000', width: 3, height: 75, marginLeft: 80 }}/>
        </div>
      <Switch>
          <Route path="/profile" component={Profile(shop)}>
           <Profile/>
          </Route>
      </Switch>
      </div>
  );
}

function MainPage() {

  return (
    <Router>
      <div className="MainPage">
        <div className="tableau">
          <h1>Liste des sites partenaires</h1>
          {shops.map(shop => {
            return Drawbox(shop)
          })}
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    </Router>
  );
}

// ========================================

ReactDOM.render(
  MainPage(),
  document.getElementById('root')
);