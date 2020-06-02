import React, { Component } from 'react'

import {
    storeList
} from './../../actions/FechActions/FechActions';
import {
    getPosts,
    searchPosts
} from './../../actions/PostAction/PostAction';
import {
    RTSuccess,
    RTWarn,
    RTError
} from './../../utilities/NotificationUtilities/NotificationUtilities';
import {
    StoreItem,
    AppBar,
    FabAction,
    Contacts,
    Trending
} from './../../components';
import {
    Grid,
    Card
} from '@material-ui/core'
import Loader from 'react-loader-spinner';

const windowheight = window.innerHeight;
class Shops extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storeList: [] , 
            posts:[],
            isLoading: true
        };
        this.selecteBranch = this.selecteBranch.bind(this);
        this.initialLoad = this.initialLoad.bind(this);
        this.searchPost = this.searchPost.bind(this);
    };


    componentDidMount = () => {
        setTimeout(() => {
            this.initialLoad()
        }, 1000);
    };

    showLoader = () => {
        this.setState({
            isLoading: true
        })
    }

    hideLoader = () => {
        this.setState({
            isLoading: false
        })
    }

    initialLoad = () => {
        this.showLoader()
        getPosts().then((res)=>{
            if(res.status = "success") {
                console.log("posts", res.data[0])
                this.setState({
                    posts: res.data
                })
            }
        })
        .finally(() => {
            this.hideLoader()
        })
    }

    selecteBranch = (branchId) => {
        let formData = new FormData();

        formData.append("branch_id", branchId);
        formData.append("page_no", 0);
        formData.append("limit", 10);

        this.props.history.push("/products", {
            branch: formData
        })
    }
    
    searchPost = (search) => {
        if(search == "") {
            this.initialLoad()
        } else {
            this.showLoader()
            searchPosts(search).then((res) => {
                if(res.status == "success") {
                    this.setState({
                        posts: res.data
                    })
                }
            })
            .finally(() => {
                this.hideLoader()
            })
        }
    }


    render() {
        return (
            <div>
            <AppBar
                history={this.props.history}
                backArrowVisible
                name={this.props.location.state.name}
            />
            <Grid container xs={12} >
                <Grid style={styles.followscroll} xs={3} item > 
                    <Contacts/>
                </Grid>
                <Grid xs={6}  item >
                    <Card style={styles.root} variant="outlined">
                        <div>
                            <div style={{display:'flex' , width:'100%' , justifyContent:'center'}}  >
                                <div>
                                        <Loader
                                            style={{marginTop: 50}}
                                            type="Circles"
                                            visible={this.state.isLoading}
                                            color="#00BFFF"
                                            height={60}
                                            width={60}
                                        />
                                    {(!this.state.isLoading && this.state.posts.length > 0) && this.state.posts.map((items, index) => {
                                                return (
                                                <div>
                                                    <StoreItem
                                                        key={index}
                                                        // name={res.users.name}
                                                        // branchId={items.branch_id}
                                                        // phone={res.users.email}
                                                        postId={items.id}
                                                        likes={items.likes}
                                                        dislikes={items.dislikes}
                                                        type={items.type}
                                                        logo={items.url} 
                                                        users={items.users}
                                                        message={items.message}
                                                        amount={items.maximum_order_value}
                                                        onClick={this.selecteBranch}
                                                        comments={items.comments}
                                                    /> 
                                                </div>
                                                )
                                        })
                                        } 
                                    </div>
                                </div>
                        </div>
                    </Card>
                </Grid>
                <Grid xs={3} style={styles.rightscroll} xs item >
                    <Card variant="outlined" >
                        <Trending
                            search={this.searchPost}
                        />
                    </Card>
                </Grid>
            </Grid>
            <FabAction
                onLoad={this.initialLoad}
            />
        </div>

        )
    }
}

const styles = {
    root:{
        display:'flex',
        justifyContent: 'center',
        height:windowheight-62,
        overflowY:'scroll' 
    }, 
    rightscroll:{
        height:windowheight-62,
        overflowY:'scroll' , 
    },
    followscroll:{ 
        height:windowheight-62,
        overflowY:'scroll' 
    }

}


export default Shops
