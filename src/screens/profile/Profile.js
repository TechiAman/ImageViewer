import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './Profile.css'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import EditModal from '../../common/edit-modal/EditModal'
import ImageListModal from '../../common/image-list/ImageListModal';

class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 selfData: "",
			 showModal: false,
			 fullName: ""
		}
		this.toggleEditModal = this.toggleEditModal.bind(this);
		this.updateUserName = this.updateUserName.bind(this);
	}
	

	componentDidMount() {
		const sessionStorageData = JSON.parse(sessionStorage.getItem("selfData"));
		const sessionStorageMediaData = JSON.parse(sessionStorage.getItem("selfMediaData"));
			if (sessionStorageData !== null && sessionStorageData.data) {
				this.setState({
					selfData: sessionStorageData.data,
					selfMediaData: sessionStorageMediaData.data
				})
			}
	}

	toggleEditModal() {
		this.setState({
			showModal: !this.state.showModal
		})
	}

	updateUserName(value) {
		this.setState({
			fullName: value
		})
	}

  render() {
		const fullName = this.state.fullName ? this.state.fullName : this.state.selfData.full_name;
    return (
      <>
        {this.state.selfData && Object.keys(this.state.selfData).length > 0 && <div className="user-profile">
					<div className="image">
						<IconButton aria-label="user-profile-picture" className="user-profile-picture">
							<Avatar alt="Remy Sharp" className="avatar" src={this.state.selfData.profile_picture} />
						</IconButton>
					</div>
					<div className="user-info">
						<div className="name-container">
							<Typography variant="h6"  component="h6">
								{this.state.selfData.username}
							</Typography>
						</div>
						<div className="post-container">
							<Typography variant="body2"  component="p">
									<strong>Posts: &nbsp;</strong>{this.state.selfData.counts.media}
							</Typography>
							<Typography variant="body2"  component="p">
								<strong>Follows: &nbsp;</strong>{this.state.selfData.counts.follows}
							</Typography>
							<Typography variant="body2"  component="p">
								<strong>Followed By: &nbsp;</strong>{this.state.selfData.counts.followed_by}
							</Typography>
						</div>
						<div className="full-name-container">
							<Typography variant="body2"  component="p">
								{fullName}
							</Typography>
							<Fab color="secondary" className="edit-label" aria-label="edit" onClick={this.toggleEditModal}>
								<EditIcon />
							</Fab>
						</div>
					</div>
					 {this.state.showModal && <EditModal open={this.state.showModal} updateUserName={this.updateUserName} toggleEditModal={this.toggleEditModal}/>}
				</div>
				}
				{this.state.selfMediaData &&  Object.keys(this.state.selfMediaData).length > 0 && <ImageListModal className="image-modal" titleData={this.state.selfMediaData}/>}
      </>
    )
  }
}

export default Profile
