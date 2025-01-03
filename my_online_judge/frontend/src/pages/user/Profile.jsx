import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userStats, setUserStats] = useState({
    solvedProblems: [],
    attemptedProblems: [],
    submissions: [],
    contests: []
  });

  useEffect(() => {
    // 獲取用戶統計數據
  }, []);

  return (
    <div className="profile">
      <h2>個人資料</h2>
      
      <div className="stats-overview">
        <div className="stat-card">
          <h3>解題統計</h3>
          <p>已解決：{userStats.solvedProblems.length}</p>
          <p>嘗試過：{userStats.attemptedProblems.length}</p>
        </div>
        
        {/* 其他統計信息... */}
      </div>

      <div className="solved-problems">
        <h3>已解決的題目</h3>
        {/* 題目列表... */}
      </div>
    </div>
  );
};

export default Profile; 