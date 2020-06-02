import React, { Component } from 'react'
import {
  makeStyles,
  withStyles,
  TextField,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
  // withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types'
import Logo from '../../asserts/logo.png'

class ProductItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
    this.addProducts = this.addProducts.bind(this);
    this.minusProducts = this.minusProducts.bind(this);
  }

  componentDidMount = () => {
    if (this.props.cartsCount != undefined) {
      this.setState({
        count: this.props.cartsCount
      })
    }
  };


  addProducts = () => {
    this.setState({ count: this.state.count + 1 })
    this.props.addProducts(this.props.item)
  }

  minusProducts = () => {
    if(this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
      this.props.minusProducts(this.props.item)
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >

        <Grid container >
          <Grid item >
            <Paper className={classes.paper}>
              <img style={{ width: '100%', height: '100%' }} src={this.props.img === null ? Logo : this.props.img} />
              <div style={{ flexDirection: 'row', display: 'flex' }} >
              </div>

              <Typography>{this.props.productName}</Typography>
              <Typography>{this.props.count}</Typography>
              <Typography>ID :{this.props.id}</Typography>

              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'center' 
                  }}
              >
                <div style={{ flexDirection: 'row', display: 'flex' }} >
                <button style={{ margin: 2, height: 25, backgroundColor: '#28a745', color: 'white', fontSize: 15, fontWeight: 'bold', borderColor: "#28a745" }} onClick={() => this.minusProducts()}>-</button>
                  <input disabled={true} style={{ width: 50, margin: 2, textAlign :'center' }} value={this.state.count} onChange={this.handleChange} />
                  <button style={{ margin: 2, height: 25, backgroundColor: '#28a745', color: 'white', fontSize: 15, fontWeight: 'bold', borderColor: "#28a745" }} onClick={() => {
                    this.addProducts()
                  }}>+</button>
                </div>
              </div>

            </Paper>

          </Grid>
        </Grid>


      </div>
    )
  }
}

const usestyles = theme => ({
  otpInput: {
    backgroundColor: 'black',
    color: 'black'
  },
  divRoot: {

  },
  // root: {
  //     minWidth: 275,
  //     maxWidth:300 ,
  //     display:'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     minHeight: 275, 
  //   },
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
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidht: 250,
    minWidth: 200,
    margin: 10
  },

})
ProductItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(usestyles)(ProductItem);
