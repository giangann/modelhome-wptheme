import { Route, Routes } from 'react-router-dom';

import { Layout } from '../layouts';
import { About } from '../screens/about';
import { Blog } from '../screens/blog';
import { Home } from '../screens/home';
import { ProjectDetail, Projects } from '../screens/project';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};
