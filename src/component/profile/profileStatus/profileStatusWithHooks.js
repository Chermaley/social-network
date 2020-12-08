import React, {useEffect, useState} from "react";


// eslint-disable-next-line react/prop-types
const ProfileStatusWithHooks = ({status, updateStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(status);

    useEffect(() => {
        setValue(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(value);
    };

    const onStatusChange = (e) => {
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