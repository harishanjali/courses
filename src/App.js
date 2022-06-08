
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import Enquiry from './components/Enquiry';
import Users from './components/Users';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/enquiry" element={<Enquiry/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
