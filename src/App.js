import Header from  './Components/Header.js'
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
     <Header />  
     <main className='pt-16'>
      <Outlet/>
      </main>    
    </div>
  );
}

export default App;
