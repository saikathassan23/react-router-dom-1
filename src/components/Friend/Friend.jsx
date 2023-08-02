/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Friend = (props) => {
  const { name, email, id } = props.data;
  return (
    <div className='border p-4 my-3 space-y-3'>
      <h3>{name}</h3>
      <p>{email}</p>
      <div>
        <Link to={`/friendDetails/${id}`}>
          <button className='bg-orange-400 px-6 py-3 rounded-xl text-white'>
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Friend;
