import React from "react";
import {Form, Formik, Field} from "formik";
import {FilterFormType} from "../../../redux/usersReducer";

type UsersSearchFormPropTypes ={
    onSubmit: (data: FilterFormType) => void
}

type FormType = {
    term: string,
    friend: "true" | "false" | "null"
}
const UsersSearchForm: React.FC<UsersSearchFormPropTypes> = ({onSubmit}) => {
    const onButtonClick = (values: FormType) => {
        const filter = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'false' ? false : true
        };
        onSubmit(filter);

    };
    return (
        <div>
            <Formik
                initialValues={{term: '', friend: "null"}}
                onSubmit={onButtonClick}
            >
                {() => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field as="select" name="friend">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit">
                            Find!
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default React.memo(UsersSearchForm);