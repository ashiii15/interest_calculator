import React, { useState } from 'react'
import { TextField,Stack,Button } from '@mui/material'

function Intereset() {
  const [interest,setInterest] =useState(0)
  const [principle,setPrinciple] =useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)

  const submitHandler =(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year ){
      alert('please enter the form correctly')
    }
    else{
      const value = (principle*rate/100*year)
      setInterest(value)
    }
  }
  
  return (
    <div style={{height:'100vh'}} className=' w-100 d-flex justify-content-center align-items-center bg-dark'>
   <div style={{width:'500px'}} className='bg-light p-3 rounded'>
    <h2> simple Intereset</h2>
    <p>calculate simple interest</p>
    <div style={{height:'150px'}} className=' w-100 shaded d-flex flex-column justify-content-center align-items-center bg-warning'>
        <h5>Rupess  {interest}</h5>
        <p>Total simple interset</p>
    </div>
    <form className='mt-5' onSubmit={submitHandler}>
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="principle amount" variant="outlined" value={principle} onChange={(e)=>setPrinciple(e.target.value)}/>
        </div>
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="rate of interest" variant="outlined" value={rate} onChange={(e)=>setRate(e.target.value)}/>
        </div>
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="time period" variant="outlined" value={year} onChange={(e)=>setYear(e.target.value)}/>
        </div>
        <Stack direction="row" spacing={2}>
        <Button variant="contained" type='submit'>Calculate</Button>
        <Button variant="outlined">Reset</Button>
  
        </Stack>

    </form>
    </div>
    </div>
  )
}

export default Intereset