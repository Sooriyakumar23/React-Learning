import React from "react";

export class ClassComp extends React.Component {
    render(){
        return (
            <div>
                Amazing Fact !!!!!
                <p>
                    {this.props.data3}
                </p>
            </div>
        )
    }
}