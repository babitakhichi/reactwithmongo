const db = require("./connection")

function indexModel()
{

    this.userRegister=(userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection('register').find().sort({'_id':-1}).toArray((err,result)=>{
                if(err)
                    reject(err)
                else
                {
                    var _id
                    if(result.length==0)
                        _id=1
                    else
                        _id=result[0]._id+1    
                }
                
                var flag=0
                for(let row of result)
                {
                    if(row.username==userDetails.username)
                    {
                        flag=1
                        break
                    }        
                }                
                
                if(flag==0)
                {
                 userDetails._id=_id
                 userDetails.status=1
                 userDetails.role="user"
                 userDetails.info=Date()
                 db.collection('register').insertOne(userDetails,(err,result)=>{
                    if(err)
                        reject(err)
                    else
                        resolve(flag)            
                 })
                }
                else
                    resolve(flag)     
                
            })
            
        })                    
    }

    this.userLogin=(userDetails)=>{
        userDetails.status=1
		return new Promise((resolve,reject)=>{
			db.collection('register').find(userDetails).toArray((err,result)=>{
				err ? reject(err) : resolve(result)
			})
		})	
	}	

}

module.exports=new indexModel()