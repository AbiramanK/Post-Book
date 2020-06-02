import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import PhotoIcon from '@material-ui/icons/Photo';
import CloseIcon from '@material-ui/icons/Close';
import ImageUploader from 'react-images-upload';
import {
    Dialog,
    ListItemText,
    ListItem,
    List,
    AppBar,
    Toolbar,
    IconButton,
    Slide,
    Typography,
    TextField,
    Fab,
    Button
} from '@material-ui/core';
import Loader from 'react-loader-spinner'
import './FabAction.css'
import {
    createPosts
} from './../../actions/PostAction/PostAction';
import { RTSuccess } from '../../utilities/NotificationUtilities/NotificationUtilities';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
class FabAction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showstate: 'none',
            addIcon: true,
            openText: false,
            openPhoto: 'none',
            showImage: false,
            pictures: null,
            comment: '',
            type: '',
            isLoading: false
        }
        this.onDrop = this.onDrop.bind(this);
    }
    handleClickOpen = () => {
        this.setState({ openText: true, showstate: 'none', addIcon: !this.state.addIcon });
    };

    handlePhotoClick = () => {
        this.setState({ openText: true, showstate: 'none', addIcon: !this.state.addIcon, openPhoto: 'flex' });
    }
    handleClose = () => {
        this.setState({ openText: false, openPhoto: 'none' });

    };
    onDrop(picture) {
        let picType = picture.target.files[0].type.split("/")[0];
        console.log("pic details", picture.target.files[0])
        let type = "IMAGE";
        if (picType == "video") {
            type = "VIDEO";
        }

        this.setState({
            pictures: picture.target.files,
            showImage: true,
            openPhoto: false,
            label: false,
            icon: false,
            display: 'none',
            type
        });
    }

    handleChange = (event) => {
        console.log("event", event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
        const data = {
            pic: this.state.pictures,
            comment: this.state.Comment
        }
        this.createPost()
    }

    createPost = () => {

        let formData = new FormData();
        formData.append("message", this.state.comment)

        if (this.state.type == "IMAGE" || this.state.type == "VIDEO") {
            let picture = this.state.pictures[0]
            let reader = new FileReader();
            reader.onload = (e) => {
                formData.append("image", picture);
                formData.append("type", this.state.type)
                this.sendPost(formData)
            };
            reader.readAsDataURL(picture);
        } else {
            this.sendPost(formData)
        }
    }

    sendPost = (formData) => {
        this.setState({
            isLoading: true
        })
        createPosts(formData).then((res) => {
            if (res.status == "success") {
                RTSuccess(res.message)
            }
        })
            .finally(() => {
                this.setState({
                    type: "",
                    pictures: "",
                    openText: false,
                    isLoading: false
                })
                this.props.onLoad()
            })
    }

    render() {

        return (
            <div className="fab-place"  >
                {this.state.addIcon === true ?
                    <Fab onClick={() => this.setState({ showstate: 'flex', addIcon: !this.state.addIcon })} className="add-icon" color="primary" aria-label="add" >
                        <AddIcon />
                    </Fab> :
                    <Fab onClick={() => this.setState({ showstate: 'none', addIcon: !this.state.addIcon })} className="add-icon" color="primary" aria-label="close" >
                        <CloseIcon />
                    </Fab>
                }
                <Fab onClick={this.handleClickOpen} className="edit-icon" style={{ display: this.state.showstate, backgroundColor: '#60c46f' }} aria-label="edit" >
                    <EditIcon style={{ color: 'white' }} />
                </Fab>
                <Fab onClick={this.handlePhotoClick} className="photo-icon" style={{ display: this.state.showstate }} color="secondary" aria-label="photo" >
                    <PhotoIcon />
                </Fab>
                <Dialog fullScreen open={this.state.openText} onClose={this.handleClose} TransitionComponent={Transition}>
                    <AppBar style={{ position: 'relative' }} >
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem>
                            <input
                                type={"file"}
                                style={{ display: this.state.openPhoto }}
                                onChange={this.onDrop}
                            />
                            {/* <ImageUploader
                                style={{ display: this.state.openPhoto }}
                                withIcon={false}
                                buttonText='Choose image'
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                                singleImage={true}
                                withLabel={false}
                                buttonStyle={{ display: 'flex' }}
                                withPreview={true}
                            /> */}
                        </ListItem>

                        <ListItem >
                            <TextField multiline={true} name={'comment'} onChange={this.handleChange} fullWidth placeholder="Add Comment to post" ></TextField>
                        </ListItem>
                        <center>
                            {!this.state.isLoading &&
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: 10 }}
                                    onClick={this.handleSubmit}
                                >
                                    POST
                            </Button>
                            }
                            <Loader
                                type="Circles"
                                visible={this.state.isLoading}
                                color="#00BFFF"
                                height={35}
                                width={35}
                            />
                        </center>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default FabAction;