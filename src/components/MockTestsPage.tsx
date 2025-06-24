import React, { useState } from 'react';
import { Trophy, Clock, Target, Play, Award, CheckCircle, X, ArrowRight } from 'lucide-react';
import { mockTests, courses } from '../data/courses';
import type { MockTest, MockQuestion } from '../types';

const MockTestsPage: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<MockTest | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const handleStartTest = (test: MockTest) => {
    setSelectedTest(test);
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(test.questions.length).fill(-1));
    setShowResults(false);
    setTestStarted(true);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < selectedTest!.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      setTestStarted(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    if (!selectedTest) return 0;
    const correct = selectedAnswers.reduce((count, answer, index) => {
      return answer === selectedTest.questions[index].correctAnswer ? count + 1 : count;
    }, 0);
    return Math.round((correct / selectedTest.questions.length) * 100);
  };

  const getScoreColor = (score: number, passingScore: number) => {
    if (score >= passingScore) return 'text-green-600';
    if (score >= passingScore - 10) return 'text-yellow-600';
    return 'text-red-600';
  };

  const closeTest = () => {
    setSelectedTest(null);
    setTestStarted(false);
    setShowResults(false);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
  };

  if (showResults && selectedTest) {
    const score = calculateScore();
    const passed = score >= selectedTest.passingScore;

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {passed ? <Trophy className="h-10 w-10" /> : <X className="h-10 w-10" />}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {passed ? 'Chúc mừng! Bạn đã đỗ!' : 'Chưa đạt yêu cầu'}
              </h2>
              <p className="text-gray-600">
                Kết quả cho {selectedTest.title}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className={`text-3xl font-bold mb-2 ${getScoreColor(score, selectedTest.passingScore)}`}>
                  {score}%
                </div>
                <div className="text-gray-600">Điểm số</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedAnswers.filter((answer, index) => answer === selectedTest.questions[index].correctAnswer).length}
                </div>
                <div className="text-gray-600">Câu đúng</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedTest.passingScore}%
                </div>
                <div className="text-gray-600">Điểm cần đạt</div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900">Chi tiết từng câu hỏi</h3>
              {selectedTest.questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 pr-4">
                        Câu {index + 1}: {question.question}
                      </h4>
                      <div className={`flex items-center space-x-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? <CheckCircle className="h-5 w-5" /> : <X className="h-5 w-5" />}
                        <span className="font-medium">{isCorrect ? 'Đúng' : 'Sai'}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className={`p-3 rounded-lg border ${
                          optionIndex === question.correctAnswer ? 'bg-green-50 border-green-200' :
                          optionIndex === userAnswer && !isCorrect ? 'bg-red-50 border-red-200' :
                          'bg-gray-50 border-gray-200'
                        }`}>
                          <div className="flex items-center space-x-3">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                              optionIndex === question.correctAnswer ? 'bg-green-500 text-white' :
                              optionIndex === userAnswer && !isCorrect ? 'bg-red-500 text-white' :
                              'bg-gray-300 text-gray-700'
                            }`}>
                              {String.fromCharCode(65 + optionIndex)}
                            </span>
                            <span>{option}</span>
                            {optionIndex === question.correctAnswer && (
                              <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="font-medium text-blue-900 mb-2">Giải thích:</div>
                      <p className="text-blue-800">{question.explanation}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={closeTest}
                className="px-6 py-3 bg-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors"
              >
                Quay lại danh sách
              </button>
              <button
                onClick={() => handleStartTest(selectedTest)}
                className="px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors"
              >
                Làm lại
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (testStarted && selectedTest) {
    const question = selectedTest.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / selectedTest.questions.length) * 100;

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {selectedTest.title}
                </h2>
                <button
                  onClick={closeTest}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Câu {currentQuestion + 1} / {selectedTest.questions.length}</span>
                <span>{selectedTest.timeLimit} phút</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                    question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {question.difficulty === 'easy' ? 'Dễ' :
                     question.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
                  </span>
                  <span className="text-sm text-gray-500">{question.domain}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
                  {question.question}
                </h3>
              </div>

              <div className="space-y-3 mb-8">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-orange-500 bg-orange-50 text-orange-900'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                        selectedAnswers[currentQuestion] === index
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  Câu trước
                </button>
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswers[currentQuestion] === -1}
                  className="px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-700 transition-colors flex items-center"
                >
                  {currentQuestion === selectedTest.questions.length - 1 ? 'Hoàn thành' : 'Câu tiếp'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Đề thi thử AWS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Luyện tập với hàng trăm câu hỏi được cập nhật theo exam guide mới nhất. 
            Có đáp án chi tiết và giải thích.
          </p>
        </div>

        {/* Mock Tests Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {mockTests.map(test => {
            const course = courses.find(c => c.id === test.courseId);
            if (!course) return null;

            return (
              <div key={test.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {course.code}
                        </span>
                        <span className="text-sm text-gray-500">{test.questions.length} câu hỏi</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {test.title}
                      </h3>
                      <p className="text-gray-600">
                        Đề thi thử cho chứng chỉ {course.title}
                      </p>
                    </div>
                    <div className="text-center">
                      <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-1" />
                      <div className="text-sm text-gray-500">Mock Test</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Clock className="h-5 w-5 text-gray-500 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{test.timeLimit}</div>
                      <div className="text-sm text-gray-600">Phút</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Target className="h-5 w-5 text-gray-500 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{test.passingScore}%</div>
                      <div className="text-sm text-gray-600">Điểm đỗ</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Award className="h-5 w-5 text-gray-500 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">{test.questions.length}</div>
                      <div className="text-sm text-gray-600">Câu hỏi</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Phân bố câu hỏi:</h4>
                    <div className="space-y-2">
                      {['easy', 'medium', 'hard'].map(difficulty => {
                        const count = test.questions.filter(q => q.difficulty === difficulty).length;
                        const percentage = (count / test.questions.length) * 100;
                        const difficultyName = difficulty === 'easy' ? 'Dễ' : difficulty === 'medium' ? 'Trung bình' : 'Khó';
                        const color = difficulty === 'easy' ? 'bg-green-500' : difficulty === 'medium' ? 'bg-yellow-500' : 'bg-red-500';
                        
                        return count > 0 && (
                          <div key={difficulty} className="flex items-center space-x-3">
                            <span className="text-sm text-gray-600 w-20">{difficultyName}:</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${color}`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-500 w-12">{count} câu</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartTest(test)}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group"
                  >
                    <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Bắt đầu làm bài
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-dashed border-gray-200">
            <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thêm đề thi sắp ra mắt</h3>
            <p className="text-gray-600 mb-4">
              Chúng tôi đang chuẩn bị thêm nhiều đề thi thử cho các chứng chỉ Professional và Specialty
            </p>
            <div className="flex justify-center space-x-4">
              {['SAP-C02', 'DOP-C02', 'ANS-C01', 'SCS-C02'].map(cert => (
                <span key={cert} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTestsPage;