"use strict";

let NUMBER = 5;
let NUMBER_OF_QUESTIONS = 0;
const questionDataBase = [
    {
        options: ["a", "b", "c"],
        correctAnswer: 1,
        title: "پایتخت چین؟",
    },
    {
        options: ["bc", "bc", "bc"],
        correctAnswer: 1,
        title: "کشور آرژانتین در کدام قاره قرار دارد؟",
    },
    {
        correctAnswer: 1,
        options: ["bc", "bc", "bc"],

        title: "کدام کشور دارای بیشترین ذخائر نفتی دنیاست؟",
    },
    {
        correctAnswer: 1,
        options: ["bc", "bc", "bc"],

        title: "شرقی ترین کشور جهان؟",
    },
    {
        correctAnswer: 1,
        options: ["abc", "abc", "abc"],

        title: "پایتخت آلمان؟",
    },
    {
        correctAnswer: 1,
        options: ["abc", "abc", "abc"],

        title: "کشور فرانسه در کدام قاره قرار دارد؟",
    },
    {
        correctAnswer: 1,
        options: ["abc", "abc", "abc"],

        title: "آمریکا دارای چند ایالت است؟",
    },
    {
        correctAnswer: 1,
        options: ["abc", "abc", "abc"],

        title: "پایتخت مصر؟",
    },
    {
        correctAnswer: 1,
        options: ["abc", "abc", "abc"],

        title: "بزرگترین اقیانوس دنیا؟",
    },
    {
        correctAnswer: 1,
        options: ["abc", "abc", "abc"],

        title: "کشور مکزیک در کدام قاره قرار دارد؟",
    },
    {
        correctAnswer: 1,
        options: ["abc", "b", "b"],

        title: "پایتخت عربستان سعودی؟",
    },
    {
        correctAnswer: 1,
        options: ["b", "b", "b"],

        title: "پایتخت ایالات متحده؟",
    },
    {
        correctAnswer: 1,
        options: ["abc", "abc", "abc"],

        title: "کدام کشور زیر واقع در قاره آفریقاست؟",
    },
    {
        correctAnswer: 1,
        options: ["bc", "ab", "abc"],

        title: "پر جمعیت ترین کشور جهان؟",
    },
    {
        correctAnswer: 1,
        title: "پهناور ترین کشور جهان؟",
        options: ["abc", "ab", "abc"]
    },
];
const startButton = document.querySelector(".startExam")
const numberOfQuestionsInput = document.querySelector("#numberOfQuestions")
const questionsContainerElement = document.querySelector(".questions__container")

numberOfQuestionsInput.addEventListener("change", (e) => {
    NUMBER_OF_QUESTIONS = Number(e.target.value)
})
startButton.addEventListener("click", () => {
    if (NUMBER_OF_QUESTIONS > 15) return
    const generateRandomIndex = () => { }
    let usedIndexes = []
    let tempArr = []

    for (let i = 0; i < NUMBER_OF_QUESTIONS; i++) {
        let randomIndex = Math.floor(Math.random(15) * NUMBER_OF_QUESTIONS);
        if (usedIndexes.includes(randomIndex)) {
            i--;
        } else {
            usedIndexes.push(randomIndex)
            tempArr.push(questionDataBase[randomIndex])
        }
    }
    tempArr.forEach((question) => {
        
        questionsContainerElement.appendChild()
    })


})













// const correctAnswerDataBase = [
//     "پکن",
//     "آمریکای جنوبی",
//     "ونزوئلا",
//     "ژاپن",
//     "برلین",
//     "اروپا",
//     "52",
//     "قاهره",
//     "آرام",
//     "آمریکای شمالی",
//     "ریاض",
//     "واشینگتن",
//     "سنگال",
//     "چین",
//     "روسیه",
// ];
