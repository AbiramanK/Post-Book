import React from "react";
import './Register.css'
import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Link
} from "@material-ui/core";
import Loader from 'react-loader-spinner';

import Pic from '../../../asserts/image.png'
import {
  register,
  setAuthToken
} from '../../../actions/AuthenticationAction/AuthenticationAction'
import {
  RTSuccess,
  RTError
} from '../../../utilities/NotificationUtilities/NotificationUtilities'

class Register extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      isLoading: false
    };
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = () => {
    this.setState({
      isLoading: true
    })
    register(this.state.name, this.state.email, this.state.password).then((res) => {
      if (res.status === "success") {
        RTSuccess("Your registered successfully!");
        setAuthToken(res.data.access_token);
        this.props.history.push("/home", {
          name: res.data.user.name
        });
      }
    })
      .catch((e) => {
        console.log("register error", e)
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })

  }


  render() {
    return (
      <div style={styles.root}>
        <Grid container style={styles.rootgrid} >
          <Grid item md={6} xs={12} style={styles.loginForm}>
            <center><img src={Pic} style={{ width: 60, height: 60, borderRadius: '30px' }} /> </center>
            <Grid style={{ display: 'flex', justifyContent: "center" }} container >
              <text className="reg-title" >Register</text>
            </Grid>
            <br />
            {/* <TextField
              required
              id="Fullname"
              type="text"
              label="Fullname"

              onChange={this.handleChange}
              margin="normal"
              variant="filled"
              style={styles.inputField}
              fullWidth
            /> */}

            <TextField
              required
              id="name"
              type="text"
              label="Name"
              name="name"
              onChange={this.handleChange}
              margin="normal"
              variant="filled"
              style={styles.inputField}
              fullWidth
            />
            <br />
            <TextField
              required
              id="Email"
              type="email"
              label="Email"
              name="email"
              onChange={this.handleChange}
              margin="normal"
              variant="filled"
              style={styles.inputField}
              fullWidth
            />
            <br />

            <TextField
              required
              id="password"
              type="password"
              label="Password"
              name="password"
              onChange={this.handleChange}
              margin="normal"
              variant="filled"
              style={styles.inputField}
              fullWidth
            />
            <br />
            <center>
              {!this.state.isLoading &&
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.loginButton}
                  onClick={this.onSubmit}
                >
                  Register
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

            <Divider style={styles.divider} />
            <center style={{ flexDirection: 'row' }} >
              <div style={{ flexDirection: 'row' }} >
                <div><Typography style={{ color: 'white' }} >Already have account?</Typography></div>
                <div><Link href="/" style={styles.forgotLink}>Login</Link></div>
              </div>
            </center>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const styles = {
  root: {
    // height: "40%",
    display: 'flex',
    // flexGrow:1,
    height: "100%",
    backgroundColor: '#29314c',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  rootgrid: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  loginForm: {
    padding: 15
  },
  colorBlue: {
    color: "#00519e",
    marginLeft: 5,
  },
  colorGrey: {
    color: "#7f8c8d",
    marginLeft: 5,
  },
  loginButton: {
    marginTop: 10
  },
  forgotLink: {
    color: "#7f8c8d",
    cursor: 'pointer'
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#4c4c4c'
  },
  assignmentIcon: {
    fontSize: 50,
    marginTop: 5,
    color: "#00519e"
  },
  inputField: {
    background: " #f3f6ff ",
  },
  titleStyle: {
    color: 'white',
    fontSize: '30px',
    fontFamily: 'Monospace',
    fontWeight: 'bolder',

  }
}
export default Register;
