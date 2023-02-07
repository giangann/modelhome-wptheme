import { Route, Routes } from 'react-router-dom';

import { Layout } from '../layouts';
import { Home } from '../screens/home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
};
