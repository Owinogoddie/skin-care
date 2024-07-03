import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  { question: "What's your skin type?", options: ["Dry", "Oily", "Combination", "Normal"] },
  { question: "What's your main skin concern?", options: ["Acne", "Aging", "Pigmentation", "Sensitivity"] },
  { question: "How often do you use sunscreen?", options: ["Daily", "Sometimes", "Rarely", "Never"] },
];

export const SkincareQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleSubmit = () => {
    console.log("Quiz submitted!", answers);
    setShowModal(false);
    // Add logic to process the quiz results
  };

  const handleCancel = () => {
    setShowModal(false);
    setCurrentQuestion(0);
    setAnswers([]);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Find Your Perfect Skincare Routine</h2>
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-purple-700 mb-6">{questions[currentQuestion].question}</h3>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-200 text-purple-800 py-3 px-6 rounded-lg text-lg font-medium hover:bg-purple-300 transition duration-300"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white p-8 rounded-lg shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-purple-700 mb-4">Quiz Completed!</h3>
                <p className="mb-6">Are you ready to see your personalized skincare routine?</p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};