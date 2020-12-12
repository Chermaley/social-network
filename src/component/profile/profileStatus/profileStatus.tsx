import React, {Component} from "react";

type PropsType = {
    status: string,
    updateStatus: (status: string) => void
}
type StateType = {
    editMode: boolean,
    status: string
}
export default class ProfileStatus extends Component<PropsType> {

    state: StateType = {
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

    editStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        const status = e.currentTarget.value;
        this.setState({status});
    };

    componentDidUpdate(prevProps: PropsType) {
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