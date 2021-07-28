import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const shops = [
  {
    id:1,
    name: "TEST",
    date: "20/11/2002",
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
  },
  {
    id: 4,
    name:"TEST4",
    link: "https://youtube.com/"
  },
  {
    id: 5,
    name:"TEST5",
    link: "https://youtube.com/"
  },
  {
    id: 6,
    name:"TEST6",
    link: "https://youtube.com/"
  },
  {
    id: 7,
    name:"TEST7",
    link: "https://youtube.com/"
  },
  {
    id: 8,
    name:"TEST8",
    link: "https://youtube.com/"
  },
  {
    id: 9,
    name:"TEST9",
    link: "https://youtube.com/"
  }
]

export default function App() {
  return (
    <Router>
      <div>
        <div style={{ background: '#607d8b', width: 1200, height: 75, marginLeft: 250 }}>
          <Typography style={{marginLeft: 500}} component="h2" variant="h6" color="primary" gutterBottom>
            Liste des sites
          </Typography>
        </div>
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

function DrawHome(shops) {
  return (
    <React.Fragment>
      <Table size="small" padding = 'normal' stickyHeader={true} height={10} width={10} rowHeight={10}  style={{ width: 1200, marginLeft: 250, background: '#90caf9'}}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>link User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shops.map((shop) => (
            <TableRow key={shop.id}>
              <TableCell>{shop.date}</TableCell>
              <TableCell>{shop.name}</TableCell>
              <TableCell><Link to={`/users/${shop.id}`} activeClassName="current">user</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

function Home() {
  return (
    <div className="MainPage">
      {DrawHome(shops)}
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
      <Link to="/">Home</Link>
    </div>
  )
}

// ========================================

ReactDOM.render(
    App(),
    document.getElementById('root')
);