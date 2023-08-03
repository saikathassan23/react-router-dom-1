import { NavLink } from 'react-router-dom';

const Navlink = (props) => {
  const { to, text } = props;
  console.log(props);
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
