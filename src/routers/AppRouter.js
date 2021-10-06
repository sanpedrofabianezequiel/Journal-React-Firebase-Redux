
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import React,{useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebase, googleAuthProvider } from '../firabase/firebase-config';
import { loginFunction } from '../actions/auth';
import { PrivateScreen } from "./PrivateScreen";
import { PublicScreen } from "./PublicScreen";
import { loadNotes } from "../helpers/loadNotes";
import { setNote, startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking,setChecking] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false)

    useEffect(() => {   

        firebase.auth().onAuthStateChanged( async (user) =>{
                //console.log(user);
            if(user?.uid){
                dispatch(loginFunction(user.uid,user.displayName))
                setisLoggedIn(true);
                dispatch(startLoadingNotes(user.uid));

            }else{
                setisLoggedIn(false);
            }
            setChecking(false);
        })
        
    }, [dispatch, setChecking,setisLoggedIn])

    if(checking) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicScreen path='/auth' component={ AuthRouter}  authenticated = { isLoggedIn } />
                    <PrivateScreen exact={true} path="/" component={ JournalScreen } authenticated={isLoggedIn} />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
