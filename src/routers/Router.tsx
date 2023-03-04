import { Route, Routes } from 'react-router-dom';

import { Layout } from '../layouts';
import { About } from '../screens/about';
import { Blog } from '../screens/blog';
import {
  Dashboard,
  ManageAboutPage,
  ManageBlog,
  ManageHomepage,
  ManageProject,
} from '../screens/dashboard';
import { Forbidden } from '../screens/forbidden';
import { Home } from '../screens/home';
import { ProjectDetail, Projects } from '../screens/project';

export const Router = () => {
  const isAdmin = true;
  return (
    <Routes>
      {/* Normal route */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
      </Route>

      {/* Admin route */}
      <Route path="/dashboard" element={isAdmin ? <Dashboard /> : <Forbidden />}>
        <Route index element={<ManageHomepage />} />
        <Route path="/dashboard/manage-about-page" element={<ManageAboutPage />} />
        <Route path="/dashboard/manage-project" element={<ManageProject />} />
        <Route path="/dashboard/manage-blog" element={<ManageBlog />} />
      </Route>
    </Routes>
  );
};
