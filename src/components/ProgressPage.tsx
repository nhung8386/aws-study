import React, { useState } from 'react';
import { Trophy, Target, Clock, BookOpen, CheckCircle, Award, TrendingUp, Calendar, Star, BarChart3 } from 'lucide-react';
import { courses } from '../data/courses';

const ProgressPage: React.FC = () => {
  // Mock user progress data
  const [userProgress] = useState({
    totalStudyTime: 145,
    completedCourses: 2,
    totalCertifications: 6,
    completedLessons: 28,
    totalLessons: 45,
    currentStreak: 12,
    longestStreak: 18,
    testsTaken: 15,
    averageScore: 78,
    coursesProgress: [
      {
        courseId: 'clf-c02',
        progress: 100,
        completedLessons: ['clf-1', 'clf-2', 'clf-3', 'clf-4', 'clf-5'],
        lastStudied: '2024-01-15',
        timeSpent: 35,
        testScores: [85, 92, 88]
      },
      {
        courseId: 'saa-c03',
        progress: 75,
        completedLessons: ['saa-1', 'saa-2', 'saa-3'],
        lastStudied: '2024-01-20',
        timeSpent: 65,
        testScores: [72, 78, 81]
      },
      {
        courseId: 'dva-c02',
        progress: 33,
        completedLessons: ['dva-1'],
        lastStudied: '2024-01-18',
        timeSpent: 25,
        testScores: [68]
      },
      {
        courseId: 'soa-c02',
        progress: 0,
        completedLessons: [],
        lastStudied: null,
        timeSpent: 0,
        testScores: []
      }
    ],
    weeklyActivity: [
      { day: 'T2', minutes: 45 },
      { day: 'T3', minutes: 30 },
      { day: 'T4', minutes: 60 },
      { day: 'T5', minutes: 0 },
      { day: 'T6', minutes: 90 },
      { day: 'T7', minutes: 75 },
      { day: 'CN', minutes: 40 }
    ],
    monthlyStats: [
      { month: 'Tháng 10', completed: 5, time: 28 },
      { month: 'Tháng 11', completed: 12, time: 55 },
      { month: 'Tháng 12', completed: 18, time: 82 },
      { month: 'Tháng 1', completed: 28, time: 145 }
    ]
  });

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    if (progress >= 20) return 'bg-orange-500';
    return 'bg-gray-300';
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCourseInfo = (courseId: string) => {
    return courses.find(c => c.id === courseId);
  };

  const maxActivity = Math.max(...userProgress.weeklyActivity.map(d => d.minutes));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tiến độ học tập của bạn
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Theo dõi chi tiết quá trình học tập và đạt được mục tiêu chứng chỉ AWS
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{userProgress.totalStudyTime}h</div>
            <div className="text-gray-600">Tổng thời gian học</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{userProgress.completedCourses}</div>
            <div className="text-gray-600">Khóa học hoàn thành</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{userProgress.averageScore}%</div>
            <div className="text-gray-600">Điểm trung bình</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{userProgress.currentStreak}</div>
            <div className="text-gray-600">Ngày học liên tiếp</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Course Progress */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
              Tiến độ các khóa học
            </h2>

            <div className="space-y-6">
              {userProgress.coursesProgress.map(courseProgress => {
                const course = getCourseInfo(courseProgress.courseId);
                if (!course) return null;

                return (
                  <div key={courseProgress.courseId} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {course.code}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{courseProgress.progress}%</div>
                        <div className="text-sm text-gray-500">Hoàn thành</div>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(courseProgress.progress)}`}
                        style={{ width: `${courseProgress.progress}%` }}
                      ></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Bài học</div>
                        <div className="font-semibold">
                          {courseProgress.completedLessons.length}/{course.lessons.length}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500">Thời gian</div>
                        <div className="font-semibold">{courseProgress.timeSpent}h</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Điểm cao nhất</div>
                        <div className={`font-semibold ${getScoreColor(Math.max(...(courseProgress.testScores.length > 0 ? courseProgress.testScores : [0])))}`}>
                          {courseProgress.testScores.length > 0 ? Math.max(...courseProgress.testScores) : 0}%
                        </div>
                      </div>
                    </div>

                    {courseProgress.lastStudied && (
                      <div className="mt-4 text-sm text-gray-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Học lần cuối: {new Date(courseProgress.lastStudied).toLocaleDateString('vi-VN')}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Activity Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <BarChart3 className="h-6 w-6 text-green-600 mr-3" />
              Hoạt động tuần này
            </h2>

            <div className="space-y-4">
              {userProgress.weeklyActivity.map((day, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 text-sm font-medium text-gray-600">{day.day}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${(day.minutes / maxActivity) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-sm font-semibold text-gray-700 text-right">
                    {day.minutes}m
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-800 font-semibold">Tổng tuần này</span>
                <span className="text-green-900 font-bold">
                  {userProgress.weeklyActivity.reduce((sum, day) => sum +day.minutes, 0)}m
                </span>
              </div>
              <div className="text-sm text-green-700">
                Trung bình {Math.round(userProgress.weeklyActivity.reduce((sum, day) => sum + day.minutes, 0) / 7)} phút/ngày
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 text-purple-600 mr-3" />
            Tiến độ theo tháng
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {userProgress.monthlyStats.map((month, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                <div className="text-lg font-semibold text-gray-900 mb-2">{month.month}</div>
                <div className="space-y-2">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{month.completed}</div>
                    <div className="text-sm text-gray-600">Bài học hoàn thành</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-700">{month.time}h</div>
                    <div className="text-sm text-gray-600">Thời gian học</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="h-6 w-6 mr-3" />
            Thành tích đạt được
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-center">
              <Trophy className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">First Certification</h3>
              <p className="text-yellow-100">Hoàn thành chứng chỉ đầu tiên</p>
            </div>

            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-center">
              <Target className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">High Scorer</h3>
              <p className="text-yellow-100">Đạt điểm trên 80% trong bài thi</p>
            </div>

            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-center">
              <Star className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Consistent Learner</h3>
              <p className="text-yellow-100">Học liên tục 10 ngày</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;