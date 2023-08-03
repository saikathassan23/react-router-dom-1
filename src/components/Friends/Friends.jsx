import { useLoaderData, useNavigation } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div className={`container p-4 grid grid-cols-3`}>
      {navigation.state === 'loading' ? (
        // <h1>Loading...</h1>
        <img src='https://i.gifer.com/ZKZg.gif' className='w-1/2' alt='loader' />
      ) : (
        data.map((data) => <Friend key={data.id} data={data} />)
      )}
    </div>
  );
};

export default Friends;
