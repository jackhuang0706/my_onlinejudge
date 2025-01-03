import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Problems from './pages/Problems';
import ProblemDetail from './pages/ProblemDetail';
import Submit from './pages/Submit';
import Submissions from './pages/Submissions';
import Contests from './pages/Contests';
import ContestDetail from './pages/ContestDetail';
import Rankings from './pages/Rankings';
import Verdicts from './pages/Verdicts';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="problems" element={<Problems />} />
          <Route path="problems/:id" element={<ProblemDetail />} />
          <Route path="submit/:problemId" element={<Submit />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="contests" element={<Contests />} />
          <Route path="contests/:id" element={<ContestDetail />} />
          <Route path="rankings" element={<Rankings />} />
          <Route path="verdicts" element={<Verdicts />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 