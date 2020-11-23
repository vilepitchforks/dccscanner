import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "../../layouts/Default.js";

import { useScanURLContext } from "../../lib/context/scanURLContext.js";

const useCustomStyles = makeStyles(theme => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: "10px"
  }
}));

const WebsiteCard = () => {
  const {
    metadata: { icon, url, image, title, description, provider }
  } = useScanURLContext();

  // Global classes
  const classes = useStyles();

  // Custom classes
  const customClasses = useCustomStyles();

  return (
    <Grid item xs={4}>
      <Card>
        <CardActionArea>
          {image && <CardMedia component="img" image={image} title={title} />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(url)}>
            <Avatar alt={title} src={icon} className={customClasses.small} />
            {provider ? "Visit " + provider.replace(" ", ".") : ""}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default WebsiteCard;
