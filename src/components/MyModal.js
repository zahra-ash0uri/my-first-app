import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

  }



  render() {
    const { modal, person, onChange, addItem, onDismiss } = this.props;
    return (
      <div>
        <Modal isOpen={modal} toggle={() => onDismiss()}>
          <ModalHeader toggle={()=> onDismiss()}>Please fill out this</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label className="form-group">First Name: </label>
              <input
                type="text"
                className="form-control"
                value={person.firstName}
                onChange={e => onChange('firstName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-group">Last Name: </label>
              <input
                type="text"
                className="form-control"
                value={person.lastName}
                onChange={e => onChange('lastName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-group">Age: </label>
              <input
                type="text"
                className="form-control"
                value={person.Age}
                onChange={e => onChange('Age', e.target.value)}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <button type="button" className="btn btn-primary" onClick={()=>addItem(person)}>Save</button>{' '}
            <button type="button" className="btn btn-primary" onClick={onDismiss}>Cancel</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MyModal;