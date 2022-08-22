import React from 'react'

import { GiTank } from "react-icons/gi";

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (
        <>
            {
                data
                .sort((a, b) => a.score < b.score ? 1 : -1)
                .map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                        <GiTank  
                        size={50}
                        color={value.color}
                        />
            
                            <div className="info">
                                <h3 className='name text-light'>{value.teamName}</h3>    
                                <span className='name text-dark'>Team {value.teamNumber}</span>
                            </div>                
                        </div>
                        <div className="item text-light">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}