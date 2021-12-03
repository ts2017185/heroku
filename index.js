const express = require('express')
require('custom-env').env(true)

const app = express()

app.get('', (req, res) => {
    res.status(200).send('ok!')
})

app.listen(process.env.PORT, () => {
    console.log(`Running at port ${process.env.PORT}`)
})