import React, { useEffect, useState } from 'react';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // 獲取公告列表
  }, []);

  return (
    <div className="announcements">
      <h2>公告欄</h2>
      
      <div className="announcements-list">
        {announcements.map(announcement => (
          <div key={announcement.id} className="announcement-card">
            <h3>{announcement.title}</h3>
            <p>{announcement.content}</p>
            {announcement.image_url && (
              <img src={announcement.image_url} alt={announcement.title} />
            )}
            <div className="announcement-footer">
              <span>發布時間：{new Date(announcement.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements; 