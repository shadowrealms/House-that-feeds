import React from 'react';

function App() {
  return (
    <div style={{ padding: 40, fontFamily: 'Arial', background: '#111', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: 'gold' }}>House of Mercy</h1>
      <p>A place where everyone is welcome.</p>

      <h2>Our Mission</h2>
      <p>Feed the hungry. Help those in need.</p>

      <h2>Donate</h2>
      <button style={{ padding: 10, background: 'gold', border: 'none', borderRadius: 8 }}>
        Donate Now
      </button>
    </div>
  );
}

export default App;
