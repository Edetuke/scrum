import Modal from "./Modal";
import { useState } from "react";

const ModalForm = (props) => {
  const [name, setName] = useState();

  return (
    <Modal onClose={props.onClose}>
      <h2>Enter your user name</h2>
      <input type="text" onChange={(e) => setName(e.target.value.trim())} />
      <button disabled={!name} onClick={props.onClose}>
        Save
      </button>
      <button onClick={props.onClose}>Cancel</button>
    </Modal>
  );
};

export default ModalForm;
