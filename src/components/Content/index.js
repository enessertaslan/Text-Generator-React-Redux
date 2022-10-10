import React from 'react'
import { useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import {fetchParagraph} from '../../redux/textGenSlice';
function Index() {
    const [parasCount,setParasCount]=useState(2);
    const [type,setType]=useState('text')
    const dispatch=useDispatch();
    const text=useSelector(state=>state.textGen.text);
    useEffect(()=>{
        dispatch(fetchParagraph({paras:parasCount,type:type}));
    },[dispatch,parasCount,type])


  return (
    <div>
        <div className='buttons'>
            <div className='number'>
                <div>Paragraphs</div>
                <input type="number" value={parasCount} onChange={(e)=>setParasCount(e.target.value)} id='number' />
            </div>
            <div className='include'>
                        <div>
                            Include Html
                        </div>
                        <select name="include" id="include" onChange={(e)=>setType(e.target.value==='Yes' ? 'html' : 'text' )}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                           
                        </select>
            </div>
        </div>
       <div className='text-box'>
            {text}      
       </div>
        
        
    </div>
  )
}

export default Index