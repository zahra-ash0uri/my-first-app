import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class GetPostsModal extends React.Component {
  


  render() {
    const { modal,postsList, onDismiss} = this.props;
    console.log(modal);
    return (
      <div>
        <Modal isOpen={modal} toggle={() => onDismiss()}>
          <ModalHeader toggle={()=> onDismiss()}>Posts</ModalHeader>
          <ModalBody>
              <table className="table table-striped table-sm mt-2">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {postsList && postsList.map((e)=>(
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td>{e.body}</td>
                        </tr>
                    ))}
                </tbody>
              </table>
            
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default GetPostsModal;