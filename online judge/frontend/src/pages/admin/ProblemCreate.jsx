import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const ProblemCreate = () => {
  const [problem, setProblem] = useState({
    title: '',
    description: '',
    inputDescription: '',
    outputDescription: '',
    timeLimit: 1000,
    memoryLimit: 262144,
    difficulty: 'medium',
    sampleInput: [''],
    sampleOutput: [''],
    testCasesInput: [''],
    testCasesOutput: [''],
    tags: []
  });

  const [preview, setPreview] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 處理提交邏輯
  };

  return (
    <div className="problem-create">
      <h2>新增題目</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>題目名稱</label>
          <input
            type="text"
            value={problem.title}
            onChange={(e) => setProblem({...problem, title: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>題目描述</label>
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
                  {problem.description}
                </ReactMarkdown>
              </div>
            ) : (
              <textarea
                value={problem.description}
                onChange={(e) => setProblem({...problem, description: e.target.value})}
                placeholder="支援 Markdown 及 LaTeX 語法，例如：
# 標題
**粗體** *斜體*

數學公式：
行內公式：$E=mc^2$
獨立公式：
$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$"
              />
            )}
          </div>
        </div>

        <div className="form-group">
          <label>輸入說明</label>
          <div className="editor-container">
            {preview ? (
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {problem.inputDescription}
              </ReactMarkdown>
            ) : (
              <textarea
                value={problem.inputDescription}
                onChange={(e) => setProblem({...problem, inputDescription: e.target.value})}
              />
            )}
          </div>
        </div>

        <div className="form-group">
          <label>輸出說明</label>
          <div className="editor-container">
            {preview ? (
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {problem.outputDescription}
              </ReactMarkdown>
            ) : (
              <textarea
                value={problem.outputDescription}
                onChange={(e) => setProblem({...problem, outputDescription: e.target.value})}
              />
            )}
          </div>
        </div>

        {/* 其他表單欄位... */}
        
        <button type="submit">創建題目</button>
      </form>
    </div>
  );
};

export default ProblemCreate; 