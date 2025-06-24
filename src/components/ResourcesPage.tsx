import React, { useState } from 'react';
import { ExternalLink, FileText, Globe, BookOpen, Video, Users, Download, Search, Filter, Star } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tất cả', count: 45 },
    { id: 'official', name: 'Tài liệu chính thức', count: 12 },
    { id: 'whitepapers', name: 'Whitepapers', count: 8 },
    { id: 'cheatsheets', name: 'Cheat Sheets', count: 15 },
    { id: 'videos', name: 'Video học tập', count: 6 },
    { id: 'communities', name: 'Cộng đồng', count: 4 }
  ];

  const resources = [
    // Official Documentation
    {
      title: 'AWS Documentation',
      description: 'Tài liệu chính thức từ AWS cho tất cả các dịch vụ',
      url: 'https://docs.aws.amazon.com/',
      category: 'official',
      type: 'documentation',
      rating: 5,
      tags: ['Official', 'Complete', 'Updated']
    },
    {
      title: 'AWS Training and Certification',
      description: 'Nền tảng đào tạo chính thức của AWS với khóa học miễn phí',
      url: 'https://aws.amazon.com/training/',
      category: 'official',
      type: 'training',
      rating: 5,
      tags: ['Official', 'Free', 'Certification']
    },
    {
      title: 'AWS Skill Builder',
      description: 'Nền tảng học tập trực tuyến với hàng trăm khóa học và labs',
      url: 'https://skillbuilder.aws/',
      category: 'official',
      type: 'platform',
      rating: 5,
      tags: ['Interactive', 'Labs', 'Hands-on']
    },
    {
      title: 'AWS Well-Architected Framework',
      description: 'Framework để thiết kế và vận hành hệ thống cloud hiệu quả',
      url: 'https://aws.amazon.com/architecture/well-architected/',
      category: 'official',
      type: 'guide',
      rating: 5,
      tags: ['Architecture', 'Best Practices', 'Framework']
    },

    // Whitepapers
    {
      title: 'AWS Security Best Practices',
      description: 'Whitepaper về các best practices bảo mật trên AWS',
      url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-security-best-practices/',
      category: 'whitepapers',
      type: 'whitepaper',
      rating: 5,
      tags: ['Security', 'Best Practices', 'Compliance']
    },
    {
      title: 'Cost Optimization Pillar',
      description: 'Hướng dẫn tối ưu chi phí trong AWS Well-Architected Framework',
      url: 'https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/',
      category: 'whitepapers',
      type: 'whitepaper',
      rating: 5,
      tags: ['Cost Optimization', 'FinOps', 'Economics']
    },
    {
      title: 'AWS Migration Strategies',
      description: 'Chiến lược di chuyển ứng dụng lên AWS',
      url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-migration-whitepaper/',
      category: 'whitepapers',
      type: 'whitepaper',
      rating: 4,
      tags: ['Migration', 'Strategy', '6Rs']
    },
    {
      title: 'Serverless Application Lens',
      description: 'Best practices cho kiến trúc serverless trên AWS',
      url: 'https://docs.aws.amazon.com/wellarchitected/latest/serverless-application-lens/',
      category: 'whitepapers',
      type: 'whitepaper',
      rating: 4,
      tags: ['Serverless', 'Lambda', 'Architecture']
    },

    // Cheat Sheets
    {
      title: 'AWS Services Cheat Sheet',
      description: 'Tổng hợp các dịch vụ AWS cơ bản và use cases',
      url: '#',
      category: 'cheatsheets',
      type: 'cheatsheet',
      rating: 5,
      tags: ['Services', 'Quick Reference', 'Beginner'],
      downloadable: true
    },
    {
      title: 'EC2 Instance Types Cheat Sheet',
      description: 'So sánh chi tiết các loại EC2 instances và use cases',
      url: '#',
      category: 'cheatsheets',
      type: 'cheatsheet',
      rating: 5,
      tags: ['EC2', 'Instance Types', 'Compute'],
      downloadable: true
    },
    {
      title: 'S3 Storage Classes Comparison',
      description: 'Bảng so sánh các storage classes của S3',
      url: '#',
      category: 'cheatsheets',
      type: 'cheatsheet',
      rating: 4,
      tags: ['S3', 'Storage', 'Cost'],
      downloadable: true
    },
    {
      title: 'AWS Networking Cheat Sheet',
      description: 'VPC, Subnets, Security Groups, NACLs và networking concepts',
      url: '#',
      category: 'cheatsheets',
      type: 'cheatsheet',
      rating: 5,
      tags: ['Networking', 'VPC', 'Security'],
      downloadable: true
    },
    {
      title: 'Database Services Comparison',
      description: 'So sánh RDS, DynamoDB, ElastiCache, Redshift và các DB services',
      url: '#',
      category: 'cheatsheets',
      type: 'cheatsheet',
      rating: 4,
      tags: ['Database', 'RDS', 'DynamoDB'],
      downloadable: true
    },

    // Videos
    {
      title: 'AWS re:Invent Videos',
      description: 'Video sessions từ hội nghị AWS re:Invent hàng năm',
      url: 'https://www.youtube.com/user/AmazonWebServices',
      category: 'videos',
      type: 'video',
      rating: 5,
      tags: ['re:Invent', 'Latest', 'Expert']
    },
    {
      title: 'AWS This is My Architecture',
      description: 'Series video về real-world architectures từ AWS customers',
      url: 'https://aws.amazon.com/architecture/this-is-my-architecture/',
      category: 'videos',
      type: 'video',
      rating: 5,
      tags: ['Architecture', 'Real-world', 'Case Studies']
    },
    {
      title: 'AWS Online Tech Talks',
      description: 'Tech talks về các chủ đề AWS cụ thể',
      url: 'https://aws.amazon.com/events/online-tech-talks/',
      category: 'videos',
      type: 'video',
      rating: 4,
      tags: ['Tech Talks', 'Deep Dive', 'Technical']
    },

    // Communities
    {
      title: 'AWS Vietnam Community',
      description: 'Cộng đồng AWS tại Việt Nam - chia sẻ kinh nghiệm và networking',
      url: '#',
      category: 'communities',
      type: 'community',
      rating: 5,
      tags: ['Vietnam', 'Networking', 'Local']
    },
    {
      title: 'AWS Reddit Community',
      description: 'Subreddit r/aws - nơi thảo luận về AWS với cộng đồng global',
      url: 'https://reddit.com/r/aws',
      category: 'communities',
      type: 'community',
      rating: 4,
      tags: ['Reddit', 'Discussion', 'Global']
    },
    {
      title: 'AWS re:Post',
      description: 'Nền tảng Q&A chính thức của AWS',
      url: 'https://repost.aws/',
      category: 'communities',
      type: 'community',
      rating: 5,
      tags: ['Q&A', 'Official', 'Support']
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'documentation': return Globe;
      case 'training': return BookOpen;
      case 'platform': return Users;
      case 'guide': return FileText;
      case 'whitepaper': return FileText;
      case 'cheatsheet': return Download;
      case 'video': return Video;
      case 'community': return Users;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'documentation': return 'text-blue-600';
      case 'training': return 'text-green-600';
      case 'platform': return 'text-purple-600';
      case 'guide': return 'text-orange-600';
      case 'whitepaper': return 'text-red-600';
      case 'cheatsheet': return 'text-yellow-600';
      case 'video': return 'text-pink-600';
      case 'community': return 'text-teal-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tài nguyên học tập AWS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tổng hợp các tài liệu, công cụ và cộng đồng hữu ích để hỗ trợ 
            hành trình học tập AWS của bạn
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
                placeholder="Tìm kiếm tài nguyên..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredResources.map((resource, index) => {
            const TypeIcon = getTypeIcon(resource.type);
            const typeColor = getTypeColor(resource.type);
            
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors`}>
                        <TypeIcon className={`h-6 w-6 ${typeColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 ml-4">
                      {Array.from({ length: resource.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                      {Array.from({ length: 5 - resource.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {resource.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span className="capitalize">{resource.type.replace('_', ' ')}</span>
                      {resource.downloadable && (
                        <>
                          <span>•</span>
                          <span className="flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            Tải xuống
                          </span>
                        </>
                      )}
                    </div>
                    
                    {resource.url !== '#' ? (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                      >
                        {resource.downloadable ? 'Tải xuống' : 'Xem tài liệu'}
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    ) : (
                      <button
                        onClick={() => alert('Tính năng đang được phát triển')}
                        className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                      >
                        {resource.downloadable ? 'Tải xuống' : 'Xem tài liệu'}
                        {resource.downloadable ? (
                          <Download className="ml-1 h-4 w-4" />
                        ) : (
                          <ExternalLink className="ml-1 h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FileText className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Không tìm thấy tài nguyên</h3>
            <p className="text-gray-500">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
          </div>
        )}

        {/* Additional Resources */}
        <div className="mt-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <BookOpen className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Cần thêm tài nguyên?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Chúng tôi liên tục cập nhật và bổ sung thêm các tài nguyên học tập hữu ích. 
            Hãy để lại góp ý nếu bạn biết nguồn tài liệu tốt nào khác!
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors">
            Đóng góp tài nguyên
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;