import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import exercises from './exercises';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {exercises.map((exercise, index) => {
          const Component = lazy(exercise.component);
          return (
            <Route
              key={index}
              path={`/${exercise.path}`}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
