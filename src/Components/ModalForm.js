import Modal from "./Modal";
import { useState } from "react";

const ModalForm = (props) => {
  const [name, setName] = useState();

  const userNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = () => {
    localStorage.setItem("username", name);
    props.onClose();
  };

  return (
    <Modal>
      <form onSubmit={submitHandler}>
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
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default ModalForm;
