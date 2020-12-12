import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class ProfileStatus extends Component {
    static propTypes = {
        status: PropTypes.any,
        updateStatus: PropTypes.func
    };


    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    };

    editStatus = (e) => {
        const status = e.target.value;
        this.setState({status});
    };

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }
    render() {

        const content = this.state.editMode
            ? <input
                onChange={this.editStatus}
                autoFocus onBlur={this.deactivateEditMode}
                type="text"
                value={this.state.status || ''}/>
            : <span onDoubleClick={this.activateEditMode}>{this.props.status || '...'}</span>;
        return (
            <>
                <div>
                    {content}
                </div>

            </>
        );
    }
}