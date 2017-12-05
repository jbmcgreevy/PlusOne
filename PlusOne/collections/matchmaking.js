Matchmaking = new Mongo.Collection('matchmaking');

if (Meteor.isClient){
	Template.matchmaking.helpers({
		Matchmaking:function(){
			return Matchmaking.find();
		}
	});

	Template.matchmaking.events({
		'submit .matchmakingForm': function(event) {

			alert("Form submitted");
			
			var steaminput = event.target.steaminput.value;
			var gamechoice = event.target.game.value;
			var compchoice = event.target.playstyle.value;
			
			Matchmaking.insert({
				steaminput: steaminput,
				gamechoice: gamechoice,
				compchoice: compchoice

			});

			console.log("player inserted into collection.");

		    event.target.steaminput.value = "";

			return false;
		}
	});

	Template.match.helpers({
		players: function () {
			return Matchmaking.findOne();
		}
	});
}