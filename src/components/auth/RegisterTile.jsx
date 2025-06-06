import React from 'react';
import "./RegisterTile.css";

import Input from "../common/Input.jsx";
import {useForm} from "react-hook-form";
import Button from "../common/Button.jsx";

function RegisterTile() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function handleFormSubmit(data, e) {
        console.log(e.target.value);
        console.log(e.target.id);

        console.log(data);
    }

    return (
        <section className="content-panel">
            <form className="register-form">
                <h1 className="allCaps">Register</h1>
                <Input register={register} type="text" label="First name" name="first-name"/>
                <Input register={register} type="text" label="Last name" name="last-name"/>
                <Input register={register} type="text" label="E-mail address" name="email"
                       placeholder="example@domain.com"/>
                <Input register={register} type="text" label="Gender" name="gender"/>
                <Input register={register} type="password" label="Password" name="password"/>
                <Input register={register} type="password" label="Repeat password" name="repeat-password"/>

                <div className="button-wrapper">
                    <Button text="cancel" type="submit" id="cancel" value="cancel" styleClas="buttonSizeMedium"
                            onClick={handleSubmit(handleFormSubmit)} variant={Button.variants.secondary}/>
                    <Button text="register" type="submit" id="register" value="register" styleClas="buttonSizeMedium"
                            onClick={handleSubmit(handleFormSubmit)} variant={Button.variants.primary}/>
                </div>
            </form>
        </section>
    );
}

export default RegisterTile;