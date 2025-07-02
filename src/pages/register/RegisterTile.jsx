import React from 'react';
import "./RegisterTile.css";

import Input from "../../components/inputs/Input.jsx";
import {useForm} from "react-hook-form";
import Button from "../../components/buttons/Button.jsx";
import Radio from "../../components/inputs/Radio.jsx";
import {useNavigate} from "react-router-dom";

function RegisterTile({authenticateCB}) {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(data, e) {
        console.log(e.target.value);
        console.log(e.target.id);

        console.log(data);

        console.log("Do dummy login");
        authenticateCB(true);

        console.log("Redirecting..");
        navigate("/notification");
    }

    return (
        <section className="content-panel register-container">
            <form className="register-form" onSubmit={handleSubmit(handleFormSubmit)}>
                <h1 className="allCaps">Register</h1>
                <Input register={register} type="text" label="First name" name="first-name"/>
                <Input register={register} type="text" label="Last name" name="last-name"/>
                <Input register={register} type="text" label="E-mail address" name="email"
                       placeholder="example@domain.com"/>
                <Radio register={register} groupName="Gender" radioSet={[{label:"Male", value:"male"},{label:"Female", value:"female"}]} name="gender"/>
                <Input register={register} type="password" label="Password" name="password"/>
                <Input register={register} type="password" label="Repeat password" name="repeat-password"/>

                <div className="button-wrapper">
                    <Button text="cancel" type="button" id="cancel" value="cancel" styleClas="buttonSizeMedium"
                            onClick={()=>navigate("/login")} variant={Button.variants.secondary}/>
                    <Button text="register" type="submit" id="register" value="register" styleClas="buttonSizeMedium" variant={Button.variants.primary}/>
                </div>
            </form>
        </section>
    );
}

export default RegisterTile;