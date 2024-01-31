'use client'

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import { RatingsContainer } from '@/assets/styles'

export default function Ratings({show, rate }) {
  return (
    <RatingsContainer>
     <p className={show ?  "show" : "hide"}>Ratings: {rate}</p>  
     <Rating className="rate" value={rate} readOnly /> 
    </RatingsContainer>
  )
}

