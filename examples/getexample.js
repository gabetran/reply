var reply = require('./../');

var options = {
  country: {
    message: 'What country do you live in?',
    default: "United States"
  },
  timezone: {
    message: 'And your current timezone is?',
    default: "Pacific time"
  }
}

reply.get(options, function(err, answers){
  console.log('\n ==== Replies:\n');
  if (err) console.log(err);
  console.log(answers);
});