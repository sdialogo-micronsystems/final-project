import * as React from "react";
import { connect } from "react-redux";
import { addDevPlan, deleteDevPlan } from "../../redux/actions/devPlanActions";

import { Status } from "../../common/StatusEnum";
import { TDevPlan, TEmployee } from "../../common/types";
import StatusDropdown from "../../common/StatusDropdown";
import EmployeeDropdown from "../../common/EmployeeDropdown";

import {
  CardActions,
  Button,
  Grid,
  TextField,
  Divider
} from "@material-ui/core";

type TProps = {
  data: TDevPlan;
  isEdit: boolean;
  closeDrawer: any;
  tabValue: number;
  addDevPlan: any;
  deleteDevPlan: any;
  employees: TEmployee[];
};

type TState = {
  data: TDevPlan;
};

class DevPlanSubViewPage extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  handleSave = (event: any) => {
    console.log("Edit...");
    //update app state; delete then add
    this.props.deleteDevPlan(this.state.data.id);
    this.props.addDevPlan(this.state.data);

    this.props.closeDrawer(event);
  };

  handleChange = (name: string) => (event: any) => {
    let devPlan = { ...this.state.data, [name]: event.target.value };

    this.setState({ data: devPlan });
  };
  render() {
    const { isEdit, closeDrawer, tabValue } = this.props;
    const { data } = this.state;
    return (
      <div>
        <form noValidate autoComplete="off">
          <Grid
            container
            spacing={16}
            style={{
              paddingLeft: "10px",
              paddingTop: "10px",
              paddingBottom: "10px"
            }}
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="title"
                label="Title"
                value={data.title}
                onChange={this.handleChange("title")}
                margin="normal"
                variant="outlined"
                disabled={!isEdit}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="description"
                label="Description"
                value={data.description}
                onChange={this.handleChange("description")}
                margin="normal"
                variant="outlined"
                disabled={!isEdit}
                multiline
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="dueDate"
                label="Due Date"
                type="date"
                value={data.dueDate}
                onChange={this.handleChange("dueDate")}
                margin="normal"
                variant="outlined"
                disabled={!isEdit}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="dateCompleted"
                label="Date Completed"
                type="date"
                value={data.dueDate}
                onChange={this.handleChange("dateCompleted")}
                margin="normal"
                variant="outlined"
                disabled={!isEdit}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={6} hidden={tabValue === 1 ? false : true}>
              <EmployeeDropdown
                employees={this.props.employees}
                onChange={this.handleChange}
                value={data.employeeId}
              />
            </Grid>
            <Grid item xs={6} hidden={tabValue === 0 ? false : true}>
              {data.statusCode === Status.NotStarted ? (
                <Button disabled style={{ background: "red", color: "white" }}>
                  {data.statusCode}
                </Button>
              ) : data.statusCode === Status.Completed ? (
                <Button
                  disabled
                  style={{
                    background: "green",
                    color: "white"
                  }}
                >
                  {data.statusCode}
                </Button>
              ) : (
                <Button
                  disabled
                  style={{
                    background: "orange",
                    color: "white"
                  }}
                >
                  {data.statusCode}
                </Button>
              )}
            </Grid>
            <Grid item xs={6} hidden={tabValue === 1 ? false : true}>
              <StatusDropdown
                onChange={this.handleChange}
                value={data.statusCode}
              />
            </Grid>
          </Grid>
        </form>
        <Divider />
        <CardActions>
          {tabValue === 1 ? (
            <Grid spacing={8} justify="flex-end" container>
              <Grid item>
                <Button
                  style={{
                    background: "rgba(73,155,234,1)",
                    color: "white"
                  }}
                  onClick={this.handleSave}
                >
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={{
                    background: "rgba(73,155,234,1)",
                    color: "white"
                  }}
                  onClick={event => closeDrawer(event)}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid spacing={8} justify="flex-end" container>
              <Grid item>
                <Button
                  style={{
                    background: "rgba(73,155,234,1)",
                    color: "white"
                  }}
                  onClick={event => closeDrawer(event)}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          )}
        </CardActions>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    devPlans: state.devPlans,
    employees: state.employees
  };
}

const mapDispatchToProps = {
  addDevPlan,
  deleteDevPlan
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DevPlanSubViewPage);
