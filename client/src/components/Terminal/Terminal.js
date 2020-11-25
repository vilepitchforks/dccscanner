import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import Fab from "@material-ui/core/Fab";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";

import ReactTerminal from "react-terminal-component";

class TerminalFeed extends Component {
  render() {
    return (
      <div>
        <ReactTerminal />
      </div>
    );
  }
}

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  fab: {
    position: "absolute",
    bottom: "1vh",
    right: "1vw"
  }
});

const TemporaryDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={toggleDrawer("bottom", true)}
      >
        <DynamicFeedIcon />
      </Fab>
      <Drawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
      >
        <TerminalFeed />
      </Drawer>
    </div>
  );
};
export default TemporaryDrawer;
