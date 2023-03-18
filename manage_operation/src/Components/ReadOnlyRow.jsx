import React from 'react';

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type='button'
          onClick={(event) => handleEditClick(event, contact)}>
          {contact.group}
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
