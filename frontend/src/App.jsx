

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StatePage from './components/StatePage';
import CountryPage from './components/CountryPage';
import DistrictPage from './components/DistrictPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountryPage />} />
        <Route path="/state/:countryName/:countryId" element={<StatePage />} />
        <Route path="/district/:countryId/:stateName/:stateId" element={<DistrictPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
