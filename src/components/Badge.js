import React from 'react'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component{
    render(){
        return (
            <div>

                <div>
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>

                <div>
                    <img src="http://2.gravatar.com/userimage/5/996e579d06df6e3397c29ce1cc4c6799?size=400" alt="Avatar" />
                    <h1>Iván <br/>Fuentes</h1>
                </div>

                <div>
                    <p>Front-end Developer</p>
                    <p>@devfuentes</p>
                </div>

                <div>
                    #platziConf
                </div>


            </div>
        )
    }
}

export default Badge

