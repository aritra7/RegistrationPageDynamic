console.log('Person1: shows ticket')
console.log('Person2: shows ticket');
const wifeGettingTicket = async () => {
    const promiseWifeBringingTicket = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('2 tickets'),3000)
    })

    const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'))
    let ticket = await promiseWifeBringingTicket;

    console.log(`Wife: I have the ${ticket}`);
    console.log('Husband: we should go in');
    console.log('Wife: no I am hungry');
    let popcorn = await getPopcorn;
    
    console.log(`Husband: I got some ${popcorn}`);
    console.log('Husband: we should go in');
    console.log('Wife: I need butter on my popcorn');

    const getButter = new Promise((resolve, reject)=>resolve('butter'))
    let butter = await getButter;
    console.log(`Husband: I got some ${butter} on popcorn`);
    console.log('Husband: anything else?');
    console.log('Wife: Please get some cold drinks too.');
    const getColdDrinks = new Promise((resolve, reject)=>resolve('pespi'))
    let coldDrinks = await getColdDrinks;
    console.log(`Husband: yes, I got some ${coldDrinks}`);
    console.log('Husband: we should go in');
    console.log('Wife: Lets go, running late');
    console.log('Husband: Yeah, sure!');

    return ticket;
}
wifeGettingTicket().then((m)=>console.log(`Person3: shows ${m}`));
console.log('Person4: shows ticket')
console.log('Person5: shows ticket');