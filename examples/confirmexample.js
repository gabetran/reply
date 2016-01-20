var reply = require('./../');

reply.confirm('You were defeated! Do you wish to try again?', function(err, yes){

  if (!err && yes)
    console.log("Don't give up! Get ready! Fight!");
  else
    console.log("You lose. Game over.");

});
