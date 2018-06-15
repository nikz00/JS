/*console.log("Hello World")

//Objects

let obj={
    a:10,
    b:'hello',
    c:true,
    d:{
        p:10,
        q:false,
        r:{
            x:'Hey',
            y:'There'
        }
    }
}
console.log("a="+obj.a)
console.log(obj.b)
console.log(obj.c)
obj.l=1111
console.log("l="+obj.l)
let res=""
res+=obj.d.r.x+" "+obj.d.r.y
console.log(res)

//Function

function incr(x){
return x+1
}
let x=incr(false)
let y=incr('hello')
console.log(incr(10))
console.log("x="+x)
console.log("y="+y)

//Equality

console.log(1=='1')
console.log('1'+1)
console.log('11'-1==1)
console.log({}+[])*/

//Strings
/*
let str="asdasdasdasdas"
console.log(str.indexOf('das',3))
console.log(str.lastIndexOf('das'))

let ss=str.substring(3,5)
console.log(ss)
console.log(str) //No change in string
ss=str.substr(3,9)
console.log(ss)
console.log(str)  //No change in string

ss=str.slice(3,5) 
console.log(ss)
console.log(str) //No change in string //almost same as substr()

let url="https://www.youtube.com/watch?v=12QofeiccbA"
ss=url.split('?')
console.log(ss)
ss=url.split('=')
console.log(ss)*/

//Array
/*
let a=[10,'hello',true,null,undefined,[2,3],{b:10}]
console.log(a)

console.log(typeof(a[3]))

let a2d=[[3, 4],[4,5,6],[7,8]]
console.log(a2d[0][1])

console.log(a2d)
console.log(a.join('-'))

a=[1,2,3,4,5,6,47,8,9,10]
b=a.slice(3,9)
console.log(b)
console.log(a) //No change in the array
console.log(a.length)
b=a.splice(3,4)
console.log(b)
console.log(a) //Array has changed
//The corresponding elements have been removed
console.log(a.length)
a[15]=55 //New element added
console.log(a) //Length changed

//Add & remove items
a.push(10)
console.log(a)
a.pop()
console.log(a)
a.shift()
console.log("Shift="+a)
a.unshift(12)
console.log("Unshift="+a)*/

//Scopes of variables
//var Scopen        //Function level scope
/*
var x=10
function myfun(){
    var x=20
    x+=1
    console.log(x)
    if(true){
        var x=30
        x+=1
        console.log(x)
    }
    console.log(x)
}
myfun()
console.log(x)*/

//let_scope    //Block level scope
let x=10
function myfun(){
    let x=20
    x+=1
    console.log(x)
    if(true){
        let x=30
        x+=1
        console.log(x)
    }
    console.log(x)
}
myfun()
console.log(x)

//const scope      //Block level Scope
const y=10
function myfun(){
    const y=20
    console.log(y)
    if(true){
        const y=30
        console.log(y)
    }
    console.log(y)
}
myfun()
console.log(y)