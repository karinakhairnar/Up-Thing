import React, { useState } from 'react';
import Employee from '../Json/Employee.json';
import './Opereations.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const Opereations = () => {
  const [show, setShow] = useState(false);
  const edit = () => {
    alert('lets Edit Data');
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
          {Employee.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>
                {/* <button onClick={edit}>{e.group}</button> */}
                <Button variant='primary' onClick={() => setShow(true)}>
                  {e.group}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName='modal-90w'
          aria-labelledby='example-custom-modal-styling-title'>
          <Modal.Header closeButton>
            <Modal.Title id='example-custom-modal-styling-title'>
              Edit User Profile
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              as={Row}
              className='mb-3'
              controlId='formPlaintextInput'>
              <Col sm='10'>
                <Form.Control type='text' placeholder='Enter Name' />
                <br />
                <Button type='submit'>Change</Button>
                <span></span> <Button type='cancel'>Cancel</Button>
              </Col>
              <Form.Control type='email' placeholder='name@example.com' />
            </Form.Group>
            <Form.Select aria-label='Default select example'>
              <option>Open this select menu</option>
              <option value='1'>Teacher</option>
              <option value='2'>Student</option>
            </Form.Select>
          </Modal.Body>
        </Modal>
      </table>
    </div>
  );
};

export default Opereations;
