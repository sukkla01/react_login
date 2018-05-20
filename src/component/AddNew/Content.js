import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import MenuItem from 'material-ui/Menu/MenuItem';

const ranges = [
    {
        value: '1',
        label: 'นาย',
    },
    {
        value: '2',
        label: 'นาง',
    },
    {
        value: '3',
        label: 'นางสาว',
    },
];

class Content extends Component {



    render() {

        return (

            <Grid container spacing={24} >

                <Grid item xs={12} sm={3} md={2} >
                    <div >


                        <TextField
                            name="pname"
                            select
                            label="คำนำหน้า"
                            //className={classNames(classes.margin, classes.textField)}
                            value=''
                            //onChange={this.handleChange('weightRange')}

                            fullWidth
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                </Grid>
                <Grid item xs={12} sm={5} md={5}>
                    <div >


                        <TextField
                            label="ชื่อ"
                            id="fname"
                            //className={classNames(classes.margin, classes.textField)}
                            fullWidth

                        />

                    </div>
                </Grid>
                <Grid item xs={12} sm={5} md={5}>
                    <div >


                        <TextField
                            label="สกุล"
                            id="lname"
                            //className={classNames(classes.margin, classes.textField)}
                            fullWidth

                        />

                    </div>
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                    <div >


                        <TextField
                            name="sex"
                            select
                            label="เพศ"
                            //className={classNames(classes.margin, classes.textField)}
                            value=''
                            //onChange={this.handleChange('weightRange')}

                            fullWidth
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <div >


                        <TextField
                            label="เลขบัตรประจำตัวประชาชน"
                            id="cid"
                            //className={classNames(classes.margin, classes.textField)}
                            fullWidth

                        />

                    </div>
                </Grid>


                <Grid item xs={12} sm={2} md={2} >
                    <div >


                        <TextField
                            label="วันเกิด"
                            id="brith"
                            //className={classNames(classes.margin, classes.textField)}
                            fullWidth

                        />

                    </div>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <div >


                        <TextField
                            name="nation1"
                            select
                            label="เชื่้อชาต"
                            //className={classNames(classes.margin, classes.textField)}
                            value=''
                            //onChange={this.handleChange('weightRange')}

                            fullWidth
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                </Grid>
                <Grid item xs={12} sm={2} md={2}>
                    <div >


                        <TextField
                            name="nation2"
                            select
                            label="สัญชาติ"
                            //className={classNames(classes.margin, classes.textField)}
                            value=''
                            //onChange={this.handleChange('weightRange')}

                            fullWidth
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                </Grid>
                <Grid item xs={12} sm={2} md={2}>
                    <div >


                        <TextField
                            name="address"
                            label="เลขที่"
                            //className={classNames(classes.margin, classes.textField)}
                            value=''
                            //onChange={this.handleChange('weightRange')}

                            fullWidth
                        >

                        </TextField>

                    </div>
                </Grid>

                <Grid item xs={12} sm={1} md={1}>
                    <div >


                        <TextField
                            name="moo"
                            select
                            label="หมู่"
                            //className={classNames(classes.margin, classes.textField)}
                            value=''
                            //onChange={this.handleChange('weightRange')}

                            fullWidth
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <div >


                        <TextField
                            name="chwpart"
                            select
                            label="จังหวัด"
                            //className={classNames(classes.margin, classes.textField)}
                            value=''
                            //onChange={this.handleChange('weightRange')}

                            fullWidth
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                </Grid>

                 <Grid item xs={12} sm={3} md={3}>
                    <div >


                        <TextField
                            name="amppart"
                            select
                            label="อำเภอ"
                            //className={classNames(classes.margin, classes.textField)}
                            value=''
                            //onChange={this.handleChange('weightRange')}

                            fullWidth
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <div >


                        <TextField
                            name="tmbpart"
                            select
                            label="ตำบล"
                            //className={classNames(classes.margin, classes.textField)}
                            value=''
                            //onChange={this.handleChange('weightRange')}

                            fullWidth
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                </Grid>

                <Grid item xs={12} sm={3} md={3}>
                    <div >


                        <TextField
                            name="phone"
                            label="เบอร์โทรติดต่อ"
                            //className={classNames(classes.margin, classes.textField)}
                            value=''
                            //onChange={this.handleChange('weightRange')}

                            fullWidth
                        >

                        </TextField>

                    </div>
                </Grid>


            </Grid>



        );
    }

}


export default Content;