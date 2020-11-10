import React from "react";

function EmployeeResult(props) {
    console.log("props.employees", props.employees)
    return (
    <table className="table">
        <br />
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Pic</th>
        </tr>
          {props.employees.map(result => (
              <tr>
              <td>{result.name.first} {result.name.last}</td>
              <td>{result.email}</td>
              <td>{result.phone}</td>
              <td><img src={result.picture.thumbnail}/></td>
              </tr>
          ))}
    </table>  
    );
  }

export default EmployeeResult;