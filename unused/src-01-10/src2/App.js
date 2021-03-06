// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home.page';
import SuperHeroesPage from './components/SuperHeroes.page';
import RQSuperHeroesPage from './components/RQSuperHeroes.page';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/super-heroes">Traditional Super Heroes</Link>
        </li>
        <li>
          <Link to="/rq-super-heroes">RQ Super Heroes</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/super-heroes' element={<SuperHeroesPage/>}/>
      <Route path='/rq-super-heroes' element={<RQSuperHeroesPage/>}/>
    </Routes>
      
    </>
  );
}

export default App;
