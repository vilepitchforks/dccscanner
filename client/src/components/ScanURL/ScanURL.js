import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

import Stream from "../Stream/Stream.js";

import { useStyles } from "../../layouts/Default.js";

import { useScanURLContext } from "../../lib/context/scanURLContext.js";

import { processDb } from "../../lib/helpers/processDb.js";
import { urlRgx } from "../../lib/helpers/regex.js";

// Custom styles
const useCustomStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch"
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2)
    },
    "& .MuiFormHelperText-root": {
      color: "red"
    }
  },
  chipsPlaceholder: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    maxHeight: "75px",
    overflow: "auto",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  section1: {
    margin: theme.spacing(3, 2)
  },
  section2: {
    margin: theme.spacing(2)
  },
  section3: {
    margin: theme.spacing(3, 1, 1)
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
    display: "inline-block"
  },
  buttonProgress: {
    color: "green",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

const ScanURL = () => {
  const {
    domain,
    setDomain,
    err,
    setErr,
    category,
    setCategory,
    categories,
    setCategories,
    slugs,
    loading,
    getURLInfo
  } = useScanURLContext();

  const { dataEvents, scanCompleted } = useStoreState(state => state);

  const { addInfoEvent, addErrorEvent, setScanCompleted } = useStoreActions(
    actions => actions
  );

  const { startStream } = useStoreActions(actions => actions);

  const [slgClicked, setSlgClicked] = useState([]);

  // Global classes
  const classes = useStyles();

  // Custom classes
  const customClasses = useCustomStyles();

  // Handles URL scanning
  const handleScan = async e => {
    try {
      if (!urlRgx.test(domain)) throw new Error(`Invalid URL: ${domain}`);
      if (!categories.length) throw new Error("Add at least one category.");

      const query = `url=${domain}&categories=${categories.join()}`;

      startStream(query);
    } catch (error) {
      console.warn(error);
      setErr(error.message);
      setDomain("");
    }
  };

  // Handle db processing post scan
  useEffect(() => {
    (async () => {
      if (scanCompleted)
        await processDb(
          domain,
          dataEvents,
          addInfoEvent,
          addErrorEvent,
          setScanCompleted
        );
    })();
  }, [scanCompleted]);

  return (
    <Grid item xs={8}>
      <Paper className={classes.paper}>
        <form className={customClasses.root} noValidate autoComplete="on">
          <TextField
            value={domain}
            id="site-url"
            label="URL"
            variant="standard"
            helperText={err && err}
            onInput={e => {
              setDomain(e.target.value);
              setSlgClicked([]);
              setCategories([]);
            }}
            onBlur={() => getURLInfo()}
          />
          <TextField
            id="site-category"
            label="Category"
            variant="standard"
            value={category}
            onInput={e => setCategory(e.target.value)}
          />
          <div className={customClasses.wrapper}>
            <Button
              onClick={e => {
                e.preventDefault();
                category.length && setCategories(ctgs => [...ctgs, category]);
                setCategory("");
              }}
            >
              {loading ? "" : "Add"}
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                className={customClasses.buttonProgress}
              />
            )}
          </div>
        </form>
        {slugs.length ? (
          <div className={customClasses.section2}>
            <Typography gutterBottom variant="body1">
              Available categories:
            </Typography>
            <div className={customClasses.chipsPlaceholder}>
              {slugs.map((slug, i) => (
                <Chip
                  key={i}
                  className={customClasses.chip}
                  label={slug}
                  variant="outlined"
                  clickable
                  color={
                    slgClicked.findIndex(slgIndx => slgIndx === i) > -1
                      ? "primary"
                      : "secondary"
                  }
                  size="small"
                  // deleteIcon={<DoneIcon />}
                  // onDelete={handleDelete}
                  onClick={() => {
                    setCategories(ctgs => [...ctgs, slugs[i]]);
                    setSlgClicked(slgIndx => [...slgIndx, i]);
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {categories.length ? (
          <div className={customClasses.section2}>
            <Typography gutterBottom variant="body1">
              Selected categories:
            </Typography>
            <div className={customClasses.chipsPlaceholder}>
              {categories.map((ctg, i) => (
                <Chip
                  key={i}
                  className={customClasses.chip}
                  color={!i ? "primary" : "default"}
                  label={ctg}
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {categories.length ? (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleScan()}
          >
            Start scan
          </Button>
        ) : (
          ""
        )}

        <Stream />
      </Paper>
    </Grid>
  );
};

export default ScanURL;
