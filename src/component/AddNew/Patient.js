import React, { Component } from 'react';
import ExpansionPanel, {
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import FormAdd from './FormAdd'
import Icon from 'material-ui/Icon';




class Patient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            cn:'',

        }

      
    }
    componentWillMount(){
        this.setState({
            cn:'000002'
        })
    }   



    render() {
        let { cn } = this.state
        return (
            <div >
                <ExpansionPanel defaultExpanded>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ background: '#E0E0E0' }}>

                      <Icon className="leftIcon" style={{   color: '#6C6C6C' }} > face</Icon> &nbsp; <div style={{   color: '#6C6C6C',fontSize:20 }} >  บันทึกผู้ตรวจรายใหม่  CN : { cn }</div>


                    </ExpansionPanelSummary>
                    <Divider />



                        <FormAdd />

                    <Divider />
                    <ExpansionPanelActions>
                        
                        <Button
                            variant="raised"
                            style={{ marginLeft: 40, background: '#FF4081', color: '#FFFFFF', height: 10 }}
                            //onClick={(e) => this.goHome(e)}   >
                            >
                            <Icon className="leftIcon" >settings_backup_restore</Icon>
                            <div>Reset</div>
                        </Button>

                        <Button type='submit'
                            variant="raised"
                            style={{ background: '#00BCD4', color: '#FFFFFF', height: 10 }}
                            //onClick={(e) => this.goHome(e)}  >
                            >
                            <Icon className="leftIcon" >done</Icon>
                            <div> บันทึก</div>

                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
            </div>
        )
    }
}
export default Patient;