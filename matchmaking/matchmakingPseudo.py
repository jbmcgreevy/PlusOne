# Pseuodo code for now !!!!!!!!!!!!!!!!!!!!!
# Created by Kevin Josey
# Last Modified 16 November 2017

# Ideally we use que so that users will only match with each other by game but 
#	this can still be general algorithm

def get_match(user_a, user_b):
	#define q1 and q2 as parameter users
	q1 = Q(useranswer_user=user_a)
	q2 = Q(useranswer_user=user_b)
	#idk what this does
	question_set = Question.objects.filter(q1 | q2).distinct()
	#points will keep track of how well they match
	a_points = 0
	b_points = 0
	a_total_points = 0
	b_total_points = 0
	combined_points = 0
	questions_in_common = 0
	#Here we check to see what game they wish to match with!
	if que.game == "CSGO":
		#retrieve CSGO answers from users
		for questions in question_set.CSGO:
			# Find their rank
			try:
				a1 = UserAnswer.objects.get(user=user_a, question=user_a.CSGO-Rank)
			# if they did not fill out CSGO form maybe take them out of matchmaking and make them
			#    fill out form???
			except:
				a1 = None
			try:
				b1 = UserAnswer.objects.get(user=user_b, question=user_b.CSGO-Rank)
			# Taking them back to form should only occur here and the comment above because they can't 
			#	stop filling out the form halfway, they either complete the CSGO form or didn't do it 
			#	at all
			except:
				b1 = None
			try:
				a2 = UserAnswer.objects.get(user=user_a, question=user_a.CSGO-Wins)
			except:
				a2 = None
			try:
				b2 = UserAnswer.objects.get(user=user_b, question=user_b.CSGO-Wins)
			except:
				b2 = None
		# See how well they match
		if a and b:
			questions_in_common += 1
			if a1.answer == b1.answer:
