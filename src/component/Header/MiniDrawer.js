import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ImgDr from '../Drawer/ImgDr';
import LayDr from '../Drawer/LayDr'

//  Route
import Routing from '../../Routes'

import Icon from 'material-ui/Icon';
import DesktopMac from 'material-ui-icons/DesktopMac'

import Menu, { MenuItem } from 'material-ui/Menu';
import Fade from 'material-ui/transitions/Fade';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;



const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    fontList:{
        color:'#6C6C6C'
    },
    hide: {
        display: 'none',
    },
    drawerTop: {
        paddingTop: 10
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class MiniDrawer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            anchorEl: null,
        }

    }


    handleClickR = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleCloseR = () => {
        this.setState({ anchorEl: null });
    };





    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        const { anchorEl } = this.state;

        const Logged = (props) => (
            <div>
                <Button
                    aria-owns={anchorEl ? 'fade-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >   
                :
                </Button>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleCloseR}
                        transition={Fade}
                    >
                        <MenuItem onClick={this.handleCloseR}>Profile</MenuItem>
                        <MenuItem onClick={this.handleCloseR}>My account</MenuItem>
                        <MenuItem onClick={this.handleCloseR}>Logout</MenuItem>
                    </Menu>
            </div>
                );
        
                return (
            <div className={classes.root}>
                    <AppBar
                        style={{ backgroundColor: '#3BC0C3' }}
                        position="absolute"
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                        
                    >
                        <Toolbar disableGutters={!this.state.open}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.state.open ? this.handleDrawerClose : this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap>
                                <p style={{ fontSize:18}}>cLab</p>
                            </Typography>

                           
                        </Toolbar>

                    </AppBar>
                    <Drawer

                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        variant="permanent"
                        open={this.state.open}
                    >
                        {this.state.open ? <ImgDr /> : <LayDr />}


                        <Divider />
                        <List>
                            <div>
                                <ListItem button component={Link} to='/home' >
                                    <ListItemIcon>
                                        <DesktopMac />
                                    </ListItemIcon>
                                    <ListItemText>
                                        {this.state.open ? <div className={classNames(classes.fontList)}>หน้าหลัก</div> : <div></div>}
                                    </ListItemText>
                                </ListItem>
                                <ListItem button component={Link} to='/patient'>
                                    <ListItemIcon>
                                        <Icon>face</Icon>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {this.state.open ? <div className={classNames(classes.fontList)}>ลงทะเบียนใหม่</div> : <div></div>}
                                    </ListItemText>
                                </ListItem>
                                <ListItem button component={Link} to='/ovst'>
                                    <ListItemIcon>
                                        <Icon>send</Icon>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {this.state.open ? <div className={classNames(classes.fontList)}>ส่งตรวจ</div> : <div></div>}
                                    </ListItemText>
                                </ListItem>

                                <ListItem button component={Link} to='/addlab'>
                                    <ListItemIcon>
                                        <Icon> opacity</Icon>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {this.state.open ? <div className={classNames(classes.fontList)}>บันทึกผลการตรวจ</div> : <div></div>}

                                    </ListItemText>
                                </ListItem>

                                <ListItem button component={Link} to='/login'>
                                    <ListItemIcon>
                                        <Icon> move_to_inbox</Icon>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {this.state.open ? <div className={classNames(classes.fontList)}>เข้าสู่ระบบ</div> : <div></div>}

                                    </ListItemText>
                                </ListItem>


                            </div>




                        </List>

                    </Drawer >
                    <main className={classes.content}>
                        <div className={classes.toolbar} />


                       <Routing />
    
                </main>
                </div >
                );
            }
        }
        
MiniDrawer.propTypes = {
                    classes: PropTypes.object.isRequired,
                theme: PropTypes.object.isRequired,
            };
            
export default withStyles(styles, {withTheme: true })(MiniDrawer);