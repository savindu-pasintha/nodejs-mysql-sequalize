var axios = require('axios');

async function getData(fetch_url) {
    var data = '';
    var config = {
        method: 'get',
        url: fetch_url,
        headers: {},
        data: data
    };

    var responseResult = [];
    await axios(config)
        .then(function (response) {
            responseResult = response;
            //console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    return responseResult
}

module.exports = { getData: async (fetch_url) => { return await getData(fetch_url); } }