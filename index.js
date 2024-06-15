const express = require('express')
const path = require("path")
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))

// app.get('/', function (req, res) {
//     console.log(req)
//   res.send('<h1>トップページ</h1>')
// })

app.post("/api/vi/quiz", function (req, res) {
    const answer = req.body.answer;
    if(answer === "2"){
        res.redirect("/correct.html")
    } else {
        res.redirect("/wrong.html")
}})

app.get('/about', function (req, res) {
    res.send('about')
  })

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("I am running")
})

console.log("最終行")