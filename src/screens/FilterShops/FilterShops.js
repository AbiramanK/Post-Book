import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    makeStyles, 
    withStyles, 
    TextField,
    Button,
    Card,
    CardActions,
    CardContent
} from '@material-ui/core';

import {
    RTWarn
} from './../../utilities/NotificationUtilities/NotificationUtilities';
import {
    AppBar
} from './../../components';

class FilterShops extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pincode: 0,
        }

        this.SearchShops = this.SearchShops.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {  
        this.setState({
            [event.target.name]: event.target.value
        });  
    }

    SearchShops = () => {
        let pincode = this.state.pincode;
        if(pincode > 0) {
            this.props.history.push('/shops', {
                pincode
            })
        } else {
            RTWarn("Please enter pincode")
        }
    }

    render() {
        return (
            <div>
                <AppBar
                    history={this.props.history}
                />
                <center>
                    <Card style={styles.root}>
                        <div style={{ flexDirection: 'column' }} >
                            <CardContent>
                                <TextField 
                                    variant="filled" 
                                    placeholder="Search fav store by pincode"
                                    onChange={this.handleChange}
                                    name={`pincode`}
                                />
                            </CardContent>

                            <Button 
                                variant="outlined" 
                                size="medium" 
                                onClick={this.SearchShops} 
                            >
                                Search
                            </Button>
                        </div>
                    </Card>

                </center>
            </div>
        )
    }
}

const styles = {
    root: {
        minWidth: 275,
        maxWidth: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 275,
    }

}

export default FilterShops;