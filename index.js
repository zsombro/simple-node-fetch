const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/data', (req, res) => {
    res.json({
        valami_id: 1,
        payload: ['dolog1', 'dolog2', 'dolog3']
    });
});

app.listen(8080, () => {
    console.log('listening at 8080');
});