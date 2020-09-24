import React, { useState } from "react";
import { TextField } from "../text-field/index";
import { FormRow } from "./styles";

const Form = () => {
  return (
    <React.Fragment>
      <FormRow>
        <TextField
          name="field1"
          type="text"
          value={this.state.values.field1}
          placeholder="Type here"
          onChange={this.onChange}
        />
      </FormRow>
    </React.Fragment>
  );
};
export { Form };
