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

export function ListOfShop({listshop}) {
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
            {listshop.map(shop => (
              <TableRow key={shop.id}>
                <TableCell>{shop.date}</TableCell>
                <TableCell>{shop.name}</TableCell>
                <TableCell><Link to={`/shops/${shop.id}`} activeClassName="current">shop</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    )
}

function Shop(shop) {
  return (
    <div style={{marginLeft: 170}}>
      <h2>NEW USER</h2>
      <h2>{shop.name}</h2>
      <h2>{shop.link}</h2>
      <Link to="/">Home<br/></Link>
      <Link to="/listshop">list shop</Link>
    </div>
  )
}

export function PersonalShop(shop) {
  return(
      <Route path={`/shops/${shop.id}`}>
        {Shop(shop)}
      </Route>
  )
}