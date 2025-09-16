import React from 'react'

export const PersList = ( {pers, setPers}) => {
  
    const handleDelete = () => {
        console.log("delete");
        
    }
  
    return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
        {pers.map(person=>            
            <div key={person.id} style={{width:"150px", height:"210px", backgroundColor:"#64748b", padding:"5px", borderRadius:"5px"}}>
                <div><img src={person.image} alt="" style={{width:"100%", aspectRatio:"1 / 1", objectFit:"cover"}}/></div>
                <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                    <h3 style={{color:"white"}}>{person.name}</h3>
                    <button onClick={()=> handleDelete()} style={{padding:"2px", borderRadius:"2px", border:"none"}}>Delete</button>
                </div>
            </div>
        )}
    </div>
  )
}

