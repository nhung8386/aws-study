import React from 'react';
import { ArrowRight, Clock, BookOpen, Trophy, CheckCircle, Users, Target, Star } from 'lucide-react';
import { learningPaths, courses } from '../data/courses';

interface LearningPathsPageProps {
  onPageChange: (page: string) => void;
}

const LearningPathsPage: React.FC<LearningPathsPageProps> = ({ onPageChange }) => {
  const getPathIcon = (level: string) => {
    switch (level) {
      case 'beginner': return { icon: BookOpen, color: 'bg-green-500' };
      case 'intermediate': return { icon: Trophy, color: 'bg-blue-500' };
      case 'advanced': return { icon: Target, color: 'bg-purple-500' };
      default: return { icon: BookOpen, color: 'bg-gray-500' };
    }
  };

  const getLevelName = (level: string) => {
    switch (level) {
      case 'beginner': return 'Người mới bắt đầu';
      case 'intermediate': return 'Trung cấp';
      case 'advanced': return 'Nâng cao';
      default: return level;
    }
  };

  const getPathCourses = (courseIds: string[]) => {
    return courseIds.map(id => courses.find(c => c.id === id)).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lộ trình học tập AWS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lộ trình được thiết kế bởi các chuyên gia AWS, phù hợp với mọi cấp độ 
            từ người mới bắt đầu đến chuyên gia có kinh nghiệm.
          </p>
        </div>

        {/* Learning Paths */}
        <div className="space-y-12">
          {learningPaths.map((path, index) => {
            const pathCourses = getPathCourses(path.courses);
            const { icon: IconComponent, color } = getPathIcon(path.level);
            const totalHours = pathCourses.reduce((sum, course) => {
              return sum + parseInt(course?.duration?.split(' ')[0] || '0');
            }, 0);

            return (
              <div key={path.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Path Header */}
                <div className={`bg-gradient-to-r ${color.replace('bg-', 'from-')} to-${color.split('-')[1]}-600 text-white p-8`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{path.title}</h2>
                        <p className="text-lg opacity-90">{path.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{getLevelName(path.level)}</div>
                      <div className="opacity-75">{path.estimatedTime}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <BookOpen className="h-6 w-6 mx-auto mb-2 opacity-75" />
                      <div className="text-2xl font-bold">{pathCourses.length}</div>
                      <div className="opacity-75">Khóa học</div>
                    </div>
                    <div className="text-center">
                      <Clock className="h-6 w-6 mx-auto mb-2 opacity-75" />
                      <div className="text-2xl font-bold">{totalHours}+</div>
                      <div className="opacity-75">Giờ học</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-6 w-6 mx-auto mb-2 opacity-75" />
                      <div className="text-2xl font-bold">{Math.floor(Math.random() * 10) + 15}K+</div>
                      <div className="opacity-75">Học viên</div>
                    </div>
                  </div>
                </div>

                {/* Path Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Course Roadmap */}
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Lộ trình chi tiết</h3>
                      <div className="space-y-4">
                        {pathCourses.map((course, courseIndex) => {
                          if (!course) return null;
                          
                          const isLast = courseIndex === pathCourses.length - 1;
                          
                          return (
                            <div key={course.id} className="relative">
                              <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 relative">
                                  <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white font-bold`}>
                                    {courseIndex + 1}
                                  </div>
                                  {!isLast && (
                                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300"></div>
                                  )}
                                </div>
                                
                                <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                                  <div className="flex items-start justify-between mb-4">
                                    <div>
                                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                                        {course.title}
                                      </h4>
                                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        {course.code}
                                      </span>
                                    </div>
                                    <div className="flex text-yellow-400">
                                      {Array.from({ length: course.difficulty }).map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                      ))}
                                      {Array.from({ length: 5 - course.difficulty }).map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-gray-300" />
                                      ))}
                                    </div>
                                  </div>
                                  
                                  <p className="text-gray-600 mb-4 leading-relaxed">
                                    {course.description}
                                  </p>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                      <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {course.duration}
                                      </div>
                                      <div className="flex items-center">
                                        <BookOpen className="h-4 w-4 mr-1" />
                                        {course.lessons.length} bài học
                                      </div>
                                    </div>
                                    <button 
                                      onClick={() => onPageChange('courses')}
                                      className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center"
                                    >
                                      Học ngay
                                      <ArrowRight className="ml-1 h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Path Info */}
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4">Thông tin lộ trình</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Cấp độ:</span>
                            <span className="font-medium">{getLevelName(path.level)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Thời gian:</span>
                            <span className="font-medium">{path.estimatedTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tổng giờ học:</span>
                            <span className="font-medium">{totalHours}+ giờ</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Số khóa học:</span>
                            <span className="font-medium">{pathCourses.length} khóa</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 className="font-bold text-blue-900 mb-3">Mục tiêu nghề nghiệp</h4>
                        <div className="space-y-2">
                          {path.id === 'beginner-path' && (
                            <>
                              <div className="flex items-center text-blue-800">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Cloud Support Associate
                              </div>
                              <div className="flex items-center text-blue-800">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Junior Cloud Engineer
                              </div>
                            </>
                          )}
                          {path.id === 'architect-path' && (
                            <>
                              <div className="flex items-center text-blue-800">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Solutions Architect
                              </div>
                              <div className="flex items-center text-blue-800">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Cloud Architect
                              </div>
                              <div className="flex items-center text-blue-800">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Technical Lead
                              </div>
                            </>
                          )}
                          {path.id === 'developer-path' && (
                            <>
                              <div className="flex items-center text-blue-800">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Cloud Developer
                              </div>
                              <div className="flex items-center text-blue-800">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                DevOps Engineer
                              </div>
                            </>
                          )}
                          {path.id === 'operations-path' && (
                            <>
                              <div className="flex items-center text-blue-800">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                SysOps Administrator
                              </div>
                              <div className="flex items-center text-blue-800">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Cloud Operations Engineer
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <button 
                        onClick={() => onPageChange('courses')}
                        className={`w-full ${color} text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center`}
                      >
                        <BookOpen className="h-5 w-5 mr-2" />
                        Bắt đầu lộ trình
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Cần tư vấn lộ trình phù hợp?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Mỗi người có background và mục tiêu khác nhau. Chúng tôi có thể giúp bạn 
            chọn lộ trình phù hợp nhất với tình hình cá nhân.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('tips')}
              className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
            >
              Xem tips học tập
            </button>
            <button 
              onClick={() => onPageChange('resources')}
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:border-gray-500 transition-colors"
            >
              Tài nguyên học tập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathsPage;