const connection = require("../config/connectionDb");
var bcrypt = require('bcrypt');

class Registration{
    constructor(){
    }
    newUserRegistration = async(req,res) =>{
    const {id,name,email,password,phone_no,address,logo,role,dob,status,is_delete,created_by,update_by,created_at,update_at,last_donation_date} = req.body;
    bcrypt.hash(password,10, function(err, hash) {
        // console.log(`${hash}`);
    connection.query(`INSERT INTO users (id,name,email,password,phone_no,address,logo,role,dob,status,is_delete,created_by,update_by,created_at,update_at,last_donation_date) VALUES ('${id}','${name}', '${email}' ,'${hash}','${phone_no}','${address}','${logo}','${role}','${dob}','${status}','${is_delete}','${created_by}','${update_by}','${created_at}','${update_at}','${last_donation_date}')`,(err,rows)=>{
    
        if(!err){
        // console.log(req.body);
        console.log(rows);
        res.status(201).send(req.body);
        }
    else
        // console.log(err);
        res.status(400).send(err)
    })
})
}
  updateUserDetails = async(req,res)=>{
    // const {name,email,password,phone_no,address,logo,role,dob,status,is_delete,created_by,update_by,created_at,update_at,last_donation_date} = req.body;
    const user = req.body;
    connection.query('UPDATE users SET ?  WHERE id =' +user.id, [user] ,(err)=>{
        if(!err){
        // console.log(rows);
        res.status(200).send(req.body);
        }else
        res.status(400).send(err);
        // console.log(err); 

    })
  }

  getAllUsers = async(req,res)=>{
    // const user = req.body;
    connection.query("SELECT * FROM users WHERE is_delete = 0",(err,rows)=>{
        if(!err){
        // console.log(rows);
        res.status(200).send(rows);   
        }else
        res.status(400).send(err);
    })
  }

  getByIdUsers = async(req,res)=>{
    connection.query(`SELECT * FROM users WHERE id = '${req.params.id}' `,(err,rows,fields)=>{
        if(!err){
        // console.log(rows);
        res.send(rows);
        }else
        console.log(err);
    })
  }


  deleteUsers = async(req,res)=>{
    // const is_delete = req.body;
    connection.query(`UPDATE users SET is_delete = 1  WHERE id = '${req.params.id}' `,(err,rows)=>{
        if(!err){
        // console.log(rows);
        res.status(200).json({"user":"user account deleted successfully"});
        }else{
        console.log(err);
        }  
    })
  }
 

   bloodBankRegistration = async(req,res) =>{
    const {id, user_id ,name,email,password,phone_no,address,logo,status,is_delete,created_by,update_by,created_at,updated_at} = req.body;
    bcrypt.hash(password,10, function(err, hash){
        // console.log(`${hash}`);
    connection.query(`INSERT INTO blood_bank (id, user_id,name,email,password,phone_no,address,logo,status,is_delete,created_by,update_by,created_at,updated_at) VALUES ('${id}','${user_id}','${name}', '${email}' ,'${hash}','${phone_no}','${address}','${logo}','${status}','${is_delete}','${created_by}','${update_by}','${created_at}','${updated_at}')`,(err,rows)=>{
        if(!err){
        // console.log(req.body);
        // console.log(rows);
        res.status(201).send(req.body);
        }
    else
        // console.log(err);
        res.status(401).send(err)
    });
});
}


getAllBloodBank = async(req,res)=>{
    // const user = req.body;
    connection.query("SELECT * FROM blood_bank",(err,rows)=>{
        if(!err){
        // console.log(rows);
        res.status(200).send(rows);   
        }else
        res.status(400).send(err);
    })
  }



  updateBloodBankDetails = async(req,res)=>{
    const bloodbank = req.body;
    connection.query('UPDATE blood_bank SET ?  WHERE id =' +bloodbank.id, [bloodbank] ,(err)=>{
        if(!err){
        // console.log(rows);
        res.status(200).send(req.body);
        }else
        res.status(400).send(err);
        // console.log(err); 

    })
  }

  deleteBloodbank = async(req,res)=>{
    // const is_delete = req.body;
    connection.query(`UPDATE blood_bank SET is_delete = 1  WHERE id = '${req.params.id}' `,(err,rows)=>{
        if(!err){
        // console.log(rows);
        res.status(200).json({"user":"Blood bank account deleted successfully"});
        }else{
        console.log(err);
        }  
    })
  }


  getByIdBloodBank = async(req,res)=>{
    connection.query(`SELECT * FROM blood_bank WHERE id = '${req.params.id}' `,(err,rows,fields)=>{
        if(!err){
        // console.log(rows);
        res.send(rows);
        }else
        console.log(err);
    })
  }

}


module.exports = new Registration();