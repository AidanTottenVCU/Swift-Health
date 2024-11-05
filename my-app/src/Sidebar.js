import Button from '@mui/material/Button';
import React from 'react';
import './Sidebar.css';

const TYPE = 'contained'
const STYLE = {marginTop: '25%', marginBottom: '25%'}

export default function SidebarA() {
    
    return (
        <>
        <Button variant={TYPE} className='Button' onClick={() => {console.log('Button Clicked');}} style={STYLE}>Home</Button>
        <br></br>
        <Button variant={TYPE} className='Button' style={STYLE}>Profile</Button>
        <br></br>
        <Button variant={TYPE} className='Button' style={STYLE}>Monitor</Button>
        <br></br>
        <Button variant={TYPE} className='Button' style={STYLE}>Support</Button>
        <br></br>
        <Button variant={TYPE} className='Button' style={STYLE}>Search</Button>
        <br></br>
        <Button variant={TYPE} className='Button' id='HELP' style={STYLE}>Help</Button>
        <br></br>
        </>
    )
} 