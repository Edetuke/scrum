import Modal from "./Modal";
import { useState } from "react";

const ModalForm = (props) => {
  const [name, setName] = useState();

  const userNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("username", name);
    props.onClose();
  };

  return (
    <Modal>
      <form onSubmit={submitHandler} onClose={props.onClose}>
        <h2>Enter your user name</h2>
        <input
          type="username"
          id="username"
          onChange={userNameChangeHandler}
          defaultValue={name}
        />
        <button type="submit" disabled={!name}>
          Save
        </button>
        <button type="cancel">Cancel</button>
      </form>
    </Modal>
  );
};

export default ModalForm;
