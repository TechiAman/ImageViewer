import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withRouter } from "react-router-dom";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import './Login.css';

const userCredentials = {
	username: "user",
	password: "password"
}

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			showRequiredUserName: false,
			showRequiredPassword: false
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount() {
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			showRequiredUserName: false,
			showRequiredPassword: false
		})
	}

	handleFormSubmit(e) {
		e.preventDefault();
		if (!this.state.username) {
			this.setState({
				showRequiredUserName: true
			})
		}
		if (!this.state.password) {
			this.setState({
				showRequiredPassword: true
			})
		}
		if (this.state.password && this.state.username) {
			if (this.state.username === userCredentials.username && this.state.password === userCredentials.password) {
				this.props.history.push("/home");
			} else {
				this.setState({
					errorMessage: "Incorrect username and/or password"
				})
			}
		}
	}

	render() {
		return (
			<>
				<Card variant="outlined" className="card-main-login">
				<CardContent>
					<Typography color="textPrimary" gutterBottom variant="h3">
						LOGIN
					</Typography>
					<form ref="form" className="form">
						<FormControl>
							<InputLabel htmlFor="username">Username<sup>*</sup></InputLabel>
							<Input id="username" type="text" name="username" className="input-container-login" onChange={this.handleInputChange}/>
							{this.state.showRequiredUserName && <FormHelperText id="error">required</FormHelperText>}
						</FormControl>
						<FormControl>
							<InputLabel htmlFor="password">Password<sup>*</sup></InputLabel>
							<Input id="password" type="password" name="password" className="input-container-login" onChange={this.handleInputChange}/>
							{this.state.showRequiredPassword && <FormHelperText id="error">required</FormHelperText>}
						</FormControl>
						{this.state.errorMessage && <p id="error">{this.state.errorMessage}</p>}
						<Button type="submit" className="login-btn" onClick={this.handleFormSubmit} variant="contained" color="primary">Login</Button>
					</form>
				</CardContent>
				</Card>
			</>
		)
	}
}

export default withRouter(Login);
