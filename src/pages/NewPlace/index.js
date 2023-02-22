import { useCallback, useReducer } from "react";
import Input from "../../components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../util/validators";
import Button from "../../components/FormElements/Button";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

function NewPlace() {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        idValid: false,
      },
      description: {
        value: "",
        idValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback(
    (id, value, isValid) => {
      dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid });
    },
    [dispatch]
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend
  };

  return (
    <form
      className="relative mx-auto p-4 w-11/12 max-w-2xl shadow-md rounded-md bg-white"
      onSubmit={placeSubmitHandler}
    >
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Input
        id="description"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
}

export default NewPlace;
