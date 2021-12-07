import React,{useState} from 'react'
import axios from 'axios'
import "../css/main.css"
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@mui/icons-material/Search';



function Main(props) {

  const [city,setCity]=useState('accra') ; 
  const [weather,setWeather]=useState("")

  const handleCity=(event)=>{
    setCity(event.target.value)
 }

 const handleSearch=()=>{
  if(city){
      axios.get(`http://api.weatherapi.com/v1/current.json?key=REACT_API_KEY&q=${city}`)
      .then((res)=>{
          console.log(res)
          setWeather(res.data)
      })
      .catch((err)=>console.error(err))
  }

}   

    return (


      
        <div className="maincss" style={{height:'100vh'}}>
            <div className='container' >
            <div className='left'>
            <h4 className='oil'>forecasttoday</h4>
            {
              weather &&(
               <div className='boss'>
                   <h1 className='temp'>{weather.current.temp_c}&deg;</h1>
                   <div className='ask'><h2>{weather.location.name},{weather.location.country}</h2>
                   <h4 >{weather.location.localtime}</h4></div>
                   <div className='benks'><img src={weather.current.condition.icon} /><h6 className='ss'>{weather.current.condition.text}</h6>
                   </div>
               </div>
              )
          }
            </div>
            <div className='writing'>
           
        <TextField   placeholder="Another Location" onChange={handleCity} width='100%'/>
                    <SearchIcon onClick={handleSearch} />
                 
              <div className='results'>
              <hr style={{width:'85%',align:'alignment',marginLeft:'30px'}}/>
              <h5> Weather Details</h5>
              {
                weather &&(
                 <div>
                     <h6>Cloudy &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{weather.current.cloud}%</h6>
                     <h6>Humidty &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{weather.current.humidity}%</h6>
                     <h6>Wind &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{weather.current.wind_kph}km/h</h6>
                     <h6>Feelslike &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{weather.current.feelslike_c}</h6>
                     <h6>Latitude &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{weather.location.lat}</h6>
                     <h6>Longitude &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{weather.location.lon}</h6>
                     <h6>Visibilty &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{weather.current.vis_miles} mi</h6>

                 </div>
                )
            }
              </div>
              
            </div>
            </div>
           
        </div>
    )
}

export default Main
