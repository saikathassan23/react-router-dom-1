import { NavLink } from 'react-router-dom';
import Navlink from '../Navlink/Navlink';
const Header = () => {
  return (
    <div className='shadow-lg'>
      <nav className='container p-4 flex items-center'>
        <div className='logo flex-1'>
          <NavLink to='/'>
            <h1 className='text-4xl text-violet-400'>DOM</h1>
          </NavLink>
        </div>
        <ul className='flex flex-1 gap-5 justify-end text-3xl'>
          <li>
            <Navlink to={'/'} text={'Home'} />
          </li>
          <li>
            <Navlink to={'/friends'} text={'Friends'} />
          </li>
          <li>
            <Navlink to={'/about'} text={'About'} />
          </li>
          <li>
            <Navlink to={'/contact'} text={'Contact'} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
