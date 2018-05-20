import React, { Component } from 'react'
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import logoLab from '../../img/loglab.gif';
import Wrong from '../../img/Wrong.gif';
import { Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import MsgError from '../Message/Msgerror'
import axios from 'axios'
import querystring from 'querystring';
import { Alert } from 'antd';
import jwtDecode from 'jwt-decode';
//import TextField  from '../../../node_modules/material-ui_2/TextField' 


import Slide from 'material-ui/transitions/Slide';
import Typography from 'material-ui';



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            Item: [],
            cap: '',
            open: false,
            messageAlert: '',
            visible: false,
        }

    }




    handleOpen = async (e) => {
        if (this.state.username === '' || this.state.password === '') {
            this.setState({
                visible: true,
                msgContent: 'กรอกข้อมูลไม่ครบ !!!'
            });
        } else {


            const user = {
                username: this.state.username,
                password: this.state.password
            }
            let pData = querystring.stringify(user);

            await axios.post(`http://localhost:4000/login`, pData)
                .then(res => {
                    let tstatus = res.data.status
                    //let tname = res.data.results[0].tname
                   // let username = res.data.results[0].username
                   //let tstatus = res.data.results[0].status
                   console.log(res.data)
                    if (tstatus === true) {

                        //localStorage.setItem('token', res.data.token)
                        this.props.history.push('/patient');

                    } else {
                        this.setState({
                            visible: true,
                            msgContent: 'username หรือ password ไม่ถูกต้อง !!!'
                        })
                    }
                })
        }



    };






    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value


        })
    }
    goHome = (e) => {

        if (this.state.username === 'demo' || this.state.password === 'demo') {


            // this.props.history.push('/')
            this.setState({
                open: false
            })

        } else {
            this.handleOpen();
        }
    }
    onClose = (e) => {
        this.setState({
            visible: false

        })
    }



    render() {


        const { fullScreen } = this.props;

        return (
            <div style={{ paddingTop: 40 }}>

                <Grid container spacing={24}>
                    <Grid item xs  >
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={4} >

                        {
                            this.state.visible ? (
                                <div>
                                    <Alert style={{ marginBottom: 10 }}
                                        message="ผิดพลาด"
                                        description={this.state.msgContent}
                                        type="error"
                                        closable
                                        onClose={this.onClose}

                                    />
                                </div>

                            ) : null
                        }

                    </Grid>
                    <Grid item xs  >
                    </Grid>
                </Grid>


                <Grid container spacing={24}>
                    <Grid item xs  >
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={4} style={{ background: '#ECEFF1' }}>

                        <br />
                        <Row center="xs">
                            <img src={logoLab} width="60" height='60' /><h2 style={{ color: '#454545' }}>เข้าสู่ระบบ cLab</h2>
                        </Row>
                        <Row center="xs">
                            <div style={{ width: '50%' }}>
                                <TextField
                                    name="username"
                                    label="Username"
                                    type="text"
                                    autoComplete="username"
                                    margin="normal"
                                    fullWidth
                                    onChange={this.onChange} value={this.state.username}
                                />
                            </div>

                        </Row>

                        <Row center="xs">
                            <div style={{ width: '50%' }}>
                                <TextField
                                    name="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="password"
                                    margin="normal"
                                    fullWidth
                                    onChange={this.onChange} value={this.state.password}
                                />
                            </div>


                        </Row>
                        <br /><br />
                        <Row center="xs">

                            <Button type='submit'
                                variant="raised"
                                style={{ background: '#00BCD4', color: '#FFFFFF', height: 10 }}
                                onClick={(e) => this.goHome(e)}  >
                                <Icon className="leftIcon" >done</Icon>
                                <div> ตกลง</div>

                            </Button>
                            <Button
                                variant="raised"
                                style={{ marginLeft: 40, background: '#FF4081', color: '#FFFFFF', height: 10 }}
                                onClick={(e) => this.goHome(e)}   >
                                <Icon className="leftIcon" >accessibility</Icon>
                                <div> สมัครสมาชิก</div>
                            </Button>

                        </Row>
                        <br /><br />
                    </Grid>
                    <Grid item xs   >

                    </Grid>
                </Grid>


            </div>


        )
    }
}
export default Login;