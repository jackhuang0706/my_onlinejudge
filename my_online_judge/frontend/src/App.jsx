import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 使用者前台
import UserLayout from './layouts/UserLayout';
import Home from './pages/user/Home';
import ProblemList from './pages/user/ProblemList';
import ProblemDetail from './pages/user/ProblemDetail';
import ContestList from './pages/user/ContestList';
import ContestDetail from './pages/user/ContestDetail';
import Profile from './pages/user/Profile';
import Announcements from './pages/Announcements';

// 管理員後台
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import ProblemCreate from './pages/admin/ProblemCreate';
import ProblemManage from './pages/admin/ProblemManage';
import ContestCreate from './pages/admin/ContestCreate';
import ContestManage from './pages/admin/ContestManage';
import JudgeServer from './pages/admin/JudgeServer';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 使用者前台路由 */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="problems" element={<ProblemList />} />
          <Route path="problems/:id" element={<ProblemDetail />} />
          <Route path="contests" element={<ContestList />} />
          <Route path="contests/:id" element={<ContestDetail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="announcements" element={<Announcements />} />
        </Route>

        {/* 管理員後台路由 */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="problems/create" element={<ProblemCreate />} />
          <Route path="problems/manage" element={<ProblemManage />} />
          <Route path="contests/create" element={<ContestCreate />} />
          <Route path="contests/manage" element={<ContestManage />} />
          <Route path="judge-server" element={<JudgeServer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App; 