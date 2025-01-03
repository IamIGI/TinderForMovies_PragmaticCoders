import { Route, Routes } from 'react-router-dom';
import Welcome from '../Pages/Welcome/Welcome';
import Home from '../Pages/Home/Home';

export enum NavigationLinks {
  Welcome = '/',
  Home = '/home',
}

const Root = () => {
  return (
    <Routes>
      <Route path={NavigationLinks.Welcome} element={<Welcome />} />
      <Route path={NavigationLinks.Home} element={<Home />} />
    </Routes>
  );
};

export default Root;
