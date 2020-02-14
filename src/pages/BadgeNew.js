import React from 'react'

import './styles/BadgeNew.css'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />

                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Iván" 
                                lastName="Fuentes" 
                                jobTitle="Front-end"
                                twitter="devfuentes"
                                avatarUrl="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/67933988_2520461734680345_8614090312706424832_n.jpg?_nc_cat=105&_nc_ohc=S9W40Ag4AMsAX84bwKj&_nc_ht=scontent.fmex6-1.fna&oh=7b9e0395751ab7962ec5288483dc46db&oe=5F00F15C"
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BadgeNew
