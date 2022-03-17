import React from 'react';


class Login extends React.Component
{
	userLoginURL="http://localhost:3000/webapi/userLogin"

	constructor(props)
	{
		super(props)
		this.state={
			islogin:0
		}
	}


	userLogin=()=>{
		var username=this.username.value
		var password=this.password.value
		//console.log(username+"----"+password)
		
		var api_url=this.userLoginURL+"?username="+username+"&password="+password
		
		fetch(api_url).then((response) =>{
		response.json().then((result)=>{
			if(result.token!='error')
			{
				localStorage.setItem('token',result.token)
				localStorage.setItem('_id',result.userDetails._id)
				localStorage.setItem('name',result.userDetails.name)
				localStorage.setItem('username',result.userDetails.username)
				localStorage.setItem('address',result.userDetails.address)
				localStorage.setItem('city',result.userDetails.city)
				localStorage.setItem('gender',result.userDetails.gender)
				localStorage.setItem('hobbies',result.userDetails.hobbies)
				localStorage.setItem('role',result.userDetails.role)
				localStorage.setItem('info',result.userDetails.info)
				if(result.userDetails.role=="admin")
				{
					this.setState({islogin:1})	
					alert("login success as admin")
				}
				else
				{
					this.setState({islogin:2})
					alert("login success as user")
					
				}	
			}
			else
			{
				alert('login failed')	
				this.username.value=""
				this.password.value=""
		 	}
		 }) 
		}).catch((err)=>{
			console.log(err)
		})
		
	}

    render(){
        return(

	<div>
<center>
<h2>Login Here!!!</h2>

<label>Username/Email</label>
<input type="text" name="username" ref={c=>this.username=c}/>
<br/><br/>

<label>Password</label>
<input type="password" name="password" ref={c=>this.password=c}/>
<br/><br/>

<button type="button" onClick={this.userLogin} >Login</button>



		

		
		
</center>
	</div>

        )
    }
}

export default Login;
