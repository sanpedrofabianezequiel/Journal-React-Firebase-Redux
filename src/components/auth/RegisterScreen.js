import React from 'react'
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch,useSelector } from 'react-redux';
import validator from 'validator';
import { setErrorAction, removeErrorAction } from '../../actions/ui';
import { startRegisterWithEmailPassworName } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispath = useDispatch();
    const {ui:{msg}}= useSelector(state => state); //CallBack
    console.log(msg);
    const [formValues,handleInputeChange,reset] = useForm({
        name:'ezequiel',
        email:'ezequiel@gmail.com',
        password:'123456',
        password2:'123456'
    });

    const {name,email,password,password2} = formValues;

    const handleRegister= (e)=>{
        e.preventDefault();
        //console.log(name,email,password,password2);
        if(isFormValid()){
            dispath(startRegisterWithEmailPassworName(email,password,name));
        }
    }

    const isFormValid= ()=>{
        if(name === ''){
            dispath(setErrorAction('Name is required'));
            return false;
        }else if(!validator.isEmail(email)){
            dispath(setErrorAction('Email is invalid'));
            return false
        }else if( password !== password2 || password.length < 5){
            dispath(setErrorAction('Password is not valid'));
            return false;
        }
        dispath(removeErrorAction());
        return true;
    }

    return (
        <>
        <h3 className="auth__title">Register</h3>

        {
            msg && (
                <div className="auth__alert-error">
                    {msg}
                </div>
            )
        }

        <form onSubmit={handleRegister}>
            
            <input  value={name} onChange={handleInputeChange}  type="text" placeholder="Name" name="name"  className="auth__input" autoComplete="off" />

            <input  value={email} onChange={handleInputeChange} type="text" placeholder="email" name="email"  className="auth__input" autoComplete="off" />
            
            <input  value={password} onChange={handleInputeChange} type="password" placeholder="Password" name="password" className="auth__input" />

            <input  value={password2} onChange={handleInputeChange} type="password" placeholder="Confirm Password" name="password2" className="auth__input" />

            <button type="submit" className="btn btn-primary btn-block  mb-5 "  >
                Login
            </button>
            <hr/>

           

            <Link to="/auth/login" className="link  ">
                Already registered? 
            </Link>
        </form>
        </>
    )
}
