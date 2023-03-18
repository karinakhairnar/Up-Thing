import React from 'react';
import '../Styles/common.css';
import ActiveStd from './ActiveStd';
import Submissions from './Submissions';
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
const Charts = () => {
  const data = [
    { name: 'will Kinsman', grading: 1000 },
    { name: 'Taceg 653', grading: 800 },
  ];
  return (
    <div>
      <div className='chartparent'>
        <div className='chartheading'>
          <div>
            <p>assignment I </p>
          </div>
          <div className='links'>
            <button>Invite Link </button>
            <button> + Add Student</button>
          </div>
        </div>
        <div className='block'>
          <div className='cover'>
            <span className='title'>2</span>
            <p className='subtitle'>ACTIVE STUDENTS</p>
          </div>
          <div className='cover'>
            <span className='title'>2</span>
            <p className='subtitle'>SUBMISSIONS</p>
          </div>
        </div>
        <div className='block'>
          <div className='cover'>
            <p className='subtitle'>
              submitted Activities v/s Pending Submissions
            </p>
            <div>
              <PieChart width={300} height={200}>
                <Pie
                  data={data}
                  dataKey='grading'
                  outerRadius={80}
                  fill='green'
                />
              </PieChart>
            </div>
            <div className='block'>
              <div>
                <button className='btngreen'>.</button>
                <span>Submitted</span>
              </div>
              <div>
                <button className='btnblue'>.</button>
                <span>Pending Submissions</span>
              </div>
            </div>
          </div>
          <div className='cover'>
            <p className='subtitle'>Day-wise submissions</p>
            <div>
              <BarChart width={270} height={300} data={data}>
                <Bar dataKey='grading' fill='green' />
                {/* <CartesianGrid stroke='#ccc' /> */}
                <XAxis dataKey='name' />
                <YAxis />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ActiveStd />
        <Submissions />
      </div>
    </div>
  );
};

export default Charts;
