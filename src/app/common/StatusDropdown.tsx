import * as React from "react";
import { Status } from "./StatusEnum";

import { TextField } from "@material-ui/core";

type TProps = {
  onChange: any;
  value: any;
};

export default class StatusDropdown extends React.Component<TProps, {}> {
  render() {
    const { onChange, value } = this.props;
    return (
      <TextField
        fullWidth
        select
        id="statusCode"
        variant="outlined"
        label="Status"
        value={value}
        onChange={onChange("statusCode")}
        SelectProps={{
          native: true
        }}
        margin="normal"
      >
        <option value="" />
        <option value={Status.Completed}>{Status.Completed}</option>
        <option value={Status.InProgress}>{Status.InProgress}</option>
        <option value={Status.NotStarted}>{Status.NotStarted}</option>
        ))}
      </TextField>
    );
  }
}
