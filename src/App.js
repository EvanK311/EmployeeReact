
import './App.css';
import tablerow from "./components/tablerow";

class App extends Component {

}
render() {
  return (
    <div>
     <Table class="table">
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
          {tablerow /}
        </tbody>
        </table>
    </div>
  );
}

export default App;
