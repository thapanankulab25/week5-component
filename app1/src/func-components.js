import React from 'react'
export function Header() {
const aStyle = {
display: 'inline-block',
color: 'blue',
margin: '7px',
textDecoration: 'none' 
}
return (
    <div style={{backgroundColor: '#ccc'}}>
    <a href="/home" style={aStyle}>Home</a> |&nbsp;
    <a href="/react" style={aStyle}>React</a> |&nbsp;
    <a href="/react Native" style={aStyle}>React Native</a>
    </div>
    )
}
export function Content() // add content
{
    return (
    <div style={{textAlign: 'center'}}>
    <h2>Hello <br/>React & React Native</h2>
    <br/><br/><br/>
    </div>
    )
    }
    export const Footer = () => {
    return (
    <div style={{textAlign: 'center'}}>
    &copy; {new Date().getFullYear()} 2022 All right reserved
    </div>
    )
}
    

    