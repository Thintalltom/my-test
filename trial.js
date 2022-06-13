let show= document.getElementById('one')
let playerName= 'tomide';
let playerAge= 2;
if(playerName==='tiwa'|| playerAge===3){
    one.textContent='am a new boy'
}else if(playerName==='tiwa'|| playerAge=== 5){
    one.textContent='big boy'
} else{
    //one.textContent='yep'
}
// note when dealing with FOR LOOP USE ; also dont forget to use LET keyword in the statement
// note when dealing with IF LOOP USE ,
let co= 0
for ( let i=0; i<=100; i++){
 let co= i
}
console.log(co)
// OBJECT EXAMPLE
let tomideInfo={
    school: 'futminna',
    year: 200,
    family: 'adeyanju',

}
console.log(tomideInfo.year)
//
let studentName= 'tomide'
let studentClass= 'primary'
function studentInfo(){
    if(studentName==='tiwa'&& studentClass==='seconday'){
    return studentName
} else if(studentName!='tiwa'&& studentClass!='secondary'){
    return studentClass
} else{
    return studentClass}
}
let slow = studentInfo()
let increment= document.getElementById('add')
let low= document.getElementById('show')
let save= document.getElementById('display')
let clear= document.getElementById('clear')
console.log(slow)
let count= 0;
let reset= document.getElementById('rest')


increment.addEventListener('click', function increment(){
    count = count + 1;
   low.textContent= count
   
})
save.addEventListener('click', function save(){
    let xy= count + "_"
    clear.textContent+= xy
    low.textContent= 0
    count = 0 
})
//for(let i=0; i<100; i++){
  //  low.textcontent= count(i)
//}
let country= ['america', 'lagos', 'nigeria', 'usa']
console.log(country.pop())
console.log(country.push('brazil'))
console.log(country)
console.log(country.shift())
console.log(country.unshift('monaco'))
console.log(country)
Math.random()
const image= document.getElementById('image')

let one= 1;
let two = 2;
let sum = one + two
console.log(sum)
function addTogether(){
    if(one===1 && two===2){
        return sum
    }
}
let numbers = [1,2,3,4,5]
function getFirstValue(){
    return numbers[0]
}
console.log(getFirstValue())
let minutes= 5
let seconds = 60
function howMany(){
    if (minute=>1 && seconds===0){
        return minutes * seconds
    }
}
console.log(howMany())
// in order to retun a value in an array 
// you need to use .filter to express em out and provide a conditional statment
let countTrue= [true, false, false, false]
function countFale(){

  return countTrue.filter(x=> x===false)
}
console.log(countFale())
let stolen= 'sam';
let pet= 'dog';
let age= 200
function addName(){
    return stolen + ':' + age
}
console.log(addName())
let object ={
    name: 'tom',
    class: 'jss2'
}
function values(){
 return object.name+ ',' +object.class
  }

console.log(values())