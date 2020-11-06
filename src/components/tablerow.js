import React from 'react'

function table(props) {
    {
        return (
            <Table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Image</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scoope="row">1</th>
                        <td>{props.name.first}{props.name.last}</td>
                        <td>{props.picture}</td>
                        <td>{props.phone}</td>
                        <td>{props.email}</td>
                        <td>{props.dob.date}</td>
                       
                    </tr>                   
                </tbody>
            </Table>
        ),
    }
}
