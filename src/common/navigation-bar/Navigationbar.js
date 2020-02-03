import React, { useEffect, useState } from 'react'
import './Navigationbar.css'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';


const Navigationbar = (props) => {
		const [imageSrc, setImageSrc] = useState("");
		const [isLoggedIn, setIsLoggedIn] = useState(false);
		const [showMenuList, setShowMenuList] =  useState(false);

		useEffect(() => {
			const sessionStorageData = JSON.parse(sessionStorage.getItem("selfData"));
			if (sessionStorageData !== null && sessionStorageData.data) {
				setImageSrc(sessionStorageData.data.profile_picture);
				setIsLoggedIn(true);
			}
		}, [window.sessionStorage]);

		return (
			<>
			<div className="navigation-bar">
				<h1>Image Viewer</h1>
				{isLoggedIn && <div className="search-container">
				<FormControl  variant="outlined" className="input-container-search">
          <OutlinedInput
						className="input-search"
            id="outlined-adornment-amount"
						placeholder="Search..."
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
          />
        </FormControl>
				<IconButton aria-label="user-profile-picture" onClick={() => setShowMenuList(!showMenuList)}><Avatar alt="Remy Sharp" className="avatar" src={imageSrc} /></IconButton>
				</div>}
			</div>
			{showMenuList && isLoggedIn && <ul className="menu-list">
				<li onClick={() => {
					window.location = "/profile";
				}}>My Account</li> 
				<hr />
				<li onClick={() => {
					sessionStorage.removeItem("selfData");
					sessionStorage.removeItem("selfMediaData");
					window.location = "/";
				}}>Log Out</li>
			</ul>}
			</>
		)
	}

export default Navigationbar;