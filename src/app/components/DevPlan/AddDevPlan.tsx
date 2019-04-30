import * as React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import * as devPlanActions from "../../redux/actions/devPlanActions";

import { Status } from "../../enums/StatusEnum";
import StatusDropdown from "../StatusDropdown";

import { Grid, TextField, Paper, CardActions, Button } from "@material-ui/core";

type TState = {
  devPlan: {
    title: string;
    description: string;
    status: Status;
    asignee: string;
    dueDate: string;
  };
  redirectToViewPage: any;
};

type TProps = {
  dispatch: any;
};

class AddDevPlan extends React.Component<TProps, TState> {
  state: TState = {
    devPlan: {
      title: "",
      description: "",
      status: Status.Blank,
      asignee: "",
      dueDate: ""
    },
    redirectToViewPage: false
  };

  handleChange = (name: string) => (event: any) => {
    let input = event.target.value;
    let devPlan;
    console.log(input);

    if (name === "title") {
      devPlan = { ...this.state.devPlan, title: input };
      //this.setState({ title: input });
    } else if (name === "description") {
      devPlan = { ...this.state.devPlan, description: input };
      //this.setState({ description: input });
    } else if (name === "asignee") {
      devPlan = { ...this.state.devPlan, asignee: input };
      //this.setState({ asignee: input });
    } else if (name === "dueDate") {
      devPlan = { ...this.state.devPlan, dueDate: input };
      //this.setState({ dueDate: input });
    }

    this.setState({ devPlan: devPlan });
  };

  handleSave = () => {
    console.log("Save...");

    this.setState({ redirectToViewPage: true });
    //update app state
    this.props.dispatch(devPlanActions.addDevPlan(this.state.devPlan));

    // alert(
    //   this.state.devPlan.title
    //     .concat(this.state.devPlan.description)
    //     .concat(this.state.devPlan.asignee)
    // );
  };

  handleCancel = () => {
    console.log("Cancel...");
    this.setState({ redirectToViewPage: true });
  };

  render() {
    const { redirectToViewPage } = this.state;

    return (
      <div>
        {redirectToViewPage && <Redirect to="/devPlans" />}
        <Grid container alignItems="center" style={{ flexGrow: 1 }}>
          <Grid item>
            <h2
              style={{
                paddingLeft: "20px",
                color: "rgba(73,155,234,1)"
              }}
            >
              Add Development Plan
            </h2>
          </Grid>
        </Grid>
        <Paper>
          <form noValidate autoComplete="off">
            <Grid
              container
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingBottom: "30px"
              }}
            >
              <Grid
                container
                alignItems="center"
                spacing={32}
                style={{ flexGrow: 1 }}
              >
                <Grid item sm={6}>
                  <TextField
                    id="title"
                    label="Title"
                    value={this.state.devPlan.title}
                    onChange={this.handleChange("title")}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    id="description"
                    label="Description"
                    value={this.state.devPlan.description}
                    onChange={this.handleChange("description")}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="asignee"
                    label="Asignee"
                    value={this.state.devPlan.asignee}
                    onChange={this.handleChange("asignee")}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="dueDate"
                    label="Due Date"
                    type="date"
                    value={this.state.devPlan.dueDate}
                    onChange={this.handleChange("dueDate")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <StatusDropdown />
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <CardActions>
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
                onClick={this.handleCancel}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </div>
    );
  }
}

function mapStateToProps(state: any, ownProps: any) {
  return {
    devPlans: state.devPlans
  };
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(AddDevPlan);
