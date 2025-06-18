import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';
import CountryFormModal from './CountryFormModal';

const CountryPage = () => {
  const [countries, setCountries] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchCountries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/countries/view');
      setCountries(res.data || []);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleAddCountry = async (data) => {
    try {
      await axios.post('http://localhost:5000/countries/add', data);
      fetchCountries();
    } catch (error) {
      console.error("Error adding country:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Country</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-black text-white px-4 py-2 rounded-full"
        >
          + Country
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        {countries.length > 0 ? (
          countries.map((country) => (
            <CountryCard
             key={country._id} 
             country={country} 
              states={country.states || []} // ✅ Match states by country ID
             />
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </div>

      <CountryFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddCountry}
      />
    </div>
  );
};

export default CountryPage;
