export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface QuizSet {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const quizSets: QuizSet[] = [
  {
    id: "basics",
    title: "Bitcoin Basics",
    description: "Fundamental concepts about Bitcoin",
    questions: [
      {
        id: 1,
        question: "Who created Bitcoin?",
        options: [
          "Elon Musk",
          "Satoshi Nakamoto", 
          "Vitalik Buterin",
          "Bill Gates"
        ],
        correct: 1,
        explanation: "Bitcoin was created by the pseudonymous Satoshi Nakamoto in 2008."
      },
      {
        id: 2,
        question: "What is the maximum supply of Bitcoin?",
        options: [
          "100 million",
          "21 million",
          "50 million", 
          "Unlimited"
        ],
        correct: 1,
        explanation: "Bitcoin has a fixed maximum supply of 21 million coins."
      },
      {
        id: 3,
        question: "What technology underlies Bitcoin?",
        options: [
          "Artificial Intelligence",
          "Blockchain",
          "Cloud Computing",
          "Machine Learning"
        ],
        correct: 1,
        explanation: "Bitcoin operates on blockchain technology, a distributed ledger system."
      },
      {
        id: 4,
        question: "What is Bitcoin mining?",
        options: [
          "Digging for physical coins",
          "Trading Bitcoin on exchanges",
          "Validating transactions and securing the network",
          "Creating Bitcoin wallets"
        ],
        correct: 2,
        explanation: "Bitcoin mining involves validating transactions and securing the network through computational work."
      }
    ]
  },
  {
    id: "advanced",
    title: "Bitcoin Advanced",
    description: "Deeper Bitcoin concepts and economics",
    questions: [
      {
        id: 1,
        question: "What happens to Bitcoin mining difficulty?",
        options: [
          "It stays constant forever",
          "It adjusts every 2016 blocks",
          "It increases every day",
          "It's controlled by governments"
        ],
        correct: 1,
        explanation: "Bitcoin mining difficulty adjusts every 2016 blocks (approximately every 2 weeks) to maintain a 10-minute block time."
      },
      {
        id: 2,
        question: "What is a Bitcoin halving?",
        options: [
          "When Bitcoin price drops 50%",
          "When mining reward is cut in half",
          "When transaction fees double",
          "When block size is reduced"
        ],
        correct: 1,
        explanation: "A Bitcoin halving occurs approximately every 4 years when the mining reward is cut in half, reducing new Bitcoin supply."
      },
      {
        id: 3,
        question: "What is the Lightning Network?",
        options: [
          "A faster internet for Bitcoin",
          "A second-layer scaling solution",
          "A new cryptocurrency",
          "A Bitcoin exchange"
        ],
        correct: 1,
        explanation: "The Lightning Network is a second-layer payment protocol that enables fast, low-cost Bitcoin transactions."
      },
      {
        id: 4,
        question: "What does 'HODL' mean in Bitcoin culture?",
        options: [
          "Hold On for Dear Life",
          "A misspelling of 'hold' that became popular",
          "High Order Digital Ledger",
          "Hash Output Data Link"
        ],
        correct: 1,
        explanation: "HODL originated from a misspelled 'hold' in a Bitcoin forum post and became a popular investment strategy meaning to hold Bitcoin long-term."
      }
    ]
  }/*,
  {
    id: "economics",
    title: "Bitcoin Economics", 
    description: "Understanding Bitcoin's economic principles",
    questions: [
      // Add your questions here
    ]
  }*/
];

// Helper function to get a random quiz set
export function getRandomQuizSet(): QuizSet {
  const randomIndex = Math.floor(Math.random() * quizSets.length);
  return quizSets[randomIndex];
}