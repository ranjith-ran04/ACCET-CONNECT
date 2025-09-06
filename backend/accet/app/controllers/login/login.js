const db = require('../../config/dbconnect');

async function Login(req,res){
    const {regno,aadhar}= req.body;
    console.log(req.body);

    if (!regno ||!aadhar) {
        return res.status(400).json({success: false, message: "No data provided"});
    }
    try{
        const query1=`select * from students where regno=${regno}`;
        const student=await db.query(query1,regno);
        if(student.length===0){
            return res.status(404).json({err:"No students found for that register number"})
        }
        const query2=`select * from students where regno=${regno} and aadhar=${aadhar}`;
        const[result]=await db.query(query2,[regno,aadhar]);
        if(result.length===0){
            return res.status(404).json({err:"Aadhar no is incorrect"})
        }
        return res.status(200).json({message:"Registration successfull"});
    }
    catch{
        return res.status(500).json({message:"server error"});
    }

}

module.exports=Login;