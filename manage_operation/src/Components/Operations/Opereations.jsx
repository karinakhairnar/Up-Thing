import React, { useState, Fragment } from 'react';
import Employee from '../Json/Employee.json';
import Edit from './Edit';
import './Opereations.css';

const Opereations = () => {
  const [data, setData] = useState(Employee);
  const [edit, setEdit] = useState(null);
  const [editformData,setEditFormData] =useState({
    name:"",
    email:"",
    group:"",
  });
  
const handleEditChnage =(event)=>{
  event.preventDefault();
  const inputName = event.target.getAttribute("name")
  const inputValue = event.target.value;

  const newFormData ={...editformData};
  newFormData[inputName] = inputValue;

  setEditFormData(newFormData);
}


const handleEdit=(event,e)=>{
  event.preventDefault();
  setEdit(e.id);

  const formValue = {
    name:e.name,
    email:e.email,
    group:e.group,
  }
  setEditFormData(formValue);
  };

  return (
    <div className='parent'>
      <h2>Table of Employee and Role Assignment Operation</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <Fragment>
              {edit === e.id ? (
                <Edit newFormData={editformData} handleEditChnage={handleEditChnage}/>
              ) : (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>
                    <button type='button' onClick={(event)=>handleEdit(event,e)}>{e.group}</button>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Opereations;
