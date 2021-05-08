import React from 'react'

var items = [];

// filling random numbers
function fillArray(){
    for(var i=0; i<=101; i++){
        items.push(Math.floor(Math.random() * 100));
    }
}

export default function Question1() {

    fillArray();
    var  i = 0;
    return (
        <div style={{margin: "30px"}}>
            <h4>Question 1 solution (Even numbers)</h4>
            [{
                items.map((item) => {
                    if(item % 2 === 0){
                        return <span key={++i}>{item} , </span>
                    }
                })
            }]
        </div>
    )
}
