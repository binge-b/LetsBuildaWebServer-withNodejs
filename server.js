const http = require("http");
const PORT = 8000;
const html = require("fs".readFileSync("index.html"));
// webサーバーを作ろう！

// createServer()メソッドの引数にはリクエストを受け取った際に行う処理を関数化して記述
const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write(html);
    res.end();

    if (req.method == "GET") {

    }

    if (req.method == "POST") {

    }
});

server.listen(PORT, () => {
    console.log("server running!")
});