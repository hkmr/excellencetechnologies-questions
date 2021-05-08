import React from 'react'

var data = [
    {id: 4, name: "abc"},
    {id: 10, name: "ab2"},
    {id: 5, name: "abc3"},
    {id: 6, name: "abc5"},
];

export default function Question5() {
    
    data.sort(function(a, b) {
    return a.id > b.id ? 1 : -1;
    });
    
    var i = 0;
    return (
        <div>
            {
                data.map((val) => {
                    return <div key={++i}> 
                        <h3>Id: {val.id}, name : {val.name}</h3>
                    </div>
                })
            }
        </div>
    )
}
