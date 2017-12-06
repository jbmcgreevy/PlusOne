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

			});

			console.log("player inserted into collection.");

		    event.target.steaminput.value = "";

			return false;
		}
	});

	Template.match.helpers({
		players: function () {
			var player = Matchmaking.findOne({ 'user_id': {$ne : Meteor.userId()}, 'matched': false } );
			console.log(player);
			if (player) {
				Matchmaking.update(player._id, { $set: {matched: false } });
				return player;
			}
			else {
				alert("No players online! :(")
			}
			db.matchmaking.remove({qty: {$eq: steaminput}})
		}
	});
}