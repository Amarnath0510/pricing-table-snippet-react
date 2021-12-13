// import logo from './logo.svg';



import './App.css';
import Button from '@mui/material/Button';

function App() {
  
  return (
    <div className="App">
    <div className="bill-container">
  <Chart1/>
  <Chart2/>
  <Chart3/>
  </div>
    </div>
  );
}

function Chart1(){
  return(
    <div className="chart1container" >
    <p>FREE</p>
    <h1>$0/month</h1>
    <p>✔ Single User</p>
    <p>✔Unlimited Public Projects</p>
    <p>✔Community Access</p>
    <p>❌Unlimited Private Projects</p>
    <p>❌Dedicated Phone Support</p>
    <p>❌Free subdomain</p>
    <p>❌Monthly Status Reports</p>
    <Button variant="contained">Button</Button>
  
    </div>
  )
}

function Chart2(){
  return(
    <div className="chart2container">
    <p>PLUS</p>
    <h1>$9/month</h1>
    <p>✔5Users</p>
    <p>✔50 GB Storage</p>
    <p>✔Unlimited Public Projects</p>
    <p>✔Community Access</p>
    <p>✔Unlimited Private Projects</p>
    <p>✔Dedicated Phone Support</p>
    <p>❌Free Subdomain</p>
    <p>❌Monthly Status Reports</p>
    <Button variant="contained">Button</Button>
    </div>
  
  )
}
function Chart3(){
  return(
    <div className="chart3container">
    <p>PRO</p>
    <h1>$49/month</h1>
    <p>✔Unlimited users</p>
    <p>✔150 GB storage</p>
    <p>✔Unlimited Public Projects</p>
    <p>✔Community Access</p>
    <p>✔Unlimited Private Projects</p>
    <p>✔Dedicated Phone Support</p>
    <p>✔Unlimited Free Subdomains</p>
    <p>✔Monthly Status Reports</p>
    <Button variant="contained">Button</Button>

    </div>
  )
}

export default App;
