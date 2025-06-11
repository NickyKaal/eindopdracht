import React from 'react';
import "./LoginTile.css";

import Input from "../common/inputs/Input.jsx";
import {useForm} from "react-hook-form";
import Button from "../common/buttons/Button.jsx";

function LoginTile() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function handleFormSubmit(data, e) {
        console.log(e.target.value);
        console.log(e.target.id);

        console.log(data);
    }

    return (
        <section className="content-panel">
            <form className="login-form">
                <h1 className="allCaps">login</h1>
                <Input register={register} type="text" label="E-mail address" name="email"
                       placeholder="example@domain.com"/>
                <Input register={register} type="password" label="Password" name="password"/>

                <div className="button-wrapper">
                    <Button text="login" type="submit" id="login" value="login" onClick={handleSubmit(handleFormSubmit)}
                            variant={Button.variants.primary}/>
                    <Button text="register" type="submit" id="register" value="register"
                            onClick={handleSubmit(handleFormSubmit)} variant={Button.variants.secondary}/>
                </div>
            </form>
        </section>
    );
}

export default LoginTile;