const express = require('express')

const app = express();
app.use(express.json())


app.post('/addition', (req, res) => {
    const { a, b } = req.body
    if ((typeof (a) !== "number") || (typeof (b) !== "number")) {
        res.status(500).send('value must be an integer')
        return
    }
    const data = a + b;
    const result = { data: data }
    res.status(200).send(result)
})
app.listen(3001, () => {
    console.log("app started")
})