const form=[...document.querySelector('.form').children];
form.forEach((item,i)=>{
    setTimeout(() => {
        item.style.opacity=1;
    }, i*100);
})
const fname=document.querySelector('.name')|| null;
const email=document.querySelector('.email');
const password = document.querySelector('.password');
const submit=document.querySelector('.submit');


if(fname==null){

}else{
    submit.addEventListener('click',()=>{
         console.log("hi")
        fetch('/register-user',{
            method:'post',
            headers:new Headers({'content-type':'application/json'}),
            body: JSON.stringify({
                name:fname.value,
                email:email.value,
                password:password.value
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.fname){
                alert("Registered")
            }else{
                alert(data)
            }
        })
    })
    
}
// // form loading animation

// const form = [...document.querySelector('.form').children];

// form.forEach((item, i) => {
//     setTimeout(() => {
//         item.style.opacity = 1;
//     }, i*100);
// })

// window.onload = () => {
//     if(sessionStorage.name){
//         location.href = '/';
//     }
// }

// // form validation

// const fname = document.querySelector('.name') || null;
// const email = document.querySelector('.email');
// const password = document.querySelector('.password');
// const submit = document.querySelector('.submit');

// if(fname == null){ // means login page is open
//     submit.addEventListener('click', () => {
//         fetch('/login-user',{
//             method: 'post',
//             headers: new Headers({'Content-Type': 'application/json'}),
//             body: JSON.stringify({
//                 email: email.value,
//                 password: password.value
//             })
//         })
//         .then(res => res.json())
//         .then(data => {
//             validateData(data);
//         })
//     })
// } else{ // means register page is open

//     submit.addEventListener('click', () => {
//         fetch('/register-user', {
//             method: 'post',
//             headers: new Headers({'Content-Type': 'application/json'}),
//             body: JSON.stringify({
//                 name: fname.value,
//                 email: email.value,
//                 password: password.value
//             })
//         })
//         .then(res => res.json())
//         .then(data => {
//             validateData(data);
//         })
//     })

// }

// const validateData = (data) => {
//     if(!data.name){
//         alertBox(data);
//     } else{
//         sessionStorage.name = data.name;
//         sessionStorage.email = data.email;
//         location.href = '/';
//     }
// }

// const alertBox = (data) => {
//     const alertContainer = document.querySelector('.alert-box');
//     const alertMsg = document.querySelector('.alert');
//     alertMsg.innerHTML = data;

//     alertContainer.style.top = `5%`;
//     setTimeout(() => {
//         alertContainer.style.top = null;
//     }, 5000);
// }