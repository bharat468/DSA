// var i = 1;
// while(i <= 25){
//     console.log(i)
//     i++
// }

//jab essi sichvesoion ho jaaha hme end pta ho to white ka use krna chaiye

//kab rukna 


let n = 2345

if(isNaN(n)){
    console.log("invalid varibal")
}
else{ if (n > 0){
    var sum = 0;
    while(n > 0){
        var rem = n%10;
        sum += rem
        n = Math.floor(n/10)
    }
    console.log(sum)
}
else{
    console.log("no postive nahi hai")
}
}
