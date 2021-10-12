import Swal from 'sweetalert2';


  import { firebase, googleAuthProvider } from '../firabase/firebase-config';
  
  import {types} from '../types/types';
import { noteLogout } from './notes';
  import { finishLoading, startLoading } from './ui';

  //Middlleware
  export const starLoginEmailPasswordMiddleware= (email,password) =>{
    return (dispatch) =>{

        dispatch(startLoading());
        return firebase.auth().signInWithEmailAndPassword(email,password)
            .then(({user}) =>{
                dispatch(loginFunction(user.uid,user.displayName));
                dispatch(finishLoading())
            })
            .catch(e=>{
                //message viene de firebase
                console.log(e);
                Swal.fire('Error',e.message,'error');
                dispatch(finishLoading())
            })
    }
  }



  export const startRegisterWithEmailPassworName = (email, password,name) =>{
      return (dispatch) =>{
        dispatch(startLoading());
          firebase.auth().createUserWithEmailAndPassword(email,password)
            .then( async ({user}) =>{
                //console.log(user);
                await user.updateProfile({displayName:name});

                dispatch(loginFunction(user.uid,user.displayName));
            })
            .catch(e=>{
                dispatch(finishLoading())
                 //message viene de firebase
                 //console.log(e);
                 Swal.fire('Error',e.message,'error');
                 dispatch(finishLoading())
            })
      }
  }

  export const startGoogleLogin= ()=>{
      return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(userCred=>{
               // console.log(userCred)
               const {user} = userCred;
               dispatch(loginFunction(user.uid,user.displayName))
            })
            .catch(e=>{
                 //message viene de firebase
                 //console.log(e);
                 Swal.fire('Error',e.message,'error');
                 dispatch(finishLoading())
            })
      }
  }

  export const loginFunction = ( uid , displayName) =>({
      type:types.login,
      payload:{
          uid,
          displayName
      }
  })


  export const startLogoutMiddelware = ()=>{
      return async ( dispatch ) =>{
          await firebase.auth().signOut();
          dispatch(logout());
          //Limpiamos el NOTES and ACTIVE
          dispatch(noteLogout());
      }
  }

  export const logout=()=>({
      type:types.logout
  })