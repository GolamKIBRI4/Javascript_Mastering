function filterArray(arr,callback){
let arr2=[];
arr.map(ar=>(callback(ar)?arr2.push(ar):null))

return arr2;

}

const callback = (num)=>{

    return num > 2;

}

console.log(filterArray([1,2,3,4,5],callback));

