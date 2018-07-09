var axios = require('axios');
var data = require('../resources/contacts.json')

exports.data = async (req, res) => {
    res.json(data);
}
