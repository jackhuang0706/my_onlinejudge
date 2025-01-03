import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div className="user-layout">
      <header className="main-header">
        <nav>
          <div className="logo">
            <Link to="/">Online Judge</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/problems">題目</Link></li>
            <li><Link to="/contests">比賽</Link></li>
            <li><Link to="/announcements">公告</Link></li>
            <li><Link to="/profile">個人資料</Link></li>
          </ul>
          <div className="user-actions">
            <Link to="/login">登入</Link>
            <Link to="/register">註冊</Link>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="main-footer">
        <p>&copy; 2024 Online Judge System</p>
      </footer>
    </div>
  );
};

export default UserLayout; 