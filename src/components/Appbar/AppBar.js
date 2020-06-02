import React, { Component } from 'react';
import Header from './Head/Header'
import SideDrawer from './Drawer/SideDrawer'
import BackDrop from './BackDrop/BackDrop'
class AppBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sideDrawer:false
        }
        this.backDropClickHandle = this.backDropClickHandle.bind(this);
    }
    
    drawerHandle = () =>{
        this.setState((prevState)=>{return{sideDrawer:!prevState.sideDrawer}})
    }
    backDropClickHandle = () =>{
        this.setState({sideDrawer:false})
    }
    render() { 
        let backdrop;
        if(this.state.sideDrawer){
            backdrop=<BackDrop click={this.backDropClickHandle} />
        }
        return (
            <div style={{height:'100%' , marginBottom:30}} >
                <Header 
                {...this.props}
                drawerClick = {this.drawerHandle} />
                {backdrop}
                <SideDrawer click={this.backDropClickHandle} show={this.state.sideDrawer} />
                }
            </div>
        );
    }
}
 
export default AppBar;