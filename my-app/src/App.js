import React from 'react';
import './App.css';
import SidebarA from './Sidebar'

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
        <div className="Sidebar">
        <SidebarA />
        </div>
      <div className="content" style={{ marginLeft: '16rem', padding: '20px', flex: 1 }}>
        <h1>Cool Restaurant</h1>
        <h2>Check out our offerings in the sidebar!</h2>
        <p>Welcome to our restaurant! Here you can find our menu, learn about us, and get in touch.</p>
      </div>
    </div>
  );
}

export default App;