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
            // console.log('Post 3 created')
            updatePost()
            resolve(posts.push({...post, createdAt: new Date().getTime()}));
            // const error = false;
            // if(!error){
            //     resolve();
            // } else {
            //     reject('Error: Something went wrong!');
            // }
        },2000)
    }) 
}

function create4thPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log('Post 4 created')
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
            resolve(console.log('last activity time: ',userDetails.lastActivityDone))
        },1000)
    })
}

function updatePost(){
    Promise.all([createPost,create4thPost,updateLastUserActivityTime]).then(([createPostResolve,create4thPostResolve,updateLastUserActivityTimeResolve]) => (updateLastUserActivityTimeResolve()));
}