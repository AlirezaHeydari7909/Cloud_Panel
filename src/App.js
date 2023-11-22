import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import MainComponent from './Components/MainComponent/MainComponent'
import { useEffect, useState } from 'react';
import userInfoMockData from './mockData/userInfo';
function App() {
  const [userInfo, setUserInfo] = useState('')
    useEffect(() =>{
      setUserInfo(userInfoMockData)
    }, [])
  return (
    <div className='font-roboto'>
      <Navbar userInfo={userInfo} />
      <div className='flex'>
        <Sidebar />
        <MainComponent userInfo={userInfo} />
      </div>
    </div>
  );
}

export default App;
