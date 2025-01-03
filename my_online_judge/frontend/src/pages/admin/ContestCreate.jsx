import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const ContestCreate = () => {
  const [contest, setContest] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    problems: []
  });

  const [preview, setPreview] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 處理提交邏輯
  };

  return (
    <div className="contest-create">
      <h2>新增比賽</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>比賽名稱</label>
          <input
            type="text"
            value={contest.title}
            onChange={(e) => setContest({...contest, title: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>比賽說明</label>
          <div className="editor-container">
            <div className="editor-toolbar">
              <button type="button" onClick={() => setPreview(!preview)}>
                {preview ? '編輯' : '預覽'}
              </button>
            </div>
            {preview ? (
              <div className="markdown-preview">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {contest.description}
                </ReactMarkdown>
              </div>
            ) : (
              <textarea
                value={contest.description}
                onChange={(e) => setContest({...contest, description: e.target.value})}
                placeholder="支援 Markdown 及 LaTeX 語法"
              />
            )}
          </div>
        </div>

        <div className="form-group">
          <label>開始時間</label>
          <input
            type="datetime-local"
            value={contest.startTime}
            onChange={(e) => setContest({...contest, startTime: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>結束時間</label>
          <input
            type="datetime-local"
            value={contest.endTime}
            onChange={(e) => setContest({...contest, endTime: e.target.value})}
          />
        </div>

        {/* 題目選擇區域 */}
        <div className="form-group">
          <label>選擇題目</label>
          {/* 實現題目選擇功能 */}
        </div>

        <button type="submit">創建比賽</button>
      </form>
    </div>
  );
};

export default ContestCreate; 