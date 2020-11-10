import React, { Component } from 'react'
import SearchForm from "./searchform"
import EmployeeResult from "./employeeresult"
import API from "../utils/API";

class App extends React.Component {
    state = {
     data: [],
     search: ""
    }
  
  componentDidMount = () => {
        API.getEmployee().then(res => {
          // console.log(res);
          this.setState({ data: res.data.results })
          console.log({data:res.data});
        }).catch(err => {
            console.log(err);
          })
      
      }
          // .then(res => this.setState({ result: res.data }))
          // .catch(err => console.log(err));
  
          render() {
            return (
              <div>
                <EmployeeTableBuilder data={this.state.data} />
              </div >
            )
          }
        }
    export default App;
  