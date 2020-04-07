import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function FormDataTable(props) {
  
   const empData = [
     {"empId":"101","empName":"Ram","empDob":"1990-04-18","empAdd":"Chennai","pincode":"600125"},
     {"empId":"102","empName":"Syam","empDob":"1990-04-18","empAdd":"Chennai","pincode":"600125"},
     {"empId":"103","empName":"Rao","empDob":"1990-04-18","empAdd":"Chennai","pincode":"600125"},
     {"empId":"104","empName":"Ravi","empDob":"1990-04-18","empAdd":"Chennai","pincode":"600125"},
     {"empId":"105","empName":"Kumar","empDob":"1990-04-18","empAdd":"Chennai","pincode":"600125"},
];


   const rows = [];
   for(var i=0;i<5;i++){
    rows.push(createData(empData[i].empId, empData[i].empName, empData[i].empDob, empData[i].empAdd, empData[i].pincode));
   }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Employee ID</b></TableCell>
            <TableCell align="center"><b>Employee  Name</b></TableCell>
            <TableCell align="center"><b>DOB</b></TableCell>
            <TableCell align="center"><b>Address</b></TableCell>            
            <TableCell align="center"><b>Pin code</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.dob}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.pincode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function createData(id, name, dob, address, pincode) {
  return {id, name, dob, address, pincode };
}

export default FormDataTable