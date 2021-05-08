import React from 'react'

function fetchData(id) {
      
    var url = "www.example.com/api/get/";
    fetch(url).then((response) =>  response.json()).then((data) => {
        console.log(data);
    });
    
}

export default function Question4() {
    fetchData();
    return (
        <div>
            
        </div>
    )
}
