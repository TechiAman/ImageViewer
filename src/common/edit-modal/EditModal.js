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

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  editHeader: {
    marginLeft: "20px"
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.open || false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [fullName, setFullName] = React.useState("");

  const handleClose = () => {
    setOpen(false);
    props.toggleEditModal();
  };

  const handleUpdate = () => {
    if (!fullName) {
      setErrorMessage(true)
    }
     if (fullName) {
      setErrorMessage(false);
      props.updateUserName(fullName);
      setOpen(false);
      props.toggleEditModal();
    }
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Typography variant="h4" className={classes.editHeader} component="h4">
            Edit
          </Typography>
           <FormControl className="addComment-form">
            <InputLabel htmlFor="fullName">Full Name<sup>*</sup></InputLabel>
            <Input id="fullName" value={fullName} type="text" name="fullName" onChange={(e) => setFullName(e.target.value)} className="add-comment-input" />
            {errorMessage && <FormHelperText id="error">required</FormHelperText>}
          </FormControl>
          <Button type="submit" className="add-comment-button"  variant="contained" onClick={() => handleUpdate()}color="primary">Update</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}