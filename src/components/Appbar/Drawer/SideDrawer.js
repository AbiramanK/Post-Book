import React, { Component } from 'react';
import {
    logout
} from './../../../actions/AuthenticationAction/AuthenticationAction';
import './SideDrawer.css'
import { RTSuccess } from '../../../utilities/NotificationUtilities/NotificationUtilities';
import CloseIcon from '@material-ui/icons/Close';
import {
        IconButton,
        Typography,
        ListItem,
        List, 
        } from '@material-ui/core'

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'; 
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
 
class SideDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
    }}

    logout = () => {
        logout().then((res) => {
            RTSuccess(res.message);
            this.props.history.push("/")
        })
    }

    render() { 
        let drawerClass = 'side-drawer'
        if(this.props.show){
            drawerClass = 'side-drawer open'
        }
        return (
            <div>
            <nav className={drawerClass} >
                <div style={styles.drawerhead} >
                    <div style={{marginLeft: 20}}>
                        <Typography style={styles.title} >Post Book</Typography>
                    </div>
                    <div className='spacer'></div>
                    <div>
                        <IconButton  onClick={this.props.click} ><CloseIcon style={styles.closeicon} /></IconButton>
                    </div>
                </div>
                <div style={styles.listdiv} >
                    <List> 
                        <ListItem style={styles.listitem} >
                            <HomeOutlinedIcon fontSize='large' />
                            <Typography style={styles.drawerlist} >Home</Typography>
                        </ListItem> 
                        <ListItem style={styles.listitem} >
                            <BookmarkBorderIcon fontSize='large' />
                            <Typography style={styles.drawerlist} >Bookmarks</Typography>
                        </ListItem>
                        <ListItem style={styles.listitem} >
                            <MoreOutlinedIcon fontSize='large' />
                            <Typography style={styles.drawerlist} >More</Typography>
                        </ListItem>
                        <ListItem style={styles.listitem} >
                            <ExploreOutlinedIcon fontSize='large' /> 
                            <Typography style={styles.drawerlist} >Explore</Typography>
                        </ListItem>
                        <ListItem style={styles.listitem} >
                            <NotificationsNoneOutlinedIcon fontSize='large' /> 
                            <Typography style={styles.drawerlist} >Notification</Typography>
                        </ListItem>
                        <ListItem style={styles.listitem} >
                            <PersonOutlineIcon fontSize='large' />
                            <Typography style={styles.drawerlist} >Profile</Typography>
                        </ListItem>
                    </List>
                   
                </div>
            </nav>
        </div>
        );
    }
}
 
const styles={
    closeicon:{ 
        color:'white'
    },
    drawerhead:{
        display:'flex',
        backgroundColor:'#521751', 
        flexDirection:'row' ,
        height:'62px',
        alignItems: 'center',
    },
    title:{
        fontSize: 23,
        fontWeight:'bold',
        margin:5,
        color:'white', 
    },
    listitem:{
        
    },
    drawerlist:{
        marginLeft:10,
        fontSize:'20px', 
        cursor:'pointer'
    },
    listdiv:{
        // marginTop:10
    }
}
export default SideDrawer;