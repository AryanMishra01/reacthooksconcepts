import React, {useEffect} from 'react';

// Created a CUSTOM HOOK
const UseTitleCount = (countNum) => {
         //conditions can only be called inside Hooks    
     useEffect(()=> {
        console.log("First useEffects")
        if(countNum >= 1) {
            document.title = `Chats (${countNum})`
        }else {
            document.title = `Chats`
        }       
    }, [countNum]);
}

export default UseTitleCount