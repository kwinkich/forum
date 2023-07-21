import { useEffect, useContext } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './index.css';
import { Context } from './main';
import MainPage from './pages/Main/Main';
import GroupsPage from './pages/Groups/GroupsPage';
import SideBar from './components/SideBar/SideBar';
import CreatePage from './pages/Create/CreatePage';
import UserPage from './pages/User/UserPage';
import Form from './pages/Form/Form';

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!store.isAuth) {
    return <Form />;
  }

  return (
    <Router>
      <div>
        <SideBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route
            path="/user"
            element={
              <UserPage
                bannerPath=""
                avatarPath=""
                nicknamePath=""
                descriptionPath=""
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default observer(App);
