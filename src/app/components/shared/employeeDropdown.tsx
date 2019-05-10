import * as React from "react";
import { TEmployee } from "../../common/types";

import { TextField } from "@material-ui/core";

type TProps = {
  employees: TEmployee[];
  onChange: Function;
  value: string;
  error?: boolean;
  helperText?: string;
  isEdit: boolean;
};

export default class EmployeeDropdown extends React.Component<TProps, {}> {
  render() {
    const {
      onChange,
      value,
      employees,
      error,
      helperText,
      isEdit
    } = this.props;
    return (
      <TextField
        fullWidth
        select
        id="employeeId"
        variant="outlined"
        label="Assignee"
        value={value}
        disabled={isEdit}
        onChange={onChange("employeeId")}
        SelectProps={{
          native: true
        }}
        margin="normal"
        error={error}
        helperText={helperText}
      >
        <option key="blank" value="" />
        {employees.map(employee => (
          <option key={employee.id} value={employee.id}>
            {employee.fullName}
          </option>
        ))}
      </TextField>
    );
  }
}
