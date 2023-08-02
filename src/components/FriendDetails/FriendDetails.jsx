import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { name, username, email } = data;
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <div className='container p-4 flex  space-y-4'>
      <div className='bg-green-600 p-5'>
        <h3>Name {name}</h3>
        <p>User Name {username}</p>
        <small>Email {email}</small>
        <button
          onClick={goBack}
          className='block bg-teal-300 px-5 py-2 mt-3 rounded-xl text-white'
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default FriendDetails;
