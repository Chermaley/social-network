import React from "react";
import classes from './formControls.module.scss';
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl:React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError =  touched && error;
    const errorMessage = hasError ? <span>{error}</span>: null;

    return (
        <div className={!hasError ? classes.formControl : classes.formControl + ' ' + classes.error}>
            <div>
                {children}
            </div>
            {errorMessage}
        </div>
    );
};


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><textarea {...restProps} {...input}/></FormControl>;
};

export const Input: React.FC<WrappedFieldProps>  = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>;
};
