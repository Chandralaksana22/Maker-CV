import React, { useState } from 'react';
import CVForm from './CVForm';
import CVPreview from './CVPreview';

const App = () => {
  const [cvData, setCVData] = useState(null);

  const handleFormSubmit = (data) => {
    setCVData(data);
  };

  return (
    <div>
      {cvData ? (
        <CVPreview cvData={cvData} />
      ) : (
        <CVForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
