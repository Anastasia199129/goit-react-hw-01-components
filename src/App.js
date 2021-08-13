import Profile from './components/Profile/Profile/Profile';
import user from './components/Profile/Profile/user.json';
import Statistics from './components/Statistics/Statistics.jsx';
import statistic from './components/Statistics/Statistics.json';

export default function App() {
  return (
    <div>
      <Profile
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics stats={statistic} title="Upload stats" />
    </div>
  );
}
