import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LegacyPage from './legacy/LegacyPage';
import { legacyRoutes } from './legacy/routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {legacyRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<LegacyPage slug={route.slug} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
