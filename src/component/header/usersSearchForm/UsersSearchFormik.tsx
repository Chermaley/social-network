import React from "react";
import {Form, Formik, Field} from "formik";
import {FilterFormType} from "../../../redux/usersReducer";
import {useSelector} from "react-redux";
import {getFilter} from "../../../redux/userSelectors";
import classes from  "./usersSearchForm.module.scss";

type UsersSearchFormPropTypes ={
    onSubmit: (data: FilterFormType) => void
}

type FriendFormType = "true" | "false" | "null";
type FormType = {
    term: string,
    friend: FriendFormType
}
const UsersSearchForm: React.FC<UsersSearchFormPropTypes> = ({onSubmit}) => {
    const filter = useSelector(getFilter);

    const onButtonClick = (values: FormType) => {
        const filter = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend !== 'false'
        };
        onSubmit(filter);
    };
    return (
            <Formik
                enableReinitialize
                initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
                onSubmit={onButtonClick}
                placeholder={'s'}
            >
                {() => (
                    <Form className={classes.form}>
                        <Field className={classes.drop} as="select" name="friend">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <Field className={classes.input} placeholder={'Find users'} type="text" name="term"/>
                        <button className={classes.submit} type="submit"/>
                    </Form>
                )}
            </Formik>
    );
};

export default React.memo(UsersSearchForm);