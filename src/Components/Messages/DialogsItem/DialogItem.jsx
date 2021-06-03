import {NavLink} from "react-router-dom";
import React from "react";


const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    )
}


export default DialogItem;