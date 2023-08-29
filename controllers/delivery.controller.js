require("dotenv").config()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database : process.env.DB_NAME,
    port: process.env.DB_PORT
})

exports.IndexController = (req,res) => {

    db.query("SELECT * FROM `order_details`", (err, result) => {
        if (err) throw err;
        res.status(200).json({data:result})
    })

  }


  exports.IndexUpdateController = (req,res) => {

    console.log(req.body)
    console.log(req.params)

    db.query("UPDATE `order_details` SET ? WHERE id = ?",[req.body, req.params.id], (err, result) => {
        if (err) throw err;
        res.status(200).json({data:result})
    })

  }

  exports.IndexGetByIdController = (req,res) => {
    

    db.query("SELECT * FROM `order_details` WHERE id = ?",[req.params.id], (err, result) => {
      console.log(result)
        if (err) throw err;
        res.status(200).json({data:result})
    })

  }

exports.IndexDeleteController = (req,res)=>{

  db.query('DELETE FROM `order_details` WHERE `id` = ?', [req.params.id], (err, result) => {	
    if(err) throw err;
    res.status(200).json({data:result})
  });


}

exports.IndexPostController = (req, res) => {


    req.body.driver_skill = Math.floor(Math.random() * 100) + 1
    req.body.traffic_condition = Math.floor(Math.random() * 100) + 1

    const {
      sender_name,
      sender_type,
      mobile_number,
      item_type,
      num_pics,
      order_date,
      preferred_date,
      receiver_name,
      address,
      province,
      receiver_email,
      receiver_mobile,
      driver_skill,
      traffic_condition
    } = req.body; // Assuming you're sending the data in the request body


    let marks = 0
    if (driver_skill) { 
        marks +=  parseInt(driver_skill)
    }


    if(traffic_condition) {
        marks += parseInt(traffic_condition)
    }

    if(receiver_name && receiver_email && receiver_mobile) {
        marks += 100
    }



    const insertQuery = `
      INSERT INTO order_details (
        sender_name,
        sender_type,
        mobile_number,
        item_type,
        num_pics,
        order_date,
        preferred_date,
        receiver_name,
        address,
        province,
        receiver_email,
        receiver_mobile,
        driver_skill,
        traffic_condition,
        success
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)
    `;
  
    const params = [
      sender_name,
      sender_type,
      mobile_number,
      item_type,
      num_pics,
      order_date,
      preferred_date,
      receiver_name,
      address,
      province,
      receiver_email,
      receiver_mobile,
      driver_skill,
      traffic_condition,
      marks/3,
    ];
  
    db.query(insertQuery, params, (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(200).json({ message: "Data inserted successfully", insertId: result.insertId });
      }
    });
  };