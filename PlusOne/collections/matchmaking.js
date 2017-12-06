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
				user_id: Meteor.userId(),
				date: new Date(),
				with: ""

			});

			console.log("player inserted into collection.");

		    event.target.steaminput.value = "";

		    //db.log_events.createIndex( { "expireAt": 5}, {expireAfterSeconds: 60} )

			return false;
		}
	});

	Template.match.helpers({
		players: function () {
			var player = Matchmaking.findOne({ 'user_id': {$ne : Meteor.userId()}, 'matched': false },{reactive: false} );
			var my_account = Matchmaking.findOne({ 'user_id': Meteor.userId(), 'matched': false },{reactive: false} );
			console.log(player);
			if (player) {
				Matchmaking.update(player._id, { $set: {matched: true, with: my_account._id } });
				Matchmaking.update(my_account._id, { $set: {matched: true, with: player._id } });
				return player;
			}
			else {

				alert("No players online! Click to Refresh!")

			}
		}
	});
}