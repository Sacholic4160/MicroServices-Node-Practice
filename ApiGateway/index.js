import express from "express";
import gateway from "fast-gateway";

const PORT = 9001;

//authorization code
const checkAuth = (req, res, next) => {
  if (req.headers.token && req.headers.token != "") {
    next();
  } else {
    res.setHeader("Content-type", "application/json");
    res.statusCode = 400;
    res.end(
      JSON.stringify({
        status: 401,
        message: "Authentication Failed , No token provided",
      })
    );
  }
};

const server = gateway({
    // middlewares: [checkAuth],   here if we have to check authentication for all the services then we can use it outside the routes!!
  routes: [
    {
      prefix: "/order",
      target: "http://localhost:3001/",
      hooks: {},
    },
    {
      prefix: "/payment",
      target: "http://localhost:3002/",
      middlewares: [checkAuth],
      //methods: ["POST" ]   we can give specific methods which we want to use and aside from this method  all the methods will be blocked/or not executed!!
      hooks: {},
    },
  ],
});

server.get("/mytesting", (req, res) => {
  res.send("yes you called the api gateway!!");
});

server
  .start(PORT) //.then(server=> {
//     console.log('api gateway is running at port no 4001')
//   })
.then( (req, res) => {
    console.log(`Hii the api gateway is listening on this port : ${PORT}`);
  })
  .catch("err", (error) => {
    console.log(`something error occured while starting the server : ${error}`);
  });
