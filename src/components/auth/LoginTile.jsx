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
        <section className="content-panel">
            <form className="login-form" onSubmit={handleSubmit(handleFormSubmit)}>
                <h1 className="allCaps">login</h1>
                <Input register={register} type="text" label="E-mail address" name="email" placeholder="example@domain.com"/>
                <Input register={register} type="password" label="Password" name="password" />
            </form>
        </section>
    );
}

export default LoginTile;