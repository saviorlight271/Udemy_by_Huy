const express = require('express') ; 
const app = express();
app.use('/static',express.static(__dirname + '/public'));
const port = 3000;
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Cấu hình EJS
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/home", (req, res) => {
    res.render("home", {name:'huy'});
});

// Lấy giá trị nhập vào
app.post("/home", urlencodedParser ,(req, res) => {
    let user = req.body.username;
    let pass = req.body.password;
    res.send("Username:"+user + "Password:"+pass);
}); 
app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/signup/:id", (req, res) => {
    let i = req.params.id;
    res.send("Id là: " + i);
});

app.listen(port, function(){
    console.log("Your app running on port " + port);
})