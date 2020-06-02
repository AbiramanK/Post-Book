import React, { Component } from 'react';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../asserts/logo.png'
import profile from '../../asserts/images/profile.png'
 
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import {
    TextField,
    InputAdornment,
    Paper,
    Card,
    CardContent,
    Typography
} from '@material-ui/core'
class Contacts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             contacts:[
                 {
                     'name':'Aanand',
                     'uname':'amdd',
                     'pic':profile
                 },
                 {
                    'name':'Magesh',
                    'uname':'mgmmm',
                    'pic':profile
                },
                {
                    'name':'Gopal',
                    'uname':'gopi200',
                    'pic':profile
                },
                {
                    'name':'Prem',
                    'uname':'prm2000',
                    'pic':profile
                }, 
                {
                    'name':'Aanand',
                    'uname':'amdd',
                    'pic':profile
                },
                {
                   'name':'Magesh',
                   'uname':'mgmmm',
                   'pic':profile
               },
               {
                   'name':'Gopal',
                   'uname':'gopi200',
                   'pic':profile
               },
               {
                   'name':'Prem',
                   'uname':'prm2000',
                   'pic':profile
               }, {
                'name':'Aanand',
                'uname':'amdd',
                'pic':profile
            },
            {
               'name':'Magesh',
               'uname':'mgmmm',
               'pic':profile
           },
           {
               'name':'Gopal',
               'uname':'gopi200',
               'pic':profile
           },
           {
               'name':'Prem',
               'uname':'prm2000',
               'pic':profile
           }, 
             ]
        }
    }
    
    render() { 
        return (
            <div> 
                <div style={styles.hashtagdiv} >
                        <Card variant="outlined" style={{margin: 10, marginTop: 20}}>
                            <CardContent>
                                <div style={styles.head} > 
                                    <RecentActorsIcon/>
                                    <Typography style={styles.trend} >Contacts</Typography>
                                </div>
                            </CardContent>
                        </Card>
                        {
                            this.state.contacts.map((items , ind)=>{
                                return( 
                                     <Card style={styles.insidecard} variant="outlined" >
                                         <div>
                                             <img src={items.pic} alt={logo} style={styles.logo} />
                                         </div>
                                         <div  style={styles.cardcontent} >
                                             <div style={styles.headtitle} >
                                                 <Typography style={{fontWeight:'bolder'}} >{items.name}</Typography> 
                                             </div>
                                             <Typography style={{fontWeight:'inherit'}} >@{items.uname}</Typography> 
                                         </div>
                                         
                                     </Card> 
                                )
                            })
                        }
                    </div>
            </div>
        );
    }
}
 
const styles = {
    root:{
        // display:'flex'
    },
    search:{
        borderRadius:'50px',
        margin:20
    },
    trend:{
        fontWeight:'bolder',
        marginLeft:7
    },
    head:{
        display:'flex',
        flexDirection: 'row',
    },
    insidecard:{
        display:'flex',
        flexDirection: 'row',
        margin: 10,
        padding: 5,
    },
    logo:{
        width:60,
        height:60,
        borderRadius:'20px'
    },
    live:{
        fontWeight:'lighter',
        marginLeft:6
    },
    content:{
        fontFamily:''
    },
    headtitle:{
        display:'flex',
        flexDirection: 'row',
        margin:3
    },
    hashtagdiv:{
        marginTop:10,
    },
    hashtag:{
        width:'23px',
        height:'23px'
    },
    cardcontent:{
        margin:5
    }
}
export default Contacts;