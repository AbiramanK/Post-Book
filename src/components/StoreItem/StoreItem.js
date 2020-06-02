import React, { Component } from 'react'
import {
    Dialog,
    ListItemText,
    ListItem,
    List,
    AppBar,
    Toolbar,
    IconButton,
    Slide,
    TextField,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Paper,
    Typography,
} from '@material-ui/core';
import Avatar, { ConfigProvider } from 'react-avatar'
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../../asserts/logo.png'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CommentIcon from '@material-ui/icons/Comment';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import GifIcon from '@material-ui/icons/Gif';

import {
    likes,
    dislikes,
    addComment,
    loadComments
} from './../../actions/PostAction/PostAction';
import {
    IMAGE_BASE
} from './../../configs/Configs';

const logo = require("./../../asserts/images/profile.png") ;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


class StoreItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            likecolor: '',
            dislikecolor: '',
            likecount: 0,
            dislikecount: 0,
            commentcount: 100,
            open: false,
            comments: this.props.comments,
            comment: '',
            sendShow: false
        }
    }

    componentDidMount = () => {
      this.initialLoad()
    };

    initialLoad = () => {
        this.setState({
            likecount: this.props.likes,
            dislikecount: this.props.dislikes,
            comments: this.props.comments
        })
    }
    

    onClick = () => {
        this.props.onClick(this.props.branchId)
    }
    handleClick = () => {
        this.loadComments()
        this.setState({ open: true });
    }
    handleClose = () => {
        this.loadComments()
        this.setState({ open: false });

    };
    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value 
        });
    };
    handeleCommentType = () => {
        this.setState({
            sendShow: true
        })
    }

    likes = () => {
        let likecount = (+this.state.likecount) + 1;
        this.setState({
            likecolor: '#0067f3',
            likecount
        })

        likes(this.props.postId)
    }

    dislikes = () => {
        let dislikecount = (+this.state.dislikecount) + 1;
        this.setState({
            dislikecolor: '#0067f3',
            dislikecount
        })
        dislikes(this.props.postId)
    }

    addComment = () => {
        addComment(this.props.postId, this.state.comment).then((res) => {
            this.loadComments()
        })
    }

    loadComments = () => {
        loadComments(this.props.postId).then((res) => {
            if(res.status == "success") {
                this.setState({
                    comments: res.data,
                    comment: ""
                })
            }
        })
    }

    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }} >
                <Grid container style={{width: "100%"}}>
                    <Card variant="outlined" square style={styles.paper}>
                        {/* <Grid container > */}
                        <Grid item  >
                            <img 
                                style={{ 
                                    width: 50, 
                                    height: 50, 
                                    borderRadius: 20, 
                                    marginLeft: 5 
                                }} 
                                src={logo} 
                                alt={"DP"} />
                        </Grid>
                        <Grid item>
                            <div  >
                                <div 
                                    style={{ 
                                        textAlign: 'left', 
                                        display: 'flex', 
                                        flexDirection: 'row', 
                                        alignItems: 'center', 
                                        height: 40 
                                    }}
                                >
                                    <Typography style={{
                                        fontWeight: 'bolder',
                                        fontSize: 20,
                                        marginLeft: 5
                                    }} 
                                    >
                                        {this.props.users.name}
                                    </Typography>
                                    <Typography style={{ 
                                        fontWeight: 'bolder', 
                                        fontSize: 20, 
                                        marginLeft: 5, 
                                        fontWeight: 'lighter',
                                        fontStyle: 'italic'
                                        }}>
                                            @{this.props.users.email}
                                        </Typography>
                                </div>
                                <div >
                                    <Typography style={{ 
                                            fontSize: 18, 
                                            marginTop: 5,
                                            textAlign: 'left' 
                                        }}
                                    >
                                        {this.props.message}
                                    </Typography>
                                    {/* {this.props.logo.toString() != "https://mrtoi.com/share-post-services/public/posts" && */}
                                    {this.props.type == "VIDEO" &&
                                        <video 
                                            autoplay  
                                            controls 
                                            inline
                                            style={{ 
                                                width: 500, 
                                                height: 300, 
                                                marginTop: 10 
                                            }}
                                        >
                                            <source alt={"No Video"} src={`${IMAGE_BASE}${this.props.logo}`}/>
                                        </video>
                                    }
                                    {this.props.type == "IMAGE" &&
                                        <img style={{ 
                                            width: 500, 
                                            height: 300, 
                                            marginTop: 10 
                                        }} 
                                        src={`${IMAGE_BASE}${this.props.logo}`} 
                                        alt={"No image"} 
                                    />
                                    }
                                </div>
                            </div>
                            {/* </Grid> */}
                            <CardActions style={{ display: 'flex', marginTop: 5 }} >
                                <ThumbUpIcon 
                                    onClick={() => this.likes()} 
                                    style={{ 
                                        cursor: 'pointer', 
                                        color: this.state.likecolor,
                                        marginRight: 5
                                    }} 
                                />
                                <Typography 
                                    style={{ 
                                       marginRight: 10 
                                    }} 
                                >
                                    {this.state.likecount}
                                </Typography>
                                <ThumbDownAltIcon 
                                    onClick={() => this.dislikes()} 
                                    style={{ 
                                        cursor: 'pointer', 
                                        color: this.state.dislikecolor 
                                    }} 
                                />
                                <Typography 
                                    style={{ 
                                         marginRight: 10
                                    }} 
                                >
                                    {this.state.dislikecount}
                                </Typography>
                                <CommentIcon onClick={this.handleClick} style={{ cursor: 'pointer' }} />
                                <Typography style={{ 
                                    marginRight: 10
                                 }} >{this.state.comments.length}</Typography>
                                <ShareIcon style={{ cursor: 'pointer' }} />
                            </CardActions>
                        </Grid>

                    </Card>
                </Grid>
                <Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
                    <AppBar style={{ position: 'relative' }} >
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography >Comments</Typography>
                        </Toolbar>
                    </AppBar>
                    <List>
                        {this.state.comments.map((val, ind) => (
                            <div>
                                <ListItem style={{ display: 'flex', textAlign: 'left' }} >
                                    <ConfigProvider colors={['red', 'green', 'blue']} >
                                        <Avatar name={val.user.name} round={20} size={30} ></Avatar>
                                    </ConfigProvider>
                                    <Typography style={{ fontWeight: 'bolder', fontSize: '12px', marginLeft: 5 }} >{val.user.name}</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>{val.comment}</Typography>
                                </ListItem>
                            </div>

                        ))
                        }
                        <ListItem style={{ display: 'flex', flexDirecrion: 'row' }} >
                            <IconButton edge="start" color="inherit"  ><CameraAltIcon style={{ marginRight: 3 }} /></IconButton>
                            <TextField value={this.state.comment} onChange={this.handleChange} name="comment" multiline={true} fullWidth placeholder="Add Comment..." ></TextField>
                            <IconButton edge="start" color="inherit"  ><GifIcon /></IconButton>
                            {
                                this.state.comment != '' ?
                                    <IconButton edge="start" color="inherit" onClick={() => this.addComment()}  ><SendIcon /></IconButton> :
                                    <IconButton edge="start" color="inherit"  ><SentimentSatisfiedOutlinedIcon /></IconButton>
                            }
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}


const styles = {
    otpInput: {
        backgroundColor: 'black',
        color: 'black'
    },
    divRoot: {

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    root: {
        flexGrow: 1,
        position: 'fixed'
    },
    paper: {
        textAlign: 'center',
        width: "100%",
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 15,
    }
}
export default StoreItem;