import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';
import {  SearchOutlined } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './navbar.css'
import {useSelector,useDispatch} from 'react-redux'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { light } from '../../redux/Darkmode/action';
import modeReducer from './../../redux/Darkmode/reducer';

const Navbar = () => {

    const dispatch = useDispatch()
    const mode = useSelector((state)=>state.modeReducer.mode)

    return (
        <div className={ mode ? 'navbar dark' : 'navbar'}>
            <div className="left">
                <Link to="/" style={{textDecoration : "none"}}>
                    <span>Jwala</span>
                </Link>
                    <HomeIcon/>
                    {mode? <WbSunnyIcon onClick={()=>dispatch(light())}/> : <DarkModeIcon onClick={()=>dispatch(light())}/>}
                    <GridViewIcon/>

                    <div className="search">
                        <SearchOutlined style={{background : "transparent"}}/>
                        <input type="text" />
                    </div>
                
            </div>

            <div className="right">
                <PersonIcon/>
                <EmailIcon/>
                <NotificationsIcon/>

                <div className="user">
                    <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;