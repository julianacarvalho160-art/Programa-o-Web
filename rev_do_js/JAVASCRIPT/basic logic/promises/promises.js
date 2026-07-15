// Promise:
// Função assincrona: Função que é programada para ser executada um tempo mais tarde, depois que uma ação for feita. O programador define o momento em que a função seja executada e aí quando essa açao é feita, a função entra em execução tantos segundos depois. Como o setTimeout que fará a ação de esperar 1,5 seg, e só então ele entra em execução. 

// O javascript não espera o setTimeout terminar de esperar os 1.5 seg, depois ser executado para continuar a seguir o fluxo do programa, ele começa a executar, vê que o setTimeout vai demorar deixa ele em execução e em paralelo vai executando outros coisas junto enquanto espera o setTieout terminar.

// A consequência disso é uma resposta tardia do código, o que pode retornar em um momento posterior e atrapalhar o fluxo do programa.

// Como resolver isso? Usando a função callback: Passa como parâmetro um valor, e ele será retornado depois que a função assincrona terminar, ou seja, a função que demora para ser executada, entra em execução e com o callback você programa o retorno da função para depois que ela terminar.. 

function sum(a, b){
    return a + b;
}
console.log(sum(3, 2));

//Função com chamada de recurso externo: Serviros/API, sem tempo definido para a chegada da resposta, pode demorar ou não, a função assíncrona entra aqui.

// Exemplo 1 -> App de carro por aplicativo 
function requestCar(driversDispo){
    return new Promise((resolve, reject)=>{
       if(driversDispo > 0){
        return resolve("Seu motorista está a caminho!")
       }else{
        return reject("Não há motoristas dispoíveis!")
       }
    })
}
// Resolve -> c/ sucesso
// Reject -> c/ falha

// FORMA 1: TRATANDO "NA MÃO"
function main(){
    let drivers = 2;
    const request = requestCar(drivers);

    // Se sucesso:
    request.then((text)=>{
        console.log("Promessa concluída!", text);
    })
    // Se erro
    .catch((err)=>{
       console.log("Promessa rejeitada!", err);
    })
    // Independente do resultado
    .finally(()=>{
        console.log("Fim da promessa!");
    })
}

// FORMA 2: c/ async/await + tratando direitinho
async function main(){
    let drivers = 2;
    const request = await requestCar(drivers).catch(() => null); //catch -> promisse rejeiitada retorna null

    // Verificação
    if(!request){
        console.log("Erro"); //promisse rejeitada
        return;
    }
    console.log(request) //promisse concluída com sucesso!

    console.log(request);
}

main();

// Exemplo 2
function getRandom(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(Math.random() * 30)
        }, 3000)
    })
}
async function main(){
   console.log("Início do programa")
   getRandom().then(value =>{
    console.log(value)
   })
   console.log("Fim do programa");
}
main();

// Exemplo 3
import {setTimeout} from "node:timers/promises";
async function getNumber(){
    return 5;
}

async function main () {
    console.log("Início do programa");
    const value = await getNumber ();
    console.log(value + 1)
}
main();

// Exemplo 4: Requisição para Api para logar um usuario

// FORMA 1:
    const loginUser = (email, password) =>{
     setTimeout(()=>{
      //execução do código depois de 1,5 seg. Permite um intervalo de tempo até a requisição chegar a API.
    console.log('User logged!');
     return {email};
    },1500);
    console.log("after setTimeout");
};

const user = loginUser('Fulano@gmail.com',  '123456');
    console.log({user});

// Saída: after setTimeout
//        {user: undefined}
//        user logged!




// FORMA 2:
const loginUser = (email, password, callback) =>{
    setTimeout(()=>{
     //execução do código depois de 1,5 seg. Permite um intervalo de tempo até a requisiçãço chegar a API.
     console.log('user logged!')
    //  return {email};
     callback({ email });
     
    },1500);
    console.log("after setTimeout");
};

const user = loginUser('Fulano@gmail.com',  '123456', (user) =>{
    console.log({user})
});
// Saída: after setTimeout
//        user logged!
//       dados do user

// FORMA 3: COM TRY/CATCH
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
    console.log("After timeOut!");
};

const user = loginUser(
    "Fulano@gmail.com", 
    "1233456", 
    (user)=> {
        console.log({ user });
    }, 
    (Error)=>{
        console.log({Error});
    });
    // Saída: after setTimeout
//        user logged!
//       dados do user


// FORMA 4: 
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

const user = loginUser(
    "Fulano@gmail.com", 
    "1233456", 
    (user)=> {
       getUserVideos(user.email, (videos)=>{
       console.log({videos});
    });
    }, 
    (Error)=>{
        console.log({Error});
    });
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
    (user) => {
       getUserVideos(user.email,(videos)=>{
        console.log({videos});
      getVideoDetails(videos[0], (videoDetails)=>{
        console.log({videoDetails});
      });
    }), 
    },
    (error) =>{
        console.log({Error});
    }
);
    // Saída: after setTimeout

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



