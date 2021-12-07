import React from 'react'
import '../css/home.css'
import Weather from './Weather'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

export default function Home(props) {
    return (
        <div className="body">
            
            <div className='wrapper'>
            <h1>forecast today</h1>
            <div >
            <h5>Login for a better experience</h5>
            <Button><Link href='/login'>Login</Link></Button>
            </div>
            <div className='bott'></div>
            <h5>Hello!,Where do you plan on going today?</h5>
            <Weather />
            
            </div>
        </div>
    )
}
