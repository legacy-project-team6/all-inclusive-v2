const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname +'/../all-inclusive/dist/all-inclusive'));



//Routes middlewares
app.use('/api/user', require('./routes/auth.js'));
app.use('/api/event',require('./routes/events.js'))
app.use('/api/company', require('./routes/company.js'));
app.use('/api/seller',require('./routes/company.js'))
app.use('/api/userevent',require('./routes/userevent.js'))
app.use('/api/message',require('./routes/messages.js'))





app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});