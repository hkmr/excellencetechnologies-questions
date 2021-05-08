import React from 'react'

// finding maximum 1 consecutive
function maxConsecutive(arr){
    var count = 1;
    var max = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] === 1){
            if(arr[i+1] === 1){
                count++;
            }
        }else{
            count = 1;
        }

        if(count > max)
            max = count;
    }
    return max;
}

export default function Question2() {

    var arr = [0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0];
    console.log(maxConsecutive(arr));


    return (
        <div >
            
        </div>
    )
}
