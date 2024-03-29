let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/asos'));

app.get('/*', (req, resp) => {
  resp.sendFile(__dirname+'dist/asos/index.html');
});

app.listen(process.env.PORT || 8080);
