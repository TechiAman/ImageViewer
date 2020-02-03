import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import moment from 'moment'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import SvgIcon from '@material-ui/core/SvgIcon';
import './ImagePost.css'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  card: {
		flex: "0 40%",
    boxSizing:"border-box",
		padding: "20px",
		marginTop: "30px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
		width: "90%",
		margin: "0 auto" // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
	hr : {
		marginTop: "20px",
		width: "90%",
		margin: "0 auto"
	},
	tags: {
		color: "blue"
	}
}));

export default function ImagePost(props) {
  const classes = useStyles();
	const [userImage, setUserImage] = useState(props.userData ? props.userData.user.profile_picture : "")
	const [dateOfPost, setDateOfPost] = useState(props.userData ? moment(new Date(Number(`${props.userData.caption.created_time}000`))).format('YYYY-MM-DD HH:mm:ss') : "")
	const [imageUrl, setImageUrl] = useState(props.userData ? props.userData.images.standard_resolution.url : "")
	const [captionText, setCaptionText] = useState(props.userData ? props.userData.caption.text : "")
	const [likes, setLikes] = useState(props.userData ? props.userData.likes.count : "")
	const [tags, setTags] = useState(props.userData ? `#${props.userData.tags.join('#')}` : "")
	const [comments, setComments] = useState("")
	const [comment, setComment] = useState("")

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={userImage} />
        }
        title={props.userData ? props.userData.user.username : ""}
        subheader={dateOfPost}
      />
      {props.shouldShowImage && <CardMedia
        className={classes.media}
        image={imageUrl}
        title="Paella dish"
      />}
			<hr className={classes.hr}/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {captionText}
        </Typography>
			<Typography variant="body2"  component="p" className={classes.tags}>
          {tags}
        </Typography>
      </CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="delete" onClick={() => {
					if (props.userData.likes.count === likes) setLikes(likes + 1) 
					if (props.userData.likes.count !== likes) setLikes(likes - 1)
					}}>
					{props.userData.likes.count === likes && <SvgIcon>
						<path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
					</SvgIcon>}
					{props.userData.likes.count !== likes && <SvgIcon style={{ color: "red" }}>
						<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
					</SvgIcon>}
				</IconButton>
				<Typography variant="body2" color="textSecondary" component="p">
          {likes} Likes
        </Typography>
      </CardActions>
			{comments && <Typography variant="body2" color="textSecondary" className="comment" component="p">
				<strong>{props.userData.user.username}: </strong>{comments}
			</Typography>}
			<div className="add-comment-container">
				<FormControl className="addComment-form">
					<InputLabel htmlFor="addComment">Add Comment<sup>*</sup></InputLabel>
					<Input id="addComment" type="text" value={comment} name="addComment" onChange={(e) => setComment(e.target.value)} className="add-comment-input" />
				</FormControl>
				<Button type="submit" className="add-comment-button"  variant="contained" onClick={() => { 
					setComments(comment)
					setComment("")
				}}color="primary">Add</Button>
			</div>
    </Card>
  );
}