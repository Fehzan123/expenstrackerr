import React from 'react';
import './BasicBackit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const BasicBackit = () => {
  const data = [
    {
      Rank: 1,
      name: 'Selling with re entr',
      RaClamerRatio: '3.96',
      OverAllProfit: '381845',
      AvgDailyProfit: '319.54',
      WinDay: '0.65',
      Price: '-',
      Action: 'View',
    },
    {
      Rank: 2,
      name: 'strategy_name',
      RaClamerRatio: '3.96',
      OverAllProfit: '381845',
      AvgDailyProfit: '319.54',
      WinDay: '0.65',
      Price: '-',
      Action: 'View',
    },
    {
      Rank: 3,
      name: 'Based on premium and',
      RaClamerRatio: '3.42',
      OverAllProfit: '255425',
      AvgDailyProfit: '208.51',
      WinDay: '0.64',
      Price: '-',
      Action: 'View',
    },
    {
      Rank: 4,
      name: 'strategy_name',
      RaClamerRatio: '3.22',
      OverAllProfit: '370845',
      AvgDailyProfit: '303.47',
      WinDay: '0.65',
      Price: '-',
      Action: 'View',
    },
    {
      Rank: 5,
      name: 'strategy_name',
      RaClamerRatio: '3.22',
      OverAllProfit: '370845',
      AvgDailyProfit: '303.47',
      WinDay: '0.65',
      Price: '-',
      Action: 'View',
    },
    {
      Rank: 6,
      name: 'Based on premium wit',
      RaClamerRatio: '3.01',
      OverAllProfit: '135980',
      AvgDailyProfit: '185.77',
      WinDay: '0.49',
      Price: '-',
      Action: 'View',
    },
    {
      Rank: 7,
      name: 'strategy_name',
      RaClamerRatio: '2.76',
      OverAllProfit: '267867.5',
      AvgDailyProfit: '218.49',
      WinDay: '0.6',
      Price: '-',
      Action: 'View',
    },
    {
      Rank: 8,
      name: 'Wait and trade_Save',
      RaClamerRatio: '2.62',
      OverAllProfit: '178252.5',
      AvgDailyProfit: '161.9',
      WinDay: '0.63',
      Price: '-',
      Action: 'View',
    },
    {
      Rank: 9,
      name: 'iron condor',
      RaClamerRatio: '2.44',
      OverAllProfit: '176420',
      AvgDailyProfit: '137.51',
      WinDay: '0.65',
      Price: '-',
      Action: 'View',
    },
    {
      Rank: 10,
      name: 'strategy_name',
      RaClamerRatio: '2.4',
      OverAllProfit: '244555',
      AvgDailyProfit: '198.66',
      WinDay: '0.62',
      Price: '-',
      Action: 'View',
    },
  ];

  return (
    <div className='BackitContainer'>
      <div className='BacHead'>
        <div></div>
        <h2>Basic Backtest</h2>
        <div>
          <div className='Slipp'>
            Slippage<div>0%</div>
          </div>
        </div>
      </div>
      <div className='BacHead'>
        <h4>Rank</h4>
        <h4>Name</h4>
        <h4>RaClamerRatio</h4>
        <h4>OverAllProfit</h4>
        <h4>Avg. Daily Profit</h4>
        <h4>Win %(Day)</h4>
        <h4>Price (Rs)</h4>
        <h4>Action</h4>
      </div>
      {data.map((item, index) => (
        <div className='BacRow' key={index}>
          <h4>{item.Rank}</h4>
          <p>{item.name}</p>
          <p><FontAwesomeIcon icon={faArrowAltCircleUp} style={{color:'green'}}/> {item.RaClamerRatio}</p>
          <p>{item.OverAllProfit}</p>
          <p>{item.AvgDailyProfit}</p>
          <p>{item.WinDay}</p>
          <p>{item.Price}</p>
          <p>{item.Action}</p>
        </div>
      ))}
    </div>
  );
};

export default BasicBackit;
