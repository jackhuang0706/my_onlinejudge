import React, { useState, useEffect } from 'react';

const JudgeServer = () => {
  const [judgeServers, setJudgeServers] = useState([]);
  const [newServer, setNewServer] = useState({
    name: '',
    endpoint: '',
    maxJobs: 10,
    status: 'active'
  });

  useEffect(() => {
    fetchJudgeServers();
  }, []);

  const fetchJudgeServers = async () => {
    // 獲取判題伺服器列表
  };

  return (
    <div className="judge-server-management">
      <h2>判題伺服器管理</h2>

      {/* 添加新伺服器表單 */}
      <div className="server-form">
        <h3>新增判題伺服器</h3>
        <form onSubmit={handleAddServer}>
          <div className="form-group">
            <label>伺服器名稱</label>
            <input
              type="text"
              value={newServer.name}
              onChange={(e) => setNewServer({...newServer, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>伺服器端點</label>
            <input
              type="text"
              value={newServer.endpoint}
              onChange={(e) => setNewServer({...newServer, endpoint: e.target.value})}
            />
          </div>
          <button type="submit">添加伺服器</button>
        </form>
      </div>

      {/* 伺服器列表 */}
      <div className="server-list">
        <h3>現有判題伺服器</h3>
        <table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>端點</th>
              <th>狀態</th>
              <th>當前任務數</th>
              <th>CPU使用率</th>
              <th>記憶體使用率</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {judgeServers.map(server => (
              <tr key={server.id}>
                <td>{server.name}</td>
                <td>{server.endpoint}</td>
                <td>{server.status}</td>
                <td>{server.currentJobs}</td>
                <td>{server.cpuUsage}%</td>
                <td>{server.memoryUsage}%</td>
                <td>
                  <button onClick={() => handleToggleServer(server.id)}>
                    {server.status === 'active' ? '停用' : '啟用'}
                  </button>
                  <button onClick={() => handleDeleteServer(server.id)}>刪除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JudgeServer; 