

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



// loginUserPromise("Fulano@gmail.com", "123456")
// .then((user)=> getUserVideos(user.email))
// .then((videos)=> getVideoDetails(videos[0]))
// .catch((error)=> console.log({error}));


const dispalyUser = async ()=>{
    try{
    const user = await loginUser("fulano@gmail", "123456");
    const videos = await getUserVideos(user.email);
    const videoDetails = await getVideoDetails(videos[0]);
    console.log({videoDetails});
    } catch(error){
        console.log({error});
    }
};
