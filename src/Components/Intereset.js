import React, { useState } from 'react'
import { TextField,Stack,Button } from '@mui/material'

function Intereset() {
  const [interest,setInterest] =useState(0)
  const [principle,setPrinciple] =useState()
  const [rate,setRate] = useState()
  const [year,setYear] = useState(0)
  const [validPrinciple,setValidprinciple] =useState(false)
  const [validRate,setValidRate] = useState(false)
  const [validYear,setValidYear] = useState(false)


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
  const validUserInput = (e)=>{
    const {name,value} = e.target
    if(!!value.match(/^[0-9]+$/)){
      if(name==='principle'){
        setPrinciple(value)
        setValidprinciple(true)
      }else if(name === 'rate'){
        setRate(value)
        setValidRate(true)
      }else{
        setYear(value)
        setValidYear(true)

      }
    }
      else{
        if(name==='principle'){
          setPrinciple(value)
          setValidprinciple(false)
        }else if(name === 'rate'){
          setRate(value)
        setValidRate(false)
        }else{
          setYear(value)
        setValidYear(false)
        }
      }  

  }
  const resethandler =()=>{
    setInterest([])
    setPrinciple([])
    setRate([])
    setYear([])

  }
  return (
    <div style={{height:'100vh'}} className=' w-100 d-flex justify-content-center align-items-center bg-dark'>
   <div style={{width:'500px'}} className='bg-light p-3 rounded'>
    <h2> simple Intereset</h2>
    <p>calculate simple interest</p>
    <div style={{height:'150px'}} className=' w-100 shaded d-flex flex-column justify-content-center align-items-center bg-warning'>
        <h5>  <i class="fa fa-inr"></i> {interest}</h5>
        <p>Total simple interset</p>
    </div>
    <form className='mt-5' onSubmit={submitHandler}>
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="principle amount" variant="outlined" value={principle}  name='principle' onChange={(e)=>validUserInput(e)}/>
        </div>
        { !validPrinciple &&
        <div className='mb-3 text-danger fw-bolder'>
          *invalid principle amount
        </div>}
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="rate of interest" variant="outlined" value={rate} name='rate' onChange={(e)=>validUserInput(e)}/>
        </div>
        {!validRate && 
        <div className='mb-3 text-danger fw-bolder'>
          *invalid rate amount
          </div>}
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="time period" variant="outlined" value={year} name='year' onChange={(e)=>validUserInput(e)}/>
        </div>
        {!validYear &&
        <div className='mb-3 text-danger fw-bolder'>
          *invalid year 
        </div>

        }
        <Stack direction="row" spacing={2}>
        <Button variant="contained" type='submit'>Calculate</Button>
        <Button variant="outlined" onClick={resethandler}>Reset</Button>
  
        </Stack>

    </form>
    </div>
    </div>
  )
}

export default Intereset