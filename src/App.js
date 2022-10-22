import './App.css';
import Login from './Login';
import SignupS1 from './signup/Signup';
import GoHome from './home/Home';
import History from './pages/History';
import MemberInfo from './pages/MemberInfo';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { MyContext } from './context/UserInfo';
import { useState } from 'react';

function App() {
  const [memName, setMemName] = useState("KH정보교육원");
  return (
    <MyContext.Provider value={{memName, setMemName}}>
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/SignupS1" element={<SignupS1 />} />
            <Route path="/Home" element={<GoHome />} />
            <Route path="/History" element={<History />} />
            <Route path="/MemberInfo" element={<MemberInfo />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
