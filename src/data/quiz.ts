export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const bitcoinQuiz: Question[] = [
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
];