import React from 'react';
import axios from 'axios';
//import Table from './Table';


class App extends React.Component{
  state = {
    details : [],
  }

  componentDidMount() {
    let data ;
    axios.get('http://localhost:8000/wel/')
    .then(res => {
      data = res.data;
      this.setState({
        details : data
      });
    })
    .catch(err => {})
  }
  
  render() {
    return(
      <div>
        <table>
              <thead>
                <th style={{padding:'30px'}}>Who</th>
                <th style={{padding:'20px'}}>What</th>
                <th style={{padding:'20px'}}>When</th>
              </thead>
            
        {this.state.details.map((detail, id) => (
        <div key={id}>
          <div>
          <div>
            <tr>
            <td style={{padding:'30px'}}>{detail.reason}</td>
            <td style={{padding:'20px'}}> {detail.date}</td>
            <td style={{padding:'20px'}}>{detail.manager}</td>
            </tr>
            
            
          </div>
        </div>
      </div>
    )
  )}
  </table>
  </div>
    );
}

}
export default App;