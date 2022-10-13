import Modal from "./Modal";
import { useState } from "react";
import Button from "./UI/Button";
import classes from "./ModalForm.module.css";

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
          className={classes.input}
          type="username"
          id="username"
          onChange={userNameChangeHandler}
          defaultValue={name}
        />
        <div className={classes.button}>
          <Button type="submit" disabled={!name}>
            Save
          </Button>
          &nbsp;
          <Button type="button" onClick={props.onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalForm;
