import React from "react";
import { Button, Modal } from "flowbite-react";

const Login = ({ openModal, setOpenModal }) => {
  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} size="6xl">
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;

