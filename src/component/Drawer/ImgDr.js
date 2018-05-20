import React, { Component } from "react";
import logo from '../../img/avatar2.png'

class ImgDr extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#1A2942' }}>
                <br />
                <center>
                    <img src={logo} width="100" height='100' />
                    <p style={{ color: '#3BC0C3' }}> นายสุจินต์ สุกกล้า</p>
                </center>

                <br />
            </div>
        )
    }
}
export default ImgDr;