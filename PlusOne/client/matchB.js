// Pseuodo code for now !!!!!!!!!!!!!!!!!!!!!
// Created by Kevin Josey
// Last Modified 16 November 2017

// Code is loosely based on:
//	https://github.com/codingforentrepreneurs/matchmaker-2/blob/71f8828f77bf1c59a2c205ff986fe9c7c583325/src/matches/utils.py

// Ideally we use que so that users will only match with each other by game but 
//	this can still be general algorithm

// This version will match people within game choice and that's it, no other 
// inputs will be evaluated.

def get_matchB(user_a, user_b):
	//define q1 and q2 as parameter users
	q1 = Q(useranswer_user=user_a)
	q2 = Q(useranswer_user=user_b)
	// Will be 1 if they are searching for same game
	questions_in_common = 0
	//idk what this does
	question_set = Question.objects.filter(q1 | q2).distinct()
	// Not sure if we need for loop since we are just checking if they are searching
	// for the same game
	for question in question_set:
		try:
			a = UserAnswer.objects.get(user=user_a, question=question)
		except:
			a = None
		try:
			b = UserAnswer.objects.get(user=user_b, question=question)
		except:
			b = None
		if a and b:
			questions_in_common += 1
	if questions_in_common > 0:
		// In this scenario this is a match

		//Not sure how what to do from there

		

