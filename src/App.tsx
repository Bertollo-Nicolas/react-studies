import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { features } from './features';
import { MainLayout } from './components/layouts/MainLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          {features.map((feature) => (
            <Route
              key={feature.path}
              path={feature.path}
              element={<feature.component />}
            />
          ))}
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => (
  <div>
    <h1 className="text-3xl font-bold mb-4">useReducer Studies</h1>
    <p>Select a feature from the sidebar to view the study.</p>
    
  </div>
);

export default App;