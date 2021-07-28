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
import Box from '@material-ui/core/Box';

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
    name:"SHOP9",
    link: "https://youtube.com/"
  }
]

const users = [
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
      <div style={{margin: 0, padding: 0}}>
        <Box style={{ background: '#607d8b', width: 150, height: window.innerHeight, margin: 0, padding: 0, position: 'absolute'}} sx={{ border: '3px solid black' }}>
          <pre><br/><br/><br/></pre>
          <li>
            <Link to="/">home</Link>
          </li>
          <pre><br/><br/><br/></pre>
          <li>
            <Link to="/listuser">user</Link>
          </li>
          <pre><br/><br/><br/></pre>
          <li>
            <Link to="/listshop">shop</Link>
          </li>
        </Box>
        <Box style={{ background: '#607d8b', width: window.innerWidth, height: 75, margin: 0, padding: 0}} sx={{ border: '3px solid black' }}>
          <Typography style={{marginLeft: window.innerWidth / 2}} component="h1" variant="h3" color="primary" gutterBottom>
            Back-office
          </Typography>
        </Box>
        <Switch>
            {shops.map (shop => {
              return PersonalShop(shop)
            })}
            {users.map (user => {
              return PersonalUsers(user)
            })}
          <Route path="/listuser">
            <ListOfUser />
          </Route>
          <Route path="/listshop">
            <ListOfShop />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function PersonalUsers(user)
{
  return(
      <Route path={`/users/${user.id}`}>
        {Users(user)}
      </Route>
  )
}

function PersonalShop(shop)
{
  return(
      <Route path={`/users/${shop.id}`}>
        {Users(shop)}
      </Route>
  )
}

function ListOfUser(user) {
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
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.date}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell><Link to={`/users/${user.id}`} activeClassName="current">user</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

function ListOfShop(shop) {
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
    <div className="MainPage" style={{margin: 0, padding: 0}}>
      
    </div>
  )
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