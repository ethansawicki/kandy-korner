import './App.css';
import {Route, Routes} from "react-router-dom"
import Header from './components/Header'
import NavBar from './components/NavBar';
import Home from './components/Home';



const App = () => {
  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <NavBar />
          <Home />
        </>
      } />
    </Routes>
 );
}

export default App;
