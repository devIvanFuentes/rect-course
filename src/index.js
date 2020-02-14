import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const container = document.getElementById('app');


ReactDOM.render(<Badge 
                    firstName="Iván" 
                    lastName="Fuentes" 
                    jobTitle="Front-end Developer" 
                    twitter="devfuentes" 
                    avatarUrl = "https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/67933988_2520461734680345_8614090312706424832_n.jpg?_nc_cat=105&_nc_ohc=S9W40Ag4AMsAX84bwKj&_nc_ht=scontent.fmex6-1.fna&oh=7b9e0395751ab7962ec5288483dc46db&oe=5F00F15C"
                />, container);
