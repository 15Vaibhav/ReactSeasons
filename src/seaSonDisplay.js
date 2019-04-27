import React from 'react'
import './SeasonDisplay.css'

function getSeason(lat,month){
  if(month>2 && month<9){
    return lat>0 ? "summer":"winter"
  }else{
    return lat>0?"winter":"summer"

  }

}

function SeaSonDisplay(props) {
  console.log(props.lat)
  let date = new Date()
  const season = getSeason(props.lat,date.getMonth()) 
  const text = season==="winter"?"it's chilly ":"it's hottt"
  const icon = season==="winter"?"snowflake":"sun"
  console.log("season is ",season)
  return (
    <div className={`${season}`}>
      <h3 className={`season-display`}> {text}</h3>
      <i className={`massive icon-left ${icon} icon`}/>
      <i className={`massive icon-right ${icon} icon`}/>

    </div>
  )
}

export default SeaSonDisplay
