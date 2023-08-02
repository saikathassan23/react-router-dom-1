import { Link, NavLink } from 'react-router-dom';
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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
