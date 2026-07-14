// const getUserVideos = (email)=>{
//     return new Promise((resolve, reject)=>{
//        setTimeout(() => {
//         resolve(["video1", "video2", "video3"]);
//        }, 2000);
//     });
// }
// const getVideoDetails = (video)=>{
//     return new Promise((resolve, reject)=>{
//        setTimeout(() => {
//         resolve({title: "video title"});
//        }, 2000);
//     });
// }


  const loginUserPromise  = (email, password) =>{
         return new Promise((resolve, reject)=>{
             const error = true;

             if(error){
                 reject(new Error("Error in login!"));
             }
             console.log("user logged!");
             resolve({email});
         })
     }

//     loginUserPromise("Fulano@gaml.com", "123456")
//     .then(
//     (user)=>{
//       console.log({user}); //callback recebe o sucesso
//     }
//     )
//     .catch((error)=>{
//         console.log(error);//callback trata o erro
//     })



// loginUserPromise("Fulano@gmail.com", "123456")
// .then((user)=> getUserVideos(user.email))
// .then((videos)=> getVideoDetails(videos[0]))
// .catch((error)=> console.log({error}));


// Promise.all

const yt = new Promise(resolve => {
    setTimeout(()=>{
        resolve("Videos from youtube!")
    },2000);
});
const fb = new Promise(resolve => {
    setTimeout(()=>{
        resolve("posts from facebook!")
    },2000);
});

Promise.all([yt, fb]).then((result)=>{
    console.log({result});
})