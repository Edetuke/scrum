import Modal from "./Modal";
import { useState } from "react";

const ModalForm = (props) => {
  const [name, setName] = useState();
  const [enteredUserName, setEnteredUserName] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUserName,
    };

    console.log(userData);
  };

  return (
    <Modal>
      <form onSubmit={submitHandler} onClose={props.onClose}>
        <h2>Enter your user name</h2>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value.trim());
            {
              userNameChangeHandler(e);
            }
          }}
          defaultValue={enteredUserName}
        />
        <button type="submit" disabled={!name} onSubmit={props.onClose}>
          Save
        </button>
        <button type="cancel" onClick={props.onClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default ModalForm;
