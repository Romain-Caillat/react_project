import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {  PersonalUsers, ListOfUser, } from "./Users"
import { PersonalShop, ListOfShop, } from "./Shop"

var shops = [
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
  
var users = [
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

function Home() {
  return (
    <div className="MainPage" style={{margin: 0, padding: 0}} />
  )
}

function PrintMenu() {
  return (
    <div style={{margin: 0, padding: 0}}>
      <Box style={{ background: '#607d8b', width: 150, height: window.innerHeight, margin: 0, padding: 0, position: 'absolute'}} sx={{ border: '3px solid black' }}>
        <pre><br/><br/><br/></pre>
        <li>
          <Link to="/">home</Link>
        </li>
        <pre><br/><br/><br/></pre>
        <li>
          <Link to="/listuser">list user</Link>
        </li>
        <pre><br/><br/><br/></pre>
        <li>
          <Link to="/listshop">list shop</Link>
        </li>
      </Box>
      <Box style={{ background: '#607d8b', width: window.innerWidth, height: 75, margin: 0, padding: 0}} sx={{ border: '3px solid black' }}>
        <Typography style={{marginLeft: window.innerWidth / 2}} component="h1" variant="h3" color="primary" gutterBottom>
          Back-office
        </Typography>
      </Box>
      </div>
  )
}

function SwitchRouter(listuser, listshop) {
  return (
    <Switch>
      {listshop.map (shop => {
        <PersonalShop shop={shop}/>
      })}
      {listuser.map ((user) => {
        <PersonalUsers user={user}/>
      })}
      <Route path="/listuser">
          <ListOfUser listuser={users}/>
      </Route>
      <Route path="/listshop">
          <ListOfShop listshop={shops}/>
      </Route>
      <Route path="/">
          <Home />
      </Route>
    </Switch>
  )
}

export default function App() {
  const [listuser, setUsers] = React.useState(users);
  const [listshop, setShops] = React.useState(shops);

  return (
      <Router>
        <div style={{margin: 0, padding: 0}}>
          <PrintMenu/>
          <SwitchRouter listuser={listuser} listshop={listshop}/>
        </div>
      </Router>
  )
}