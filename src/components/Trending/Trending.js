import React, { Component } from 'react';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../asserts/logo.png'
import hashtag from '../../asserts/images/hashtag.png'
import covid from '../../asserts/images/covid.jpeg'
import cricket from '../../asserts/images/cricket.jpeg'
import football from '../../asserts/images/football.jpeg' 
import './Trending.css'
import {
    TextField,
    InputAdornment,
    Paper,
    Card,
    CardContent,
    Typography,
    AppBar,
    InputBase,
    Toolbar
} from '@material-ui/core'
class Trending extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [{
                'title': 'covid19',
                'content': 'its very aggressive and cant imagine .',
                'image': covid,
                'live': 'LIVE'
            },
            {
                'title': 'cricket',
                'content': 'its very aggressive and cant imagine .',
                'image': cricket,
                'live': 'LIVE'

            },
            {
                'title': 'football',
                'content': 'its very aggressive and cant imagine .',
                'image': football,
                'live': 'LIVE'

            },
            ],
            hashtags: [{
                'title': '#covid19',
                'content': 'its very aggressive and cant imagine .',
                'reviews': '24.2K',
                'image': covid,

            },
            {
                'title': '#cricket',
                'content': 'its very aggressive and cant imagine .',
                'reviews': '14.2K',
                'image': cricket,

            },
            {
                'title': '#football',
                'content': 'its very aggressive and cant imagine .',
                'reviews': '144.2K',
                'image': football,

            },
            ],
            search: ''
        }
    }

    handleInput = (event) => {
        this.props.search(event.target.value);
    }

    render() {
        return (
            <div style={styles.root} > 
                <div 
                    style={{
                        height: 80, 
                        backgroundColor: '#ffff',
                    }}
                >
                  <div style={styles.drawerhead} >
                        <div style={{marginLeft: 10}}>
                            <TextField
                                variant='outlined'
                                style={styles.search}
                                id="input-with-icon-textfield"
                                // label="TextField"
                                placeholder="Search"
                                onChange={this.handleInput}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <SearchIcon />
                                    </InputAdornment>
                                ),
                                }}
                            />
                        </div>  
                    </div>
                    </div>
                <div style={styles.header} >
                    <Card variant="outlined" >
                        <CardContent>
                            <div style={styles.head} >
                                <WhatshotIcon />
                                <Typography style={styles.trend} >Trending</Typography>
                            </div>
                        </CardContent>
                    </Card>
                    {
                        this.state.data.map((items, ind) => {
                            return (
                                <Card style={styles.insidecard} variant="outlined" >
                                    <div style={styles.cardcontent} >
                                        <div style={styles.headtitle} >
                                            <Typography style={{ fontWeight: 'bolder' }} >{items.title}</Typography>
                                            <Typography style={styles.live} >.{items.live}</Typography>
                                        </div>
                                        <Typography style={styles.content} >{items.content}</Typography>
                                    </div>
                                    <div>
                                        <img src={items.image} alt={items.image} style={styles.logo} />
                                    </div>

                                </Card>
                            )
                        })
                    }
                    <div style={styles.hashtagdiv} >
                        <Card variant="outlined" >
                            <CardContent>
                                <div style={styles.head} >
                                    <img src={hashtag} style={styles.hashtag} ></img>
                                    <Typography style={styles.trend} >Hashtags</Typography>
                                </div>
                            </CardContent>
                        </Card>
                        {
                            this.state.hashtags.map((items, ind) => {
                                return (
                                    <Card style={styles.insidecard} variant="outlined" >
                                        <div style={styles.cardcontent} >
                                            <div style={styles.headtitle} >
                                                <Typography style={{ fontWeight: 'bolder' }} >{items.title}</Typography>
                                            </div>
                                            <Typography style={styles.content} >{items.content}</Typography>
                                            <Typography style={styles.live} >{items.reviews} Reviews</Typography>

                                        </div>
                                        <div>
                                            <img src={items.image} alt={logo} style={styles.logo} />
                                        </div>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    root:{
        display:'flex',
        flexDirection: 'column',
        margin: 10
    },
    search: {
        borderRadius: '50px',
        margin: 20
    },
    trend: {
        fontWeight: 'bolder',
        marginLeft: 7
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
    },
    insidecard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: '5px',
        marginRight: 5
    },
    live: {
        fontWeight: 'inherit',
        marginLeft: 6
    },
    content: {
        fontFamily: ''
    },
    headtitle: {
        display: 'flex',
        flexDirection: 'row',
        margin: 3
    },
    hashtagdiv: {
        marginTop: 10
    },
    hashtag: {
        width: '23px',
        height: '23px'
    },
    cardcontent:{
        margin:5
    },
    header:{ 
        marginTop: 10
    },
    drawerhead:{
        display:'flex',
        backgroundColor:'#ffff', 
        position:'fixed',
        top: 62,
        padding: 10,
        flexDirection:'row' ,
        width: '100%',
        height:'62px',
        alignItems: 'center',
         
    },
    searchIcon: { 
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      search: {
        position: 'relative',
        marginLeft: 0,
        width: '100%',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {   
        width: '100%',
      },
}
export default Trending;