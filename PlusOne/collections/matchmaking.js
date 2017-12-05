Matchmaking = new Mongo.Collection('Matchmaking');

if (Meteor.isClient){
	Template.matchmaking.helpers({
		Matchmaking:function(){
			return Matchmaking.find();
		}
	});

	Template.matchmaking.events({
		'submit .new-resolution': function(event){
			
			var steaminput = event.target.steaminput.value;
			var gamechoice = event.target.game.value;
			var compchoice = event.target.playstyle.value;
			
			Matchmaking.insert({
				steaminput: steaminput,
				gamechoice: gamechoice,
				compchoice: compchoice

			});

			event.target.steaminput.value = "";

			return false;
		}
	});
}