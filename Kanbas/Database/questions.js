export default [
    {"_id": "qt101", "quiz": "Q101", "description": "How much is 2 + 2?", "type": "MultipleChoices", "points": "4",
    "answers":[ {"_id":"0", "type":"Possible Answer", "value":"3", "question":"qt101"}, {"_id":"1", "type":"Correct Answer", "value":"4"},
    {"_id":"3", "type":"Possible Answer", "value":"5"} ]},
    {"_id": "qt102", "quiz": "Q101", "description": "How much is 2 + 2 = 3?", "type": "TrueFalse", "points": "2",
    "answers":[ {"_id":"0", "type":"Correct Answer", "value":"False"}]},
    {"_id": "qt103", "quiz": "Q101", "description": "How much is 2 + 2 ____?", "type": "FillInBlanks", "points":"3",
    "answers":[{"_id":"0", "type":"Correct Answer", "value":"4"}, {"_id":"1", "type":"Correct Answer", "value":"four"},
    {"_id":"3", "type":"Correct Answer", "value":"4"}]},
    
    {"_id": "qt201", "quiz": "Q102", "description": "How much is 2 + 3?", "type": "MultipleChoices", "points": "5",
    "answers":[{"_id":"0", "type":"Possible Answer", "value":"3"}, {"_id":"1", "type":"Correct Answer", "value":"5"},
    {"_id":"3", "type":"Possible Answer", "value":"3"}]},
    {"_id": "qt202", "quiz": "Q102", "description": "How much is 2 + 3 = 5?", "type": "TrueFalse", "points": "8",
    "answers":[{"_id":"0", "type":"Correct Answer", "value":"True"}]},
    {"_id": "qt203", "quiz": "Q102", "description": "How much is 2 + 3 ____?", "type": "FillInBlanks", "points":"9",
    "answers":[{"_id":"0", "type":"Possible Answer", "value":"5"}, {"_id":"1", "type":"Correct Answer", "value":"five"},
    {"_id":"3", "type":"Possible Answer", "value":""}]}
]