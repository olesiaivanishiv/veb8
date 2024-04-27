const express = require('express');
const app = express();
const port = 5008; 

app.use(express.static('public'));

app.get('/math', (req, res) => {
  const A = Number(req.query.paramA);
  const B = Number(req.query.paramB);
  const C = Number(req.query.paramC);

  let result = 1 / Math.sqrt(A) + Math.log(B, A);

  if (C < 10) {
    result -= C;
  } else if (C > 10) {
    result += C;
  }

  res.send(`Result: ${result}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
