import React from 'react';
import nav from './NavigationBar/nav.js';
import '../App.css';
const IframeComponent = () => {
    return (
       
           
           
            <iframe 
                className="nav-bar"
                title="Embedded Content"
                // src="./NavigationBar/Navigationbarl"
                srcDoc='
                 <style>
                 *{
                    margin:0;
                    padding:0;
                    border:0;
                 }
                 ul{
                    list-style:none;
                 }
                 li{
                    padding-top:12px;
                    padding-bottom:12px;
                    font-size:16px;
                    font-family:arial;
                    color:#ffffff;
                    background-color:#878787;
                    width:168px;
                    margin-top:2px;
                    padding-left:auto;
                    padding-right:auto;
                    text-align:center;
                    
                 }
                 li:first-child{
                    margin-top:10px;
                 }
                 </style>   
                    
                <ul class="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                
            </ul>'
                 >
            </iframe>
           
    );
};

export default IframeComponent;
