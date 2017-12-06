Matchmaking = new Mongo.Collection('matchmaking');

if (Meteor.isClient){
	Template.matchmaking.helpers({
		Matchmaking:function(){
			return Matchmaking.find();
		}
	});

	Template.matchmaking.events({
		'submit .matchmakingForm': function(event) {

			
			var steaminput = event.target.steaminput.value;
			var gamechoice = event.target.game.value;
			var compchoice = event.target.playstyle.value;
			
			Matchmaking.insert({
				steaminput: steaminput,
				gamechoice: gamechoice,
				compchoice: compchoice,
				matched: false,
				user_id: Meteor.userId()
				//db.matchmaking.remove({qty: {$eq: steaminput}})

			});

			console.log("player inserted into collection.");

		    event.target.steaminput.value = "";

		    //db.log_events.createIndex( { "expireAt": 5}, {expireAfterSeconds: 60} )

			return false;
		}
	});

	Template.match.helpers({
		players: function () {
			var player = Matchmaking.findOne({ 'user_id': {$ne : Meteor.userId()}, 'matched': false } );
			console.log(player);
			if (player) {
				Matchmaking.update(player._id, { $set: {matched: false} });
				return player;
			}
			else {
<<<<<<< HEAD
				alert("No players online! Please wait")
=======
				alert("No players online! Click to Refresh!")
>>>>>>> cf47c20d3b7217a4f98de1e4733c0a2d630cda90
			}
		}
	});
}