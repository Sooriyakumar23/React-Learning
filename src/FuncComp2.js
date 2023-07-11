import React from "react";

function FuncComp2(props) {
    return (
        <div>
            <div>
                <p>
                    He: Can you do some magic?
                </p>
                <p>
                    I: Sure, 
                    <br/> 
                    {props.data21}, 
                    <br/>
                    {props.data22}
                    <br/>
                    ----------------------------------------------------------------------------------------------------
                </p>
            </div>
        </div>
    )
}

export default FuncComp2;