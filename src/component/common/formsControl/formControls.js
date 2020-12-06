
import React from "react";
import PropTypes from "prop-types";
import classes from './formControls.module.scss';

const FormControl = ({meta, ...props}) => {
    const hasError =  meta.touched && meta.error;
    const errorMessage = hasError ? <span>{ meta.error}</span>: null;

    return (
        <div className={!hasError ? classes.formControl : classes.formControl + ' ' + classes.error}>
            <div>
                {props.children}
            </div>
            {errorMessage}
        </div>
    );
};
FormControl.propTypes = {
    meta: PropTypes.object,
    children: PropTypes.any
};

export const Textarea = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><textarea {...restProps} {...input}/></FormControl>;
};
Textarea.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object
};

export const Input  = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>;
};

Input.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object
};