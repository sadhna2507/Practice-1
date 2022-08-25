//currying
function main(a,b,c,d){
    return a+b+c+d;
}

function main(a){
    return (b) =>{
        return(c) =>{
            return(d) =>{
                return a+b+c+d
            }
        }
    }
}