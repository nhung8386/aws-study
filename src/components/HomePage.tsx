import React from 'react';
import { ArrowRight, CheckCircle, Users, Trophy, Clock, Star, BookOpen, Target, Zap, Award } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const certifications = [
    {
      name: 'Cloud Practitioner',
      code: 'CLF-C02',
      level: 'Cơ bản',
      color: 'bg-green-500',
      description: 'Nền tảng về AWS Cloud và kiến thức cơ bản',
      duration: '40 giờ',
      difficulty: 1
    },
    {
      name: 'Solutions Architect',
      code: 'SAA-C03',
      level: 'Associate',
      color: 'bg-blue-500',
      description: 'Thiết kế hệ thống phân tán trên AWS',
      duration: '80 giờ',
      difficulty: 3
    },
    {
      name: 'Developer',
      code: 'DVA-C02',
      level: 'Associate',
      color: 'bg-purple-500',
      description: 'Phát triển và duy trì ứng dụng trên AWS',
      duration: '70 giờ',
      difficulty: 3
    },
    {
      name: 'SysOps Administrator',
      code: 'SOA-C02',
      level: 'Associate',
      color: 'bg-orange-500',
      description: 'Triển khai và vận hành hệ thống AWS',
      duration: '75 giờ',
      difficulty: 3
    }
  ];

  const benefits = [
    {
      icon: Trophy,
      title: 'Chứng nhận quốc tế',
      description: 'Được công nhận toàn cầu bởi các nhà tuyển dụng hàng đầu'
    },
    {
      icon: Target,
      title: 'Tăng lương 25-30%',
      description: 'Mức lương trung bình tăng đáng kể sau khi có chứng chỉ AWS'
    },
    {
      icon: Users,
      title: 'Cộng đồng 5M+',
      description: 'Tham gia cộng đồng chuyên gia AWS trên toàn thế giới'
    },
    {
      icon: Zap,
      title: 'Cơ hội nghề nghiệp',
      description: 'Mở ra nhiều vị trí việc làm trong lĩnh vực Cloud Computing'
    }
  ];

  const stats = [
    { label: 'Học viên', value: '50,000+', icon: Users },
    { label: 'Khóa học', value: '12+', icon: BookOpen },
    { label: 'Đề thi thử', value: '500+', icon: Trophy },
    { label: 'Tỷ lệ đỗ', value: '92%', icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Chinh phục
                  <span className="block text-yellow-300">Chứng chỉ AWS</span>
                </h1>
                <p className="text-xl text-orange-100 leading-relaxed">
                  Nền tảng học tập toàn diện với khóa học miễn phí, đề thi thử và 
                  hướng dẫn chi tiết để bạn thành công trong các kỳ thi AWS.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onPageChange('courses')}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-200 flex items-center justify-center group"
                >
                  Bắt đầu học ngay
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onPageChange('tests')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-200"
                >
                  Làm đề thi thử
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full bg-orange-400 border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-orange-100">
                  <div className="font-semibold">50,000+ học viên</div>
                  <div className="text-sm">đã tin tướng chúng tôi</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Tiến độ học tập</h3>
                    <span className="text-green-300 font-semibold">92% hoàn thành</span>
                  </div>
                  <div className="space-y-4">
                    {['CLF-C02', 'SAA-C03', 'DVA-C02'].map((cert, idx) => (
                      <div key={cert} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-300" />
                        <span className="flex-1">{cert}</span>
                        <div className="w-20 bg-white/20 rounded-full h-2">
                          <div 
                            className="bg-green-300 h-2 rounded-full" 
                            style={{ width: `${100 - idx * 20}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4 group-hover:bg-orange-200 transition-colors">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Các chứng chỉ AWS phổ biến
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Từ cơ bản đến nâng cao, chúng tôi cung cấp lộ trình học tập hoàn chỉnh 
              cho tất cả các chứng chỉ AWS quan trọng.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${cert.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                      {cert.code.split('-')[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mt-1">
                        {cert.level}
                      </span>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: cert.difficulty }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    {Array.from({ length: 5 - cert.difficulty }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gray-300" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    {cert.duration}
                  </div>
                  <button 
                    onClick={() => onPageChange('courses')}
                    className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Học ngay
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onPageChange('courses')}
              className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              Xem tất cả khóa học
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tại sao nên học chứng chỉ AWS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AWS đang dẫn đầu thị trường Cloud với hơn 32% thị phần toàn cầu. 
              Chứng chỉ AWS mở ra cơ hội nghề nghiệp vô hạn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Paths Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lộ trình học tập được gợi ý
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Được thiết kế bởi các chuyên gia AWS với kinh nghiệm thực tế, 
              phù hợp cho mọi cấp độ từ mới bắt đầu đến chuyên gia.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Người mới bắt đầu',
                description: 'Hoàn hảo cho những ai chưa có kinh nghiệm với AWS',
                duration: '2-3 tháng',
                color: 'from-green-400 to-green-600'
              },
              {
                title: 'Solutions Architect',
                description: 'Lộ trình toàn diện cho aspiring cloud architects',
                duration: '6-8 tháng',
                color: 'from-blue-400 to-blue-600'
              },
              {
                title: 'Developer/DevOps',
                description: 'Tập trung vào phát triển và DevOps practices',
                duration: '5-7 tháng',
                color: 'from-purple-400 to-purple-600'
              }
            ].map((path, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className={`w-full h-3 bg-gradient-to-r ${path.color} rounded-full mb-6`}></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{path.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{path.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {path.duration}
                  </span>
                  <button 
                    onClick={() => onPageChange('paths')}
                    className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onPageChange('paths')}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Khám phá lộ trình học
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sẵn sàng bắt đầu hành trình AWS của bạn?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Tham gia cùng hàng nghìn học viên đã thành công với chứng chỉ AWS. 
            Tất cả khóa học đều miễn phí và được cập nhật thường xuyên.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('courses')}
              className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center"
            >
              Bắt đầu học miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => onPageChange('tests')}
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 hover:border-gray-500 transition-colors"
            >
              Thử sức với đề thi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;