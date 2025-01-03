import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <nav className="admin-sidebar">
        <div className="logo">
          <h2>管理後台</h2>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/admin">儀表板</Link>
          </li>
          <li>
            <span>題目管理</span>
            <ul>
              <li><Link to="/admin/problems/create">新增題目</Link></li>
              <li><Link to="/admin/problems/manage">題目列表</Link></li>
            </ul>
          </li>
          <li>
            <span>比賽管理</span>
            <ul>
              <li><Link to="/admin/contests/create">新增比賽</Link></li>
              <li><Link to="/admin/contests/manage">比賽列表</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/admin/judge-server">判題伺服器</Link>
          </li>
          <li>
            <Link to="/admin/announcements">公告管理</Link>
          </li>
        </ul>
      </nav>

      <div className="admin-content">
        <header className="admin-header">
          <div className="user-info">
            <span>管理員：Admin</span>
            <button>登出</button>
          </div>
        </header>
        
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 