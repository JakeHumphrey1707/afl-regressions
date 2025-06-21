import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">AFL Betting Analyzer</h1>
      </header>
      <main className="container mx-auto p-4">
        <p className="text-lg">Welcome to AFL Betting Analysis Platform</p>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-semibold mb-2">Status</h2>
          <p>✅ Frontend: Running</p>
          <p>✅ Backend: Running on port 5000</p>
        </div>
      </main>
    </div>
  );
}

export default App;