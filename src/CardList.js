import React from 'react'
import Card from "./Articles"

function CardList(results) {
    let data = [];
    if(results.data) {
        data = results.data.Search || [];
    }
    console.log(data);

    return (
        <div className="result">

                {data.map(item =>{
                    <Card news={item}></Card>
                })}

        
        </div>
    )
}

export default CardList
