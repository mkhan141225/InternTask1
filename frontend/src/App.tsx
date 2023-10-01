import logo from './logo.svg';
import './App.css';
import { Route,Routes} from 'react-router-dom'
import User from './User';



import 'bootstrap/dist/css/bootstrap.min.css';
import AppForm from './components/Form';
import { Card } from 'antd';
import CardTemplate from './components/Card';






function App() {
  return (
    <>
    <Routes>
<Route path="/" element={<User/>}/>

<Route path="/form" element={<AppForm/>}/>



    </Routes>
    </>
  
   
  );
}

export default App;