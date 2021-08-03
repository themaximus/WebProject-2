import React from "react";
import Store from "../../Redux/ReduxStore";

import Header from "./Header";

let State = Store.getState();

const HeaderContainer = (props) => {
    return (
        <Header dispatch={State.dispatch} PersonalMessage={State.Messanger.PersonalMessage} newPersonalMessage={State.newPersonalMessage} DialogueList={State.Messanger.DialogueList} PageList={State.PageList}/>
    )
}

export default HeaderContainer;