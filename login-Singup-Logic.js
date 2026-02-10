let userName = 'shiva@gmail.com';
let password =  'shiva123';
let store = [];

function singUp(userName, password){
    if(!userName || !password){
        console.log("Email and Password is missing")
        return
    }
    
    const userExists = store.find(
        user => user.userName === userName
        );
    
    if(userExists){
        console.log('userAlreay Exists')
        return
    }
    store.push({userName,password})
    console.log(store)
    
}
singUp(userName,password)


function login(userName,password){
    const user = store.find(
        user => user.userName === userName
        )
    if(!user){
        console.log('user Not found')
        return
    }
    if(user.password !== password){
        console.log('Invalid Password')
        return
    }
    
    console.log('Login successfull')
}
login(userName,password)
