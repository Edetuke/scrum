import Modal from "./Modal";

const ModalForm = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h2>Enter your user name</h2>
      <input type="text" />
      <button onClick={props.onClose}>Save</button>
      <button onClick={props.onClose}>Close</button>
    </Modal>
  );
};

export default ModalForm;
