import { Outlet, useNavigation } from 'react-router-dom';
// import './App.css';
import Header from './components/Header/Header';

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      {/* <div>{navigation.state === 'loading' ? <h1>Loading...</h1> : ''}</div> */}
      <Outlet />
    </>
  );
}

export default App;
