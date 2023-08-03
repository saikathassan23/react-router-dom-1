import { NavLink } from 'react-router-dom';

const Navlink = ({to, text}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? 'text-red-400' : '')}
    >
      {text}
    </NavLink>
  );
};

export default Navlink;
