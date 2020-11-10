
import './App.css';
import React, { Component } from 'react'
import EmployeeResult from "./components/employeeresult"
import API from "./utils/API";

class App extends React.Component {
    state = {
     data: [],
     search: ""
    }
  
  componentDidMount = () => {
        API.search().then(res => {
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
                <EmployeeResult data={this.state.data} />
              </div >
            )
          }
        }
    export default App;
