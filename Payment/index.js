//here we have to make different things/project like structure for different services as after we can connect them thru a single port!!
import  express  from "express";

const app = express();

 const PORT =3002;


 app.get("/",(req,res)=> {
    res.send("payment called")
})

app.get("/payment-details",(req,res)=> {
  let response = {
       data: {
        item : [
            {
                id:1,
                name: "Laptop payment"
            },
            {
                id:2,
                name: "SmartPhone payment"
            }
        ]
       }
  }
})

//listening on this port

app.listen(PORT, () => {
console.log(`Hii my server is listening on this port : ${PORT}`)
})