import request from "request";

var country = 'in'
var year = '2024'
request.get({
  url: 'https://api.api-ninjas.com/v1/holidays?country=' + country + '&year=' + year,
  headers: {
    'X-Api-Key': 'hwtUa6Kmrp1g/1AZ5yZM4Q==n3cCIUDxjagi0CsA'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});