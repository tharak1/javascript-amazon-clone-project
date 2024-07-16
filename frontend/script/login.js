

    const form1 = document.getElementById('form-login')
    form1.addEventListener('submit',login)

    async function login(event){
        event.preventDefault()
        
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        
        const obj = {
                email:email,
                password:password
        }
        console.log(obj);
        console.log(JSON.stringify(obj));
        const result = await fetch('http://localhost:5000/api/user/login',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        }).then(response => response.json())
        console.log(result.token);

        localStorage.setItem('token',result.token)
        //.then(response => console.log(response.token))
        //addtodev(result.token);
    }