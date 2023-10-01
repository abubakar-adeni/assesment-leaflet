import React, { useState } from 'react';
import './App.css';
import ShipTrackikng from './ShipTracking';
import Tab2 from './Tab2';
import Wildlife from './Wildlife';

const TabContainer = () => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <div className='parent-container'>
        <div className='center-content'>
          <h1>WEBGIS</h1>
          <div className="tab-buttons">
            <button onClick={() => handleTabClick(1)} className='btn'>Ship</button>
            <button onClick={() => handleTabClick(2)} className='btn'>Plantation</button>
            <button onClick={() => handleTabClick(3)} className='btn'>Wildlife</button>
          </div>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <ShipTrackikng />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Wildlife />}
      </div>
    </>
  );
};

export default TabContainer;
