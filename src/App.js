
import './App.css';
import React, { Component } from 'react'
import EmployeeResult from "./components/employeeresult"
import API from "./utils/API";


class App extends React.Component {
    state = {
      data: [],
      searchdata: [],
     search: ""
    }
  
  componentDidMount = () => {
        API.search().then(res => {
        
          this.setState({ data: res.data.results, searchdata: res.data.results })
          console.log({data:res.data});
        }).catch(err => {
            console.log(err);
          })
      
      }
          
  // 
  // 
  
          handleFormSubmit = event => {
            event.preventDefault();
            this.filterUpdated(this.state.data);
          }
  
          handleInputChange = (e) => {
            let { value } = e.target
            value = value.toLowerCase()
            if (value) {
              const filtered = this.state.data.filter(user => (user.name.first.toLowerCase().includes(value) || (user.name.last.toLowerCase().includes(value))))
              this.setState({ data: filtered, searchTerm: value })
            } else {
              this.setState({ data: [...this.state.searchdata], searchTerm: value })
            }
          }

  
  // 
  // 
          sortNames = () => {
           
            const sortedNames = this.state.data.sort((a, b) => {
              if (a.name.first > b.name.first) {
                return 1;
              }
              if (a.name.first < b.name.first) {
                return -1;
              }
              return 0;
            })
            this.setState(prevState => ({
              ...prevState,
              data: sortedNames
            }))
          }
          
  // 
  // 
            buttonPress = () => {
            this.sortNames()
            console.log(this.state.data)
          }
  
  
  // 
  // 
          render() {
            return (
              <div>
                <EmployeeResult data={this.state.data} />
                <button className="btn btn-primary" id="filterBtn" onClick={this.buttonPress}>Sort Names</button>
                <input name="testInput" onChange={this.handleInputChange} value={this.state.searchTerm} placeholder="Search" />
              </div >
            )
          }
        }
    export default App;
