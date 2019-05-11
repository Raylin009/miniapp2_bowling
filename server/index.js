const express = require('express');

const app = express();
const port = 3011;

app.use(express.static('/Users/raylin/Documents/hackreactor2019/ghrsea01-miniapp3/dist'));

app.listen(port, () => console.log(`Bowling appp listing on port ${port}`));
