import React from 'react';
import '../Styles/common.css';

const data = [
  { name: 'Taceg 653', lastAct: '12 hours ago', sessions: '7',words:"65" ,submissions:'12 hours ago' ,type :'100%',cb:'100%' },
  { name: 'will Kinsman', lastAct: 'a month ago', sessions: '2',words:"118" ,submissions:'a month ago' ,type :'100%',cb:'80%' },
 
];

const ActiveStd = () => {
  return (
    <div className='activestd'>
      <div>
        <h3>Active Students</h3>
      </div>
      <div className='table'>
        <table>
          <tr>
            <th>Name</th>
            <th>Last Activity</th>
            <th>Sessions</th>
            <th>Words</th>
            <th>Submission Date</th>
            <th>Type ID</th>
            <th>CB</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.lastAct}</td>
                <td>{val.sessions}</td>
                <td>{val.words}</td>
                <td>{val.type}</td>
                <td>{val.cb}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ActiveStd;
