-- 用戶表
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 題目表
CREATE TABLE problems (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    input_description TEXT,
    output_description TEXT,
    time_limit INT DEFAULT 1000,
    memory_limit INT DEFAULT 262144,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 提交記錄表
CREATE TABLE submissions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    problem_id INT REFERENCES problems(id),
    code TEXT NOT NULL,
    language VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    execution_time INT,
    memory_used INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 比賽表
CREATE TABLE contests (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 比賽題目關聯表
CREATE TABLE contest_problems (
    contest_id INT REFERENCES contests(id),
    problem_id INT REFERENCES problems(id),
    PRIMARY KEY (contest_id, problem_id)
);

-- 公告表
CREATE TABLE announcements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_url VARCHAR(255),
    created_by INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 使用者解題狀況表
CREATE TABLE user_problem_status (
    user_id INT REFERENCES users(id),
    problem_id INT REFERENCES problems(id),
    status VARCHAR(20) NOT NULL,
    solved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    attempt_count INT DEFAULT 1,
    PRIMARY KEY (user_id, problem_id)
);

-- 修改problems表，添加測試數據相關欄位
ALTER TABLE problems ADD COLUMN sample_input TEXT[];
ALTER TABLE problems ADD COLUMN sample_output TEXT[];
ALTER TABLE problems ADD COLUMN test_cases_input TEXT[];
ALTER TABLE problems ADD COLUMN test_cases_output TEXT[];
ALTER TABLE problems ADD COLUMN difficulty VARCHAR(20);
ALTER TABLE problems ADD COLUMN tags TEXT[]; 