//here we have to make different things/project like structure for different services as after we can connect them thru a single port!!
import express from "express";

const app = express();

const PORT = 3001;


app.get("/",(req,res)=> {
    res.send("order called")
})
app.get("/order-details", (req, res) => {
  let response = {
    data: {
      item: [
        {
          id: 1,
          name: "Laptop",
        },
        {
          id: 2,
          name: "SmartPhone",
        },
      ],
    },
  };
  res.status(200).json(response);
});

//listening on this port

app.listen(PORT, () => {
  console.log(`Hii my server is listening on this port : ${PORT}`);
});
