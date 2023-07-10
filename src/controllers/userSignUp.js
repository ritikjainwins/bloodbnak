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
    })
        if(!err){
        // console.log(req.body);
        res.status(201).send(req.body);
        }
    else
        // console.log(err);
        res.status(400).send(err)
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


  bloodBankRegistration = async(req,res) =>{
    const {id, user_id ,name,email,password,phone_no,address,logo,status,is_delete,created_by,update_by,created_at,update_at} = req.body;
    bcrypt.hash(password,10, function(err, hash) {
        // console.log(`${hash}`);
    connection.query(`INSERT INTO blood_bank (id, user_id,name,email,password,phone_no,address,logo,status,is_delete,created_by,update_by,created_at,update_at,last_donation_date) VALUES ('${id}','${user_id}','${name}', '${email}' ,'${hash}','${phone_no}','${address}','${logo}','${status}','${is_delete}','${created_by}','${update_by}','${created_at}','${update_at}')`,(err,rows)=>{
    })
        if(!err){
        //  console.log(req.body);
        res.status(201).send(req.body);
        }
    else
        // console.log(err);
        res.status(400).send(err)
    })
}

}


module.exports = new Registration();