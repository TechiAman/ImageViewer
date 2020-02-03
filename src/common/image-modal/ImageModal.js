import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import ImagePost from '../image-post/ImagePost'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: "50%",
    margin: "0 auto",
    outline: "0"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "0"
  },
  editHeader: {
    marginLeft: "20px"
  },
  content: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    alignItems: "center",
    outline: "0"
  },
  image: {
    width: "300px",
    height: "300px",
    padding: "20px"
  },
  rightContainer: {
    width: "60%",
    height: "100%",
    padding: "20px"
  }
}));

export default function ImageModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.open || false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const handleClose = () => {
    setOpen(false);
    props.setShowImageModal(false);
  };
  console.log(props.tile);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className={classes.content}>
          <div className={classes.paper}>
            <div className={classes.imageContainer}>
              <img src={props.tile.images.standard_resolution.url} className={classes.image} alt={props.tile.images.standard_resolution.url} />
            </div>
            <div className={classes.rightContainer}>
              <ImagePost userData={props.tile} shouldShowImage={false}/>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}