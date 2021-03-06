import React, {useEffect, useState} from "react";
import {ChangeEvent} from "react";

type PropTypes = {
    status: string,
    updateStatus: (value: string) => void,
    isOwner: boolean
}

const ProfileStatusWithHooks: React.FC<PropTypes> = ({status, updateStatus, isOwner}) => {

    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(status);

    useEffect(() => {
        setValue(status);
    }, [status]);

    const activateEditMode = () => {
        if (isOwner) {
            setEditMode(true);
        }
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(value);
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const content = editMode
        ? <input
            onBlur={deactivateEditMode}
            autoFocus
            type="text"
            onChange={onStatusChange}
            value={value}/>
        : <span onDoubleClick={activateEditMode}>{status || '...'}</span>;
    return (
        <>
            <div>
                {content}
            </div>

        </>
    );
};

export default ProfileStatusWithHooks;