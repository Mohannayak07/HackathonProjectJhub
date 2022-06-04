import React from "react";
import axios from "axios"
import { useState} from "react";
export default function Solutions(){
    const [source,setSource]=useState("")
    const [data,setData]=useState([])
    const display=async ()=>{
        await axios.get(`http://localhost:2000/details/${source}`)
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch(err=>{
            console.log('error');
        })
       
    
        
    }
    return(
        <div className="form">
           Select a resource : <select value={source} name="sources" id="source" onChange={e=>setSource(e.target.value)}>
                <option selected>Select the resource..</option>
                <option value="Petrol">Petrol</option>
                <option value="Electricity">Electricity</option>
                <option value="Lpg Gas">Lpg Gas</option>
                {/* <option value=""></option>
                <option value=""></option> */}
            </select> &nbsp;&nbsp;
            <button className="btn btn-primary" onClick={display}>Submit</button><br></br><br></br>
            <table class="table table-dark">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">ReSource</th>
                    <th scope="col">Alternates</th>
                </tr>
            </thead>
            {data.map(ele=>{
                return <tr>
                    <td key={ele.source}>{ele.source}</td>
                    <td key={ele.soln}>{ele.alt}</td>
                </tr>
            })}
            </table>
            
                
            
        </div>
        
    )
}