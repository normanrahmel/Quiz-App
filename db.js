let questions = [{
        "question": "Wer hat HTML erfunden",
        "answer1": "Rolf Pfaff",
        "answer2": "Linus Torvalds",
        "answer3": "Tim Berners-Lee",
        "answer4": "Franz Alt",
        "rightAnswer": 3
    },
    {
        "question": "Wie alt war der jüngste Teilnehmer, der bei einer Fußball-WM Weltmeister wurde?",
        "answer1": "18",
        "answer2": "19",
        "answer3": "17",
        "answer4": "16",
        "rightAnswer": 3
    },
    /*

        {
            "question": "Wie viele Runden gibt es im Profiboxen höchstens?",
            "answer1": "10",
            "answer2": "13",
            "answer3": "14",
            "answer4": "12",
            "rightAnswer": 4
        },
        {
            "question": "Wie nennt man die dritthöchste Liga im deutschen Profifußball?",
            "answer1": "Regionalliga",
            "answer2": "Verbandsliga",
            "answer3": "3. Liga",
            "answer4": "Landesliga",
            "rightAnswer": 3
        },
        {
            "question": "Was bedeutet die Abkürzung DHB?",
            "answer1": "Deutscher Handballbund",
            "answer2": "Deutscher Hochsprungbund",
            "answer3": "Deutscher Schwersport",
            "answer4": "Deutscher Hockeybund",
            "rightAnswer": 1
        }, {
            "question": " Welche Nation gewann bei den Olympischen Spielen 2012 in London die meisten Goldmedaillen?",
            "answer1": "Deutschland",
            "answer2": "USA",
            "answer3": "Russland",
            "answer4": "China",
            "rightAnswer": 2
        },
        {
            "question": ": Wofür steht die Abkürzung UEFA?",
            "answer1": "United European Football Alliance",
            "answer2": "Union of European Football Associations",
            "answer3": "United European Football Associations",
            "answer4": "Union of European Football Alliance",
            "rightAnswer": 2
        },
        {
            "question": "Wer entwickelte die Rechenmaschine Analytical Engine",
            "answer1": "Charles Babbage",
            "answer2": "Konrad Zuse",
            "answer3": "Jörg Pfaff",
            "answer4": "Cedric Rahmel",
            "rightAnswer": 1
        },
        {
            "question": "wie heißt die programmiersprache des internets",
            "answer1": "C#",
            "answer2": "C++",
            "answer3": "Java",
            "answer4": "JavaScript",
            "rightAnswer": 4
        }*/
];
let currentQuestion = 0;

let rightQuestions = 0;

let audioSuccess = new Audio('Audio/success.mp3');

let audioWrong = new Audio('Audio/wrong.mp3');