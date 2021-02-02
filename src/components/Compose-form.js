// A FORM WITH A TITLE, A BODY AND A SUBMIT BUTTON WHICH POSTS THE CONTENT TO THE DATABASE.

import React from "react";

const Form = () => {
    return(
        <div className="compose-form">
            <form>
                <input type="text" name="title" />
                <input type="text" name="content" />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form




