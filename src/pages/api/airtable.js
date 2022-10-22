var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_API_KEY'}).base('appsWzk7HUwFP3BCO');

base('Emails').create([
  {
    "fields": {
      "Email": "simvolick@gmail.com",
      "Name": "Klim Yadrintsev"
    }
  },
  {
    "fields": {
      "Email": "simvolick@gmail.com",
      "Name": "Klim Yadrintsev"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});