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
import Divider from '@material-ui/core/Divider';

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
              <TableCell><Link to={`/listuser/${user.id}`} activeClassName="current">user</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
    )
}

export function Edit_User({listuser, user, setUsers}) {
 let tmp_state = [...listuser];
 let tmp_user = { ...tmp_state[user.id - 1] };
 var Name = "Entrez le nom"
 var tmp_name = ""
 var Link
  return (
    <div style={{marginLeft: 170}}>
      <form>
        <h4 style={{margin: 0, padding: 0}}>Name</h4>
        <input type="text" name="name" placeholder={Name} onChange={(evt) => { tmp_name = evt.target.value }}/>
        <button type="button" onClick={() => {
          tmp_user.name = tmp_name
          tmp_state[user.id - 1] = tmp_user
          setUsers (tmp_state)
          console.log([...listuser])
          }}>modif</button>
        <Divider/>
        <h4 style={{margin: 0, padding: 0}}>Link</h4>
        <input type="text" name="link" placeholder={Link} />
        <button type="button" onClick={() => {listuser[user.id].link = Link}}>modif</button>
      </form>
    </div>
  )
}

function Users({user}) {
  return (
    <div style={{marginLeft: 170}}>
      <h2>NEW USER</h2>
      <h2>{user.name}</h2>
      <h2>{user.link}</h2>
      <Link to="/">Home<br/></Link>
      <Link to="/listuser">list user<br/></Link>
      {<Link to={`/editusers/${user.id}`} activeClassName="current">edit user</Link>}
    </div>
  )
}

export function EditPersonalUser({user, listuser, setUsers})
{
  return (
    <Route path={`/editusers/${user.id}`}>
      <Edit_User user={user} listuser={listuser} setUsers={setUsers} />
    </Route>
  )
}

export function PersonalUsers(user) {
  return(
      <Route path={`/listuser/${user.id}`}>
        <Users user={user} />
      </Route>
  )
}