let token 
const form = document.getElementById('form-signup')
form.addEventListener('submit',register)
    async function register(event){
        event.preventDefault()
        
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        
        const obj = {
            username:username,
                email:email,
                password:password
        }
        console.log(obj);
        console.log(JSON.stringify(obj));


        const result = await fetch('http://localhost:5000/api/user/register',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        }).then(res => res.json())

        console.log(result.error);
        
        const obj1 = {
            username:username,
                email:email,
                password:password
        }

        const result1 = await fetch('http://localhost:5000/api/user/login',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(obj1),
        }).then(res => res.json())

        console.log(result1.token);
    }