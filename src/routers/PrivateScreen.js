import React from 'react';
import PropTypes from 'prop-types';

import {Route, Redirect} from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';

export const PrivateScreen = ({
    authenticated,
    component:Component,
    ...rest
})=>{


    return (
        <Route  
            {...rest}
            component = { (props)=>
                (
                    (authenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to ='/auth/login'/>)
                )
            }
        />
    );
}