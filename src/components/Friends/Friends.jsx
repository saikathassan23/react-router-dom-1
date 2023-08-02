import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
  const data = useLoaderData();
  return (
    <div className='container p-4 grid grid-cols-4'>
      {/* <h1>My Friends {Array.isArray(data).toString()}</h1> */}
      {data.map((data) => (
        <Friend key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Friends;
