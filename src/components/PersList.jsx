import React, { useState } from 'react'
import { Modal, Button, CardBody, Card, CardTitle } from 'reactstrap'
import { MyModal } from './MyModal'
import { motion } from "motion/react"

export const PersList = ({ pers, setPers }) => {

    const [modal, setModal] = useState(false)
    const [selImg, setSelImg] = useState(null)
    const [selTitle, setSelTitle] = useState(null)

    const handleDelete = (id) => {
        setPers(prev => prev.filter(pers => pers.id != id))
    }

    const toggle = (img, title) => {
        setSelTitle(title)
        setSelImg(img)
        setModal(!modal)
    }

    return (
        <div>


            <div style={{ display: "flex", justifyContent: "center",  gap: "10px", flexWrap: "wrap" }}>
                {pers.map(person =>
                    <motion.div key={person.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
                        }}

                    >
                        <Card
                            key={person.id}
                            style={{
                                width: '16rem'
                            }}
                        >
                            <img
                                style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover" }}
                                onClick={() => toggle(person.image, person.name)}
                                alt="Sample"
                                src={person.image}
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {person.name}
                                </CardTitle>
                                <motion.button style={{border:"none", backgroundColor:"black", color:"white", borderRadius:"5px"}}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }} onClick={() => handleDelete(person.id)}>
                                    
                                        Delete
                                    
                                </motion.button>
                            </CardBody>
                        </Card>
                    </motion.div>
                    /*
                        <div key={person.id} style={{width:"150px", height:"210px", backgroundColor:"#64748b", padding:"5px", borderRadius:"5px"}}>
                            <div><img onClick={()=>toggle(person.image, person.name)} src={person.image} alt="" style={{width:"100%", aspectRatio:"1 / 1", objectFit:"cover"}}/></div>
                            <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                                <h3 style={{color:"white"}}>{person.name}</h3>
                                <button onClick={()=> handleDelete(person.id)} style={{padding:"2px", borderRadius:"2px", border:"none"}}>Delete</button>
                            </div>
                        </div>*/
                )}

            </div>
            {modal && <MyModal modal={modal} setModal={setModal} selImg={selImg} selTitle={selTitle} />}
        </div>
    )
}

