import React, { Component } from 'react';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import Button from 'material-ui/Button';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Msgerror extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }

    }

    handleClose = () => {
        this.setState({ open: false });
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ open: this.props.open });
    }

    render() {
        let { open } = this.state
        return (
            <div>
                <Dialog xs={12}
                    open={this.state.open}
                    transition={Transition}
                    keepMounted
                    onClose={this.handleClose}
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{ background: '#00000' }}>
                        Alert
                    </DialogTitle  >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location.
                         </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={this.handleClose} style={{ background: '#00000' }}>
                            <div>ตกลง</div>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default Msgerror;