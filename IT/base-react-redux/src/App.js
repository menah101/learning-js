import { Outlet } from 'react-router-dom';
import './App.scss';
// import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';

const App = () => {
  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default App;
