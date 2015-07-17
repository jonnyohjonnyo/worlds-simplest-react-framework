import React from 'react'
import {Panel} from 'react-bootstrap'

    class Forge extends React.Component{
        constructor(props){
            super(props);
        }
        render(){
            let displayId = this.props.params.id ? "Forge Id = " + this.props.params.id : "";
            return (
                <Panel header="FORGE" >
                    <h1>Welcome, to the Forge!!!</h1>
                    {displayId}
                </Panel>
            );
        }
    }

    export default Forge;