/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Friend = (props) => {
  const { name, email, id } = props.data;
  return (
    <div className='border p-4 my-3 space-y-3'>
      <h3>{name}</h3>
      <p>{email}</p>
      <div>
        <Link to={`/friendDetails/${id}`}>Show Details</Link>
      </div>
    </div>
  );
};

export default Friend;
