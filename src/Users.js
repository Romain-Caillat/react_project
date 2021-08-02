import React from "react";
import {
  Route,
  Link
} from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export function ListOfUser({listuser}) {
    return (
      <React.Fragment>
      <Table size="small" padding = 'normal' stickyHeader={true} style={{ width: window.innerWidth - 170, marginLeft: 170, background: '#90caf9'}}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>link User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listuser.map(user => (
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

function Users(user) {
  return (
    <div style={{marginLeft: 170}}>
      <h2>NEW USER</h2>
      <h2>{user.name}</h2>
      <h2>{user.link}</h2>
      <Link to="/">Home<br/></Link>
      <Link to="/listuser">list user</Link>
      
    </div>
  )
}

export function PersonalUsers(user) {
  return(
      <Route path={`/users/${user.id}`}>
        {Users(user)}
      </Route>
  )
}