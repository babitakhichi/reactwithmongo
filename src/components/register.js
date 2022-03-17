import React from 'react';

class Register extends React.Component
{
    constructor(){
        super()
    }
	userRegisterURL="http://localhost:3000/webapi/userRegister"
	userRegister=()=>{
		var name=this.name.value
		var username=this.username.value
		var password=this.password.value
		var address=this.address.value
		var city=this.city.value
		var gender
		if(this.m.checked==true)
			gender="male"
		else
			gender="female"

		var hobbies=[]
		if(this.h1.checked==true)
		{
		 var h1=this.h1.value
		 hobbies.push(h1)
		}
		if(this.h2.checked==true)
		{
		 var h2=this.h2.value
		 hobbies.push(h2)
		}
		if(this.h3.checked==true)
		{
		 var h3=this.h3.value
		 hobbies.push(h3)
		}
		

		var api_url=this.userRegisterURL+"?name="+name+"&username="+username+"&password="+password+"&address="+address+"&city="+city+"&gender="+gender+"&hobbies="+hobbies
		
		fetch(api_url).then((response) =>{
		response.json().then((result)=>{
			console.log(result)
		 	alert('User register successfully...')
		 	this.name.value=""
		 	this.username.value=""
			this.password.value=""
			this.address.value=""
			this.city.value=""
			this.m.checked=false
			this.f.checked=false
		 	this.h1.checked=false
		 	this.h2.checked=false
		 	this.h3.checked=false
		 }) 
		}).catch((err)=>{
			console.log(err)
		})


	}		

	render(){
        return(
<div>
	<center>
<h2>Register Here!!!</h2>

<label>Name</label>
<input type="text" name="name" ref={c=>this.name=c} />
<br/><br/>

<label>Username/Email</label>
<input type="text" name="username" ref={c=>this.username=c}/>
<br/><br/>

<label>Password</label>
<input type="password" name="password" ref={c=>this.password=c}/>
<br/><br/>

<label>Address</label>
<textarea name="address" ref={c=>this.address=c}></textarea>
<br/><br/>

<label>City</label>
<select name="city" ref={c=>this.city=c}>
<option>Select city</option>
<option>Indore</option>
<option>Bhopal</option>
<option>Ujjain</option>
</select>
<br/><br/>

<label>Gender</label>
Male <input type="radio" name="m" value="male" ref={c=>this.m=c} />
&nbsp;&nbsp;
Female <input type="radio" name="f" value="female" ref={c=>this.f=c} />
<br/><br/>

<label>Hobbies</label>
Football <input type="checkbox" name="h1" value="football" ref={c=>this.h1=c} />
&nbsp;&nbsp;
Volleyball <input type="checkbox" name="h2" value="volleyball" ref={c=>this.h2=c} />
&nbsp;&nbsp;
Basketball <input type="checkbox" name="h3" value="basketball" ref={c=>this.h3=c} />
<br/><br/>

<button type="button" onClick={this.userRegister} >Register</button>

			
		

		

</center>
	</div>

        )
    }
}

export default Register;
