import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: "100px"
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function ImageGridList(props) {
  const classes = useStyles();
    console.log(props)
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.titleData.map(tile => (
          <GridListTile key={tile.images.standard_resolution.url} cols={1}>
            <img src={tile.images.standard_resolution.url} alt={tile.images.standard_resolution.url} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}