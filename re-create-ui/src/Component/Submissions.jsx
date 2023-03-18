import React from 'react';
import '../Styles/common.css';
const Submissions = () => {
  return (
    <div className='subparent'>
      <div className='submissionheading'>
        <h3>Submissions</h3>
      </div>
      <div className='table'>
        <table>
          <tr>
            <th>Name</th>
            <th>Submission Status</th>
            <th>Grading Status</th>
            <th>Submission Date</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>will Kinsman</td>
            <td className='btngreen'>Submitted</td>
            <td className='pendinggrey'>pending</td>
            <td>a month ago</td>
            <td>
              <button className='btngreen'>Download KeyLogs</button>
              <button className='btnblue'>Show Submission</button>
            </td>
          </tr>
          <tr>
            <td>Taceg 653</td>
            <td className='btngreen'>Submitted</td>
            <td className='pendinggrey'>pending</td>
            <td>6 hours ago</td>
            <td>
              <button className='btngreen'>Download KeyLogs</button>
              <button className='btnblue'>Show Submission</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Submissions;
