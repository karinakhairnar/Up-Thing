import React from 'react';
const Edit = ({ editformData, handleEditChnage }) => {
  return (
    <div>
      <form>
        <td>
          <input type='text' placeholder='Enter Name' name='name' value={handleEditChnage.name} onChange={editformData} />
        </td>
        <td>
          <input type='text' placeholder='Enter Email' name='email' value={handleEditChnage.name} onChange={editformData}/>
        </td>
        <td>
          <input type='text' placeholder='Enter Group' name='group'value={handleEditChnage.name} onChange={editformData} />
        </td>
      </form>
    </div>
  );
};

export default Edit;
