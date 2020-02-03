import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ImageModal from '../image-modal/ImageModal'
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
  const [showImageModal, setShowImageModal] = useState(false);
	const [tile, setTileData] = useState(false);
	console.log(showImageModal)

  return (
    <>
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.titleData.map(tile => (
          <GridListTile key={tile.images.standard_resolution.url} cols={1} onClick={() => { setShowImageModal(true); setTileData(tile)}}>
            <img src={tile.images.standard_resolution.url} alt={tile.images.standard_resolution.url} />
          </GridListTile>
        ))}
      </GridList>
    </div>
			{showImageModal && <ImageModal open={showImageModal} tile={tile} setShowImageModal={setShowImageModal}/>}
    </>
  );
}