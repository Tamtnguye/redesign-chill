

import React from "react";
import {accountObj} from './Data';
import {AccountSection} from './AccountSection';


 export const Account = () =>{
   
    return(
   <>
        <AccountSection {...accountObj} />
    </>
    )
};