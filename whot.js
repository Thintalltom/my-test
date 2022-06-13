let firstCard = getRandomCard()
let secondCard= getRandomCard()
let card= [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack= false
let isAlive= true

let message= document.getElementById('message')
let cardEl= document.getElementById('card')
console.log(cardEl)
card= sum;

//let rock= 1
//for(rock=0; rock<=100; rock++){
 //   console.log(rock)
//}



// in order to re assign and make the connsole log we declare a let variable called message and se
// to an empty screen
//re- assign value
function renderGame(){
    cardEl.textContent= 'cards:'
// how to add loop to a dom function
// in order to state when to use the i you state.length
for(i=0; i<card.length; i++){
    message.textContent= card[i]
}

//
 if (sum <= 20) {
     cardEl.textContent=  card[0] + card[1]
     message='do you want to draw a card?'
     
 } else if(sum ===21) {
     message='woohoo you can pull a card'
     hasBlackJack=true
 }
 else {
     message='you are out of the game'
     isAlive= false
 }
 }
 // how to make all this show on the secret 
 //how to work with array
// let featuredPost= ['my post and portfolio',
                   // 'my new things',
                    //'my presence in things']
//let education= ['primary education',
               // 'secondary education',
                //'university education']
//let experience= ['worked as a teacher',
               // 'worked with Appen']
//pizza= false;

//for(let i =0; i< 5;i +=1){
   // [1]
//}
        //console.log(experience[1]);
//let newMessage= 'i hate meat'
 //experience.push(newMessage)
//console.log(experience[3])
//how to add item to array you use 'push'
// to remove item in an array you use 'pop'


//working on FOR LOOP
let cards= [7,3,5]
 for( let i=0; i< cards.length; i++){
     console.log(cards[i])

 }
 //using for loop on DOM
 let sentence =['hello ', 'tomide ', 'mirabel ']
 let greet=document.getElementById('no')
 //.length must be added in order to make it add 
 for(i=0; i<sentence.length; i++){
     //to add artificial space 
     greet.textContent +=sentence[i] +" "
 }
 // how to return values in functions: we need to use an if statement
 //example for RETURN
 let player1Time= 10
 let player2Time= 18

 function getFastestRaceTime(){
     if(player1Time<player2Time){
         return player1Time
     }else if (player2Time< player1Time){
         return player2Time
     }else {
         return player1Time
     }
 }
 let race= getFastestRaceTime()
 console.log(race)
// create a function that store of invoke
// this example is written in order to show the return value 
// return value is basically made using the ifElse function
let player1= 102
let player2=113
function totalRacetime(){
    if(player1<player2){
        return player2
    }else if(player2<player1){
        return player1
    }else{
        return player1
    }
}
// this is also an example of return value
function getTotalRacetime(){
    return player1Time + player2Time
}
let totalTime= getTotalRacetime()
console.log(totalTime)
let show= totalRacetime()
console.log(show)
// this expression will not return value continously but only once
let no= 0;
for(let i=0; i<=100; i++){
    let no= i
}
console.log(no)
// how to generate a random number using JAVASCRIPT
// this is created using Math. this is provided by the javscript itself and can also be done all the things you see am wilding bruh
// math generates a random number including 0 and 1
let newNumber= Math.random() * 6
console.log(newNumber)
// math.floor can also be used
// in order to get a complete random number we need to multiply by the number we need
let newNumb= Math.floor(Math.random() * 7) + 1
console.log(newNumb)
// classwork create a function called rolldice() that returns a random card from 1 to 6
// return must be used in order to make it work 
// .floor is basically used to remove the point
function rolldice(){
    let newNumb= Math.floor(Math.random() * 7) + 1
    return newNumb
}
let nope = rolldice()
console.log(nope)
function getRandomCard(){
    let newNumb= Math.floor(Math.random() * 13) + 1
    return newNumb
}

 
 // creating an AND statment
let hasSolvedChallenge= false
let hasHintsLeft= false
function showSolution() {
    if(hasSolvedChallenge===false && hasHintsLeft===false){
        console.log('showing the solution')
    }
}
showSolution()
// creating an OR statement
let likeDocumentaries= true
let likeStartups= true
if (likeDocumentaries===true || likeStartups=== true){
    recommendMovies()
}
function recommendMovies(){
    console.log('hey check out this movie you will like it ')
}

//  how to create objects
// example
// objects gives you the ability to store complex data type and can also store object in objects
let grate= document.getElementById('greet')
console.log(grate)

let playerEl= {
    name: 'tomide',
    chip: 120
}
grate.textContent= playerEl.name + playerEl.chip

let course ={
    learn:'css grid',
    lessons: 16,
    creator: 'tomide',
    tag: ['html' ,'java']
}
grate.textContent= course.learn + "  ,  " + course.lessons + "   ,  " + course.creator + course.tag[0]

//READ in three numebrs and write them in sorted order
let no1= 5;
let no2= 10;
let no3= 8;
if (no1>=no2 && no3){
    console.log(no2, no1, no3);
} else if (no2>no1 && no3){
    console.log(no1, no3, no2);
}else if(no3>no2 && no1){
    console.log(no2, no1, no3);
}else{
    console.log(no1, no2, no3);
};

// let number=;
// input value
//condition of
// for(number=0; number<=100; number++)
// variable square = number mulitplied by number 
// print = square
let number =8;
let square= number * number;
for(i=0; i<=100; i++){
        let sum= square+(i+i);
    console.log(sum);
};
let user= 5;
let plus= user+user;
let sign= '-';
if(user>= 0){
    let plus= user+user;
    console.log(plus)
}else if(user=sign){
    let plus= user++;
    let result=plus;
    console.log(result)
}
let ctr1 = -1;
let ctr2 =-5;
 if(ctr1>=0 && ctr2>=0){
    console.log('no way');}
else if(ctr2>=-1){
    let add = ctr1 + ctr2;
    console.log(add);
}else if(ctr1>=-1){
    let add = ctr1 + ctr2;
    console.log(add);
};
let o= 10;
let p= 2;
let pq= p * p;
let kf= o * o;
let sq= kf + pq;
console.log(sq);

