Promise.resolve('success').then(data=>{
    return data.toUpperCase();
})
.then(data=>{
    console.log(data);
    return data;
})
.then(console.log);