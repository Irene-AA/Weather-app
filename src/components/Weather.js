import React,{useState} from 'react'
import Textfield from '@material-ui/core/TextField'
import axios from 'axios'
import Button from '@material-ui/core/Button'

function Weather(props) {
    const[country,setCountry]=useState("")
    const[city,setCity]=useState("")
    const[state,setState]=useState("")
    const[weather,setWeather]=useState(null)

    const handleCountry=(event)=>{
       setCountry(event.target.value)
    }

    const handleCity=(event)=>{
       setCity(event.target.value)
    }
   
    

    const handleSearch=()=>{
        if(country && city){
            // axios.get(`http://api.weatherstack.com/current?access_key=8af31b6a10123396e83ca1dee2b6bf49&query=${country},${city}`)
            axios.get(`http://api.weatherapi.com/v1/current.json?key=REACT_APP_API_KEY&q=${country},${city}`)
            .then((res)=>{
                console.log(res)
                setWeather(res.data)
               
                   
               
            })
            .catch((err)=>console.error(err))
        }

    }   
    const handleReset=()=>{
        (document.querySelectorAll('input')).forEach(
            input=>(input.value="")
        )
        setState({itemvalues:[{}]
        });
    }
 
    
    return (
        <div >

        {
            weather &&(
             <div>
                 <h2>{weather.location.name},{weather.location.country}</h2>
                 <h1>{weather.current.temp_c}</h1>
                 <img src={weather.current.condition.icon}/>
                 <h3>{weather.current.condition.text}</h3>
                 <h1>{weather.current.observation_time}</h1>
                 <h1>{weather.location.localtime}</h1>
                 
             </div>
            )
        }
        
            <Textfield type="text" placeholder='Country' onChange={handleCountry}/>
            
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Textfield  type="text" placeholder='City' onChange={handleCity}/>
            
            &nbsp;&nbsp; &nbsp; &nbsp; 
            
            <Button onClick={handleSearch} >Search</Button>
            &nbsp;
            <Button onClick={handleReset}>Reset</Button>
        
            
        

       
        </div>
    )
}

export default Weather

