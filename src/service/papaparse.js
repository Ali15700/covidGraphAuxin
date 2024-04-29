import React, { useState } from 'react';
import Papa from 'papaparse';

function CSVtoJSONConverter() {
  const [jsonData, setJsonData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
          console.log(results.data);
          setJsonData(results.data);
        }
      });
    }
  };

  return (
    <div>
      <h2>CSV to JSON Converter</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <div>
        {jsonData && (
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default CSVtoJSONConverter;
