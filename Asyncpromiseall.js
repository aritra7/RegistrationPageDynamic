const posts = [
    {title: 'Post 1' , body: 'This is post one', createdAt: new Date().getTime()},
    {title: 'Post 2' , body: 'This is post two', createdAt: new Date().getTime()}
]
let intervalId;

function getPosts(){
    clearInterval(intervalId)
    setInterval(()=>{
        setTimeout(() =>{
            let li = '';
            posts.forEach((post)=>{
                li += `<li>${post.title} : ${post.body} <i>last updated ${Math.floor((new Date().getTime() - post.createdAt)/1000)} seconds ago</i></li>`
            })
            document.body.innerHTML = li;
        },1000)
    })
    
}

function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            updatePost()
            resolve(posts.push({...post, createdAt: new Date().getTime()}));
        },2000)
    }) 
}

function create4thPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            updatePost()
            resolve(posts.push(post))
        },3000)
    })
}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(posts.length>0){
            resolve(posts.pop());
        } else {
            reject('Delete Post: Array is empty, nothing to delete')
        }
        },1500)
    })
}
const userDetails = {
    username: 'Aritra',
    lastActivityDone : ''
}

createPost({title: 'Post 3', body:'This is post three'})
.then(()=>{
    getPosts()
    deletePost().then(()=>{
        getPosts();
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                getPosts();
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log('Inside catch block',err)
                })
            })
        })
    })
})
.catch(err => console.log(err))

create4thPost({title: 'Post 4', body: 'This is post four'})
.then(()=>{
    getPosts()
    deletePost().then(()=>{})
    .catch((err2)=>{
        console.log('inside 4th post',err2)
    })
})
.catch((err2)=> console.log(err2));

let updateLastUserActivityTime = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            userDetails.lastActivityDone = new Date();
            resolve(userDetails.lastActivityDone)
        },1000)
    })
}

async function updatePost(){
    let [createPostResolve,create4thPostResolve,updateLastUserActivityTimeResolve] = await Promise.all([createPost,create4thPost,updateLastUserActivityTime])
    console.log('last activity time: ',updateLastUserActivityTime())
}

/*
function buycar(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('buy a car');

        },10000)
    })
}

function planatrip(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('let us go to manali');
            
        },2000)
    })
}

function reachmanali(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('reached manali');
            
        },2000)
    })
}

function gotofamous(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('let us go to mall road');
            
        },2000)
    })
}

// with promises
buycar().then((res)=>{
    console.log(res);
    planatrip().then((res)=>{
        console.log(res);
        reachmanali().then((res)=>{
            console.log(res);
            gotofamous().then((res)=>{
                console.log(res);
            })
        })
    })
})

// with async/await
async function vacation(){
    try{
        const msg1=await buycar();
        console.log(msg1);
        const msg2=await planatrip();
        console.log(msg2);
        const msg3=await reachmanali();
        console.log(msg3);
        const msg4=await gotofamous();
        console.log(msg4);
    }catch(err){
        console.log(err);
    }

}

vacation();
*/