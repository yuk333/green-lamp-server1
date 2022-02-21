//node는 Common JS를 사용함
//import할때 require를 사용

const http = require('http');
//127.0.0.1 localhost와 같다 내컴퓨터 주소를 의미함
const hostname = "127.0.0.1";
const port = 8080;

//서버만들기 createServer
const server = http.createServer(function(req,res){
    //요청되는 정보 req
    //응답하는 정보 res
    const path = req.url;
    const method = req.method;
    if( path === "/products") {
        if(method === "GET"){
            //응답을 보낼때 json객체타입를 해더에 보내겠다
            res.writeHead(200, { 'Content-Type':'application/json'})
            const products = JSON.stringify([
                {
                    name: "거실조명",
                    price : 50000
                }
            ])
            res.end(products);
        }else if(method=== "POST"){
            res.end("생성되었습니다.");
        }
    }
    console.log('요청하는 정보 : ', req);
})

//
server.listen(port, hostname);
console.log('그린 조명 서버 on!');