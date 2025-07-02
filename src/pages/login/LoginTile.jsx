import React, {useContext} from 'react';
import "./LoginTile.css";
import Input from "../../components/inputs/Input.jsx";
import {useForm} from "react-hook-form";
import Button from "../../components/buttons/Button.jsx";
import {useNavigate} from "react-router-dom";
import {SubjectContext} from "../../context/SubjectContext.jsx";

function LoginTile() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const {login,authenticate} = useContext(SubjectContext);

    function handleFormSubmit(data, e) {
        if( authenticate()){
            login();
            navigate("/notification");
        }
        else{
            console.log("Do failed login handling");
        }
    }

    return (
        <section className="content-panel login-container">
            <form className="login-form"  onSubmit={handleSubmit(handleFormSubmit)}>
                <h1 className="allCaps">login</h1>
                <Input register={register} type="text" label="E-mail address" name="email"
                       placeholder="example@domain.com"/>
                <Input register={register} type="password" label="Password" name="password"/>

                <div className="button-wrapper">
                    <Button text="login" type="submit" id="login" value="login" variant={Button.variants.primary}/>
                    <Button text="register" type="button" id="register" value="register"
                            onClick={()=>navigate("/register")} variant={Button.variants.secondary}/>
                </div>
            </form>
        </section>
    );
}

export default LoginTile;