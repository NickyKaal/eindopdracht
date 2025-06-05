import React from 'react';
import "./LoginTile.css";

import Input from "../common/Input.jsx";
import {useForm} from "react-hook-form";

function LoginTile() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function handleFormSubmit(data) {
        console.log(data);
        console.log(errors);
    }

    return (
        <section className="contentPanel">
            <form className="loginForm" onSubmit={handleSubmit(handleFormSubmit)}>
                <h1 className="allCaps">login</h1>
                <Input register={register} type="text" label="E-mail address" name="email"/>
            </form>
        </section>
    );
}

export default LoginTile;