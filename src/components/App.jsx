import Profile from './Profile';
import userData from '../userData.json';

const App = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default App;
