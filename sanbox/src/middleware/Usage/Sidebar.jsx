import { useSelector } from 'react-redux';

const Sidebar = () => {
  const user = useSelector(state => state.user.user);

  return (
    <nav>
      <a href="/dashboard">Dashboard</a>
      {user?.role === 'admin' && <a href="/admin">Admin Panel</a>}
    </nav>
  );
};
