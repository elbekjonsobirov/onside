import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Championatlogo.css'

export default function Championatlogo() {

    const [chamLogo, setChamLogo] = useState([])

    useEffect(() => {
        const chamLogoFunc = async () => {
            const chamLogoApi = await axios.get('http://185.196.213.14:3001/chempionships')
            setChamLogo(chamLogoApi.data)
        }

        chamLogoFunc()
},[])
  return (
    <div className='championatLogoPage'>
        <div className="championatLogoCard">
            {
                chamLogo.map((item, index) => (
                    <a href={item.link} target="_blank">
                        <img src={item.image.url} alt="" />
                    </a>
                ))
            }
        </div>
    </div>
  )
}
