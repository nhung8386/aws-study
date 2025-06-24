import React, { useState } from 'react';
import { Play, BookOpen, Clock, Users, Star, Filter, Search, CheckCircle } from 'lucide-react';
import { courses } from '../data/courses';

const CoursesPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const levels = [
    { id: 'all', name: 'Tất cả', count: courses.length },
    { id: 'foundational', name: 'Cơ bản', count: courses.filter(c => c.level === 'foundational').length },
    { id: 'associate', name: 'Associate', count: courses.filter(c => c.level === 'associate').length },
    { id: 'professional', name: 'Professional', count: courses.filter(c => c.level === 'professional').length }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'foundational': return 'bg-green-100 text-green-800';
      case 'associate': return 'bg-blue-100 text-blue-800';
      case 'professional': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColorBorder = (level: string) => {
    switch (level) {
      case 'foundational': return 'border-green-200';
      case 'associate': return 'border-blue-200';
      case 'professional': return 'border-purple-200';
      default: return 'border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Khóa học AWS miễn phí
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Học từ cơ bản đến nâng cao với nội dung được cập nhật theo exam guide mới nhất
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Level Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex space-x-2">
                {levels.map(level => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedLevel === level.id
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level.name} ({level.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${getLevelColorBorder(course.level)} overflow-hidden group`}>
              <div className="p-8">
                {/* Course Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                        {course.level === 'foundational' ? 'Cơ bản' : 
                         course.level === 'associate' ? 'Associate' : 'Professional'}
                      </span>
                      <span className="text-sm font-medium text-gray-500">{course.code}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{course.description}</p>
                  </div>
                  <div className="flex text-yellow-400 ml-4">
                    {Array.from({ length: course.difficulty }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    {Array.from({ length: 5 - course.difficulty }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gray-300" />
                    ))}
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    {course.lessons.length} bài học
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {Math.floor(Math.random() * 5000) + 1000}+ học viên
                  </div>
                </div>

                {/* Prerequisites */}
                {course.prerequisites && course.prerequisites.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Yêu cầu trước:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.prerequisites.map(prereq => (
                        <span key={prereq} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {prereq}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lessons Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Nội dung khóa học:</h4>
                  <div className="space-y-2">
                    {course.lessons.slice(0, 3).map(lesson => (
                      <div key={lesson.id} className="flex items-center space-x-3 text-sm">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          lesson.type === 'video' ? 'bg-red-100 text-red-600' :
                          lesson.type === 'reading' ? 'bg-blue-100 text-blue-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {lesson.type === 'video' ? <Play className="h-3 w-3" /> :
                           lesson.type === 'reading' ? <BookOpen className="h-3 w-3" /> :
                           <CheckCircle className="h-3 w-3" />}
                        </div>
                        <span className="flex-1 text-gray-700">{lesson.title}</span>
                        <span className="text-gray-500">{lesson.duration}</span>
                      </div>
                    ))}
                    {course.lessons.length > 3 && (
                      <div className="text-sm text-gray-500 pl-9">
                        +{course.lessons.length - 3} bài học khác
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center group">
                  <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Bắt đầu học ngay - Miễn phí
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BookOpen className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Không tìm thấy khóa học</h3>
            <p className="text-gray-500">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;