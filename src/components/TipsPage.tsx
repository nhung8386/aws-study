import React, { useState } from 'react';
import { Lightbulb, Target, Clock, Brain, BookOpen, Trophy, CheckCircle, ArrowRight, Star, Zap, Users, Award } from 'lucide-react';

const TipsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('study');

  const studyTips = [
    {
      icon: Target,
      title: 'Hiểu rõ exam guide',
      description: 'Đọc kỹ exam guide của AWS để nắm được cấu trúc bài thi và trọng số từng domain.',
      details: [
        'Tải exam guide chính thức từ AWS',
        'Phân tích tỷ lệ % của từng domain',
        'Tập trung nhiều hơn vào domain có trọng số cao',
        'Lưu ý các thay đổi trong phiên bản exam mới'
      ]
    },
    {
      icon: Brain,
      title: 'Học theo phương pháp Feynman',
      description: 'Giải thích lại những gì đã học bằng ngôn ngữ đơn giản như thể bạn đang dạy người khác.',
      details: [
        'Chọn một khái niệm AWS phức tạp',
        'Viết ra giải thích bằng từ ngữ đơn giản',
        'Tìm những chỗ không thể giải thích được',
        'Quay lại học kỹ những phần đó'
      ]
    },
    {
      icon: Clock,
      title: 'Kỹ thuật Pomodoro',
      description: 'Học tập hiệu quả với chu kỳ 25 phút tập trung và 5 phút nghỉ.',
      details: [
        '25 phút học tập tập trung cao độ',
        '5 phút nghỉ ngơi, không xem điện thoại',
        'Sau 4 chu kỳ thì nghỉ dài 15-30 phút',
        'Ghi chú những gì đã học trong từng session'
      ]
    },
    {
      icon: BookOpen,
      title: 'Hands-on practice',
      description: 'Thực hành trực tiếp trên AWS Console để hiểu sâu về các dịch vụ.',
      details: [
        'Sử dụng AWS Free Tier để thực hành',
        'Tạo các scenario thực tế trong công việc',
        'So sánh giữa các dịch vụ tương tự',
        'Ghi chú các best practices quan trọng'
      ]
    }
  ];

  const examTips = [
    {
      icon: Target,
      title: 'Đọc kỹ câu hỏi',
      description: 'Xác định từ khóa quan trọng và yêu cầu thực sự của câu hỏi.',
      details: [
        'Chú ý các từ: MOST, LEAST, BEST, CHEAPEST',
        'Xác định scenario: startup, enterprise, cost-sensitive',
        'Tìm constraints: budget, time, compliance',
        'Loại bỏ đáp án rõ ràng sai trước'
      ]
    },
    {
      icon: Clock,
      title: 'Quản lý thời gian',
      description: 'Phân bổ thời gian hợp lý cho từng câu hỏi và domain.',
      details: [
        'Đọc nhanh toàn bộ đề trong 5 phút đầu',
        'Làm câu dễ trước, khó sau',
        'Không dành quá 3 phút cho 1 câu',
        'Để lại 15 phút cuối để review'
      ]
    },
    {
      icon: Brain,
      title: 'Kỹ thuật loại trừ',
      description: 'Loại bỏ đáp án sai để tăng tỷ lệ chọn đúng đáp án còn lại.',
      details: [
        'Loại đáp án không liên quan đến scenario',
        'Loại dịch vụ không phù hợp với yêu cầu',
        'Chú ý các đáp án "quá hoàn hảo" thường sai',
        'So sánh 2 đáp án còn lại để chọn tốt nhất'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Kiểm tra lại',
      description: 'Review những câu đã làm, đặc biệt là câu chưa chắc chắn.',
      details: [
        'Đánh dấu câu chưa chắc chắn khi làm',
        'Ưu tiên review câu có điểm số cao',
        'Đọc lại đề bài để đảm bảo hiểu đúng',
        'Tin tưởng vào lựa chọn đầu tiên nếu không chắc'
      ]
    }
  ];

  const memoryTips = [
    {
      service: 'EC2 Instance Types',
      tip: 'M=General, C=Compute, R=RAM, I=I/O, T=Burstable',
      technique: 'Acronym',
      example: 'My Car Runs In Traffic'
    },
    {
      service: 'S3 Storage Classes',
      tip: 'Standard > IA > Glacier > Deep Archive (theo frequency)',
      technique: 'Hierarchy',
      example: 'Từ hot đến cold storage'
    },
    {
      service: 'EBS Volume Types',
      tip: 'gp3>gp2 (balanced), io2>io1 (high IOPS), st1 (throughput), sc1 (cold)',
      technique: 'Performance order',
      example: 'General Purpose -> Provisioned IOPS -> Throughput -> Cold'
    },
    {
      service: 'Database Services',
      tip: 'RDS=SQL, DynamoDB=NoSQL, ElastiCache=In-memory, Redshift=Data warehouse',
      technique: 'Category mapping',
      example: 'Từng loại DB cho từng use case'
    },
    {
      service: 'Networking',
      tip: 'VPC=Virtual network, IGW=Internet access, NAT=Private to internet',
      technique: 'Function mapping',
      example: 'Mỗi component có 1 nhiệm vụ chính'
    },
    {
      service: 'Security Services',
      tip: 'IAM=Who, Security Groups=Firewall, NACLs=Subnet level',
      technique: 'Level hierarchy',
      example: 'User -> Instance -> Subnet'
    }
  ];

  const successStories = [
    {
      name: 'Nguyễn Minh Anh',
      role: 'DevOps Engineer',
      company: 'Tech Startup',
      certification: 'SAA-C03 & DVA-C02',
      story: 'Từ một developer không có kinh nghiệm về cloud, tôi đã học được 2 chứng chỉ trong 6 tháng và được tăng lương 40%.',
      tips: 'Tập trung vào hands-on practice và làm nhiều mock test'
    },
    {
      name: 'Trần Văn Bình',
      role: 'Solutions Architect',
      company: 'Enterprise Company',
      certification: 'SAP-C02',
      story: 'Chứng chỉ Professional đã giúp tôi được promote thành Technical Lead và lead các dự án cloud transformation.',
      tips: 'Đọc nhiều case study và whitepaper của AWS'
    },
    {
      name: 'Lê Thị Cẩm',
      role: 'Cloud Engineer',
      company: 'Financial Services',
      certification: 'CLF-C02 & SOA-C02',
      story: 'Là người chuyển từ network admin sang cloud, chứng chỉ AWS đã mở ra con đường mới cho sự nghiệp của tôi.',
      tips: 'Bắt đầu từ Cloud Practitioner để có nền tảng vững chắc'
    }
  ];

  const tabs = [
    { id: 'study', name: 'Phương pháp học', icon: BookOpen },
    { id: 'exam', name: 'Kỹ thuật thi', icon: Trophy },
    { id: 'memory', name: 'Ghi nhớ dịch vụ', icon: Brain },
    { id: 'success', name: 'Câu chuyện thành công', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tips & Tricks học AWS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bí quyết học hiệu quả và chiến lược làm bài thi từ những người đã thành công
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content Sections */}
        {activeTab === 'study' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {studyTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {tip.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'exam' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {examTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {tip.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <Zap className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'memory' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Brain className="h-8 w-8 text-purple-600 mr-3" />
                Mẹo ghi nhớ các dịch vụ AWS
              </h2>
              <div className="grid gap-6">
                {memoryTips.map((tip, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{tip.service}</h4>
                        <p className="text-gray-700 mb-2">{tip.tip}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium">
                            {tip.technique}
                          </span>
                          <span className="text-gray-500">Ví dụ: {tip.example}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm text-gray-500">Mẹo ghi nhớ</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Kỹ thuật ghi nhớ hiệu quả</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-800">Tạo câu chuyện:</h4>
                  <p className="text-purple-700">Liên kết các dịch vụ AWS thành một câu chuyện có logic để dễ nhớ hơn.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-800">Sử dụng hình ảnh:</h4>
                  <p className="text-purple-700">Tạo sơ đồ, mindmap để visualize kiến trúc và mối quan hệ giữa các dịch vụ.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-800">Lặp lại theo chu kỳ:</h4>
                  <p className="text-purple-700">Review kiến thức theo khoảng 1 ngày, 3 ngày, 1 tuần, 1 tháng.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-800">Thực hành thường xuyên:</h4>
                  <p className="text-purple-700">Làm lab, tạo project thực tế để củng cố kiến thức lý thuyết.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'success' && (
          <div className="space-y-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {story.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                          <p className="text-gray-600">{story.role} tại {story.company}</p>
                        </div>
                        <div className="flex items-center space-x-2 mt-2 lg:mt-0">
                          <Trophy className="h-5 w-5 text-yellow-500" />
                          <span className="font-semibold text-gray-900">{story.certification}</span>
                        </div>
                      </div>
                      
                      <blockquote className="text-gray-700 italic mb-4 leading-relaxed border-l-4 border-green-400 pl-4">
                        "{story.story}"
                      </blockquote>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                          <Lightbulb className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <span className="font-semibold text-green-900">Tips từ {story.name.split(' ')[0]}:</span>
                            <p className="text-green-800 mt-1">{story.tips}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
              <Star className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Bạn cũng có thể thành công!</h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Hàng nghìn người đã thành công với chứng chỉ AWS. 
                Hãy bắt đầu hành trình của bạn ngay hôm nay!
              </p>
              <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors inline-flex items-center">
                Bắt đầu học ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TipsPage;