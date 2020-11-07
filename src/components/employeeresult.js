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
              <th>{result.name.first} {result.name.last}</th>
              <th>{result.email}</th>
              <th>{result.phone}</th>
              <th><img src={result.picture.thumbnail}/></th>
              </tr>
          ))}
    </table>
    );
  }

export default EmployeeResult;