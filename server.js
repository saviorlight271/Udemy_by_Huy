const express = require('express') ; 
const app = express();
app.use('/static',express.static(__dirname + '/public'));
const port = 3000;



//Cấu hình EJS
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/home", (req, res) => {
    res.render("login", {name:'huy'});
});

app.listen(port, function(){
    console.log("Your app running on port " + port);
})