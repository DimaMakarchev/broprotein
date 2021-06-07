import React from "react";
import {Field} from "redux-form";


export const Security = (props) => {

    return (
        <>
            <fieldset>
                <legend>Login</legend>
                <form onSubmit={props.handleSubmit}>
                    <Field component={'input'} name={'name'} placeholder={'name'}/>
                    <Field component={'input'} name={'password'} placeholder={'password'}/>
                    <button>Logging</button>
                </form>
            </fieldset>
        </>
    )
};
