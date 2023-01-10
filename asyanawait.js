// 
console.log('Person1: shows ticket')
console.log('Person2: shows ticket');

const promiseWifeBringingTicket = new Promise((resolve,reject)=>{
    // console.log('Person3: promise to show tickets after wife brings');
    setTimeout(()=>{
        resolve('2 tickets');
    },3000)
    
})
const getPopcorn = promiseWifeBringingTicket.then((t)=>{
    console.log('Wife: I have the tickets');
    console.log('Husband: we should go in');
    console.log('Wife: no I am hungry');
    return new Promise((resolve, reject)=>{
        resolve(`${t} popcorn`);
    })
})
const getButter = getPopcorn.then((t)=>{
    console.log('Husband: I have some popcorn');
    console.log('Husband: we should go in');
    console.log('Wife: I need butter on my popcorn');
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`);
    })
})
const getColdDrinks = getButter.then((t)=> {
    console.log('Husband: I got butter on your popcorn');
    console.log('Husband: we should go in');
    console.log('Wife: No I need some cold drinks too');
    return new Promise((resolve,reject)=>{
        resolve(`${t} & cold drinks`)
    })
})

getColdDrinks.then((t)=>console.log('then they walks in with',t))
console.log('Person4: shows ticket')
console.log('Person5: shows ticket');