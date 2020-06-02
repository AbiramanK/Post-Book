import React, { Component } from 'react';
import './Header.css'
import SpanButton from '../Drawer/SpanButton'
import Avatar, { ConfigProvider } from 'react-avatar'
import {
  Popover,
  Typography,
  Divider,
  List,
  ListItem,
  Button
} from '@material-ui/core';

import {
  logout
} from './../../../actions/AuthenticationAction/AuthenticationAction';
import {
  RTSuccess,
  RTError
} from './../../../utilities/NotificationUtilities/NotificationUtilities';


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      anchorEl: null
    }
  }
  // handleClickOpen = () => {
  //     this.setState({open:true});
  //   };
  handleClick = (event) => {
    this.setState({ anchorEl: event.target.value });
    this.setState({ open: true })
  };

  handleClose = (value) => {
    this.setState({ open: false });
    // setSelectedValue(value);
  };

  logout = () => {
    logout().then((res) => {
      RTSuccess(res.message);
      this.props.history.push("/")
    })
  }
  render() {
    return (
      <header className="appbar" >
        <nav className="navigation" >
          <div 
            className="show-hide-span"
            style={{
              marginLeft: 10
            }} 
          >
            <SpanButton 
              click={this.props.drawerClick} 
            />
          </div>

            <div 
              className="appbar_title" 
              style={{
                marginLeft: 20,
                display: 'flex',
                flex: 1,
                justifyContent: 'flex-end',
              }}
            >
              <a href="/" >PostBook</a>
            </div>

          <div className="spacer" />
          <div className="appbar_items" >
            <ConfigProvider colors={['red', 'green', 'blue']} >
              <Avatar 
                style={{ 
                  cursor: 'pointer' 
                }} 
                onClick={this.handleClick} 
                name={this.props.name} 
                round={30} 
                size="43" 
              />
            </ConfigProvider>
            <Popover
              id={1}
              open={this.state.open}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 55, left: 1330 }}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <List>
                {/* <ListItem>
                                      <Button style={styles.typography} placeholder="View Profile" ></Button>
                                    </ListItem> */}
                <ListItem>
                  <Button style={styles.typography} onClick={() => this.logout()} placeholder="Logout">Logout</Button>
                </ListItem>
              </List>
              {/* <Divider style={{width:"90%"}} /> */}
            </Popover>
          </div>
        </nav>
      </header>
    );
  }
}
const styles = {
  typography: {
    // padding: theme.spacing(2),
    margin: 2,
    width: '100%',
  },
  popover: {
  }
}
export default Header;