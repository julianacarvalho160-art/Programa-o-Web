// ASYNC AWAIT

// Chamadas para APIs, interações com banco de dados
// Callbacks, promises, promises com async/await


// Situaçao 1: Requisição para Api para logar um usuario

//     const loginUser = (email, password) =>{
//      setTimeout(()=>{
//       //execução do código depois de 1,5 seg. Permite um intervalo de tempo até a requisiçãço chegar a API.
//     console.log('User logged!');
//      return {email};
//     },1500);
//     console.log("after setTimeout");
// };

// const user = loginUser('Fulano@gmail.com',  '123456');
//     console.log({user});

// Saída: after setTimeout
//        {user: undefined}
//        user logged!





// const loginUser = (email, password, callback) =>{
//     setTimeout(()=>{
//      //execução do código depois de 1,5 seg. Permite um intervalo de tempo até a requisiçãço chegar a API.
//      console.log('user logged!')
//     //  return {email};
//      callback({ email });
     
//     },1500);
//     console.log("after setTimeout");
// };

// const user = loginUser('Fulano@gmail.com',  '123456', (user) =>{
//     console.log({user})
// });
// Saída: after setTimeout
//        user logged!
//       dados do user






// const loginUser = (email, password, onSucess, onError)=>{
//     setTimeout(()=>{
//       const error = false;
//     //   true

//       if(error){
//         return onError(new Error("Error in login!"));
//       }

//      console.log("User logged!");
//      onSucess({email})
//     }, 1500);
//     console.log("After timeOut!");
// };

// const user = loginUser(
//     "Fulano@gmail.com", 
//     "1233456", 
//     (user)=> {
//         console.log({ user });
//     }, 
//     (Error)=>{
//         console.log({Error});
//     });
    // Saída: after setTimeout
//        user logged!
//       dados do user






// const loginUser = (email, password, onSucess, onError)=>{
//     setTimeout(()=>{
//       const error = false;
//     //   true

//       if(error){
//         return onError(new Error("Error in login!"));
//       }

//      console.log("User logged!");
//      onSucess({email})
//     }, 1500);
// };

// const getUserVideos = (email, callback) =>{
//     setTimeout(() =>{
//        callback(["video1", "video2", "video3"]);
//     },2000);
// }

// const user = loginUser(
//     "Fulano@gmail.com", 
//     "1233456", 
//     (user)=> {
//        getUserVideos(user.email, (videos)=>{
//        console.log({videos});
//     });
//     }, 
//     (Error)=>{
//         console.log({Error});
//     });
    // Saída: after setTimeout
//       videos

// CALLBACK H***
const loginUser = (email, password, onSucess, onError)=>{
    setTimeout(()=>{
      const error = false;
    //   true

      if(error){
        return onError(new Error("Error in login!"));
      }

     console.log("User logged!");
     onSucess({email})
    }, 1500);
};

const getUserVideos = (email, callback) =>{
    setTimeout(() =>{
       callback(["video1", "video2", "video3"]);
    },2000);
}
const getVideoDetails = (video, callback) =>{
    setTimeout(() =>{
       callback({title: "video title"});
    },2500);
};

const user = loginUser(
    "Fulano@gmail.com", 
    "1233456", 
    (user)=> {
       getUserVideos(user.email,(videos)=>{
        console.log({videos});
      getVideoDetails(videos[0], (videoDetails)=>{
        console.log({videoDetails});
      });
    }), 
},
    (error)=>{
        console.log({Error});
    }
);
    // Saída: after setTimeout
//       videos




// Função assincrona: Função que é programada para ser executada um tempo mais tarde, depois que uma ação for feita. O programador define o momento em que a função seja executada e aí quando essa açao é feita, a função entra em execução tantos segundos depois. Como o setTimeout que fará a ação de esperar 1,5 seg, e só então ele entra em execução. 

// O javascript não espera o setTimeout terminar de esperar os 1.5 seg, depois ser executado para continuar a seguir o fluxo do programa, ele começa a executar, vê que o setTimeout vai demorar deixa ele em execução e em paralelo vai executando outros coisas junto enquanto espera o setTieout terminar.

// A consequência disso é uma resposta tardia do código, o que pode retornar em um momento posterior e atrapalhar o fluxo do programa.



// Como resolver isso? Usando a função callback: Passa como parâmetro um valor, e ele será retornado depois que a função assincrona terminar, ou seja, a função que demora para ser executada, entra em excução e com o callback você programa o retorno da função para depois que ela terminar.. 