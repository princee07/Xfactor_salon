import React from 'react';

type ArticleItem = {
    type: "article" | "interview";
    title: string;
    date: string;
    source: string;
    excerpt: string;
    link: string;
};

type VideoItem = {
    type: "video";
    title: string;
    duration: string;
    description: string;
    views: string;
};

type SocialItem = {
    type: "social";
    platform: string;
    content: string;
    engagement: string;
    date: string;
};

const MediaPage = () => {
    const mediaCategories = [
        {
            title: "Press & Features",
            items: [
                {
                    type: "article",
                    title: "XFactor Salon Named 'Best Salon' by City Magazine",
                    date: "March 2024",
                    source: "City Style Magazine",
                    excerpt: "XFactor Salon has been recognized for their exceptional service and innovative beauty treatments...",
                    link: "#"
                },
                {
                    type: "article",
                    title: "Top 10 Beauty Trends Spotted at XFactor Salon",
                    date: "February 2024",
                    source: "Beauty Weekly",
                    excerpt: "From bold colors to classic cuts, XFactor Salon is setting the trends for 2024...",
                    link: "#"
                },
                {
                    type: "interview",
                    title: "Behind the Scenes: Interview with XFactor's Lead Stylist",
                    date: "January 2024",
                    source: "Hair & Beauty Today",
                    excerpt: "We sat down with our lead stylist to discuss the latest techniques and salon philosophy...",
                    link: "#"
                }
            ]
        },
        {
            title: "Video Content",
            items: [
                {
                    type: "video",
                    title: "Hair Transformation Time-lapse",
                    duration: "2:30",
                    description: "Watch an amazing blonde transformation from start to finish",
                    views: "15,420"
                },
                {
                    type: "video",
                    title: "Bridal Hair Tutorial",
                    duration: "8:45",
                    description: "Step-by-step bridal updo tutorial by our expert stylists",
                    views: "32,100"
                },
                {
                    type: "video",
                    title: "Salon Tour & Behind the Scenes",
                    duration: "5:15",
                    description: "Take a virtual tour of our luxurious salon facilities",
                    views: "8,750"
                },
                {
                    type: "video",
                    title: "Color Correction Process",
                    duration: "12:20",
                    description: "Professional color correction techniques demonstrated",
                    views: "25,680"
                }
            ]
        },
        {
            title: "Social Media Highlights",
            items: [
                {
                    type: "social",
                    platform: "Instagram",
                    content: "Client transformation reveal",
                    engagement: "2,450 likes",
                    date: "2 days ago"
                },
                {
                    type: "social",
                    platform: "TikTok",
                    content: "Quick styling tips for busy mornings",
                    engagement: "45.2K views",
                    date: "1 week ago"
                },
                {
                    type: "social",
                    platform: "Facebook",
                    content: "New service announcement: Keratin treatments",
                    engagement: "156 shares",
                    date: "2 weeks ago"
                }
            ]
        }
    ];

    const awards = [
        {
            year: "2024",
            title: "Best Hair Salon",
            organization: "City Style Awards",
            image: "award-1"
        },
        {
            year: "2023",
            title: "Excellence in Beauty Services",
            organization: "Beauty Industry Awards",
            image: "award-2"
        },
        {
            year: "2023",
            title: "Customer Choice Award",
            organization: "Local Business Excellence",
            image: "award-3"
        },
        {
            year: "2022",
            title: "Innovation in Beauty",
            organization: "Beauty Tech Awards",
            image: "award-4"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Media & Press</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Stay updated with XFactor Salon in the news, our latest features,
                            video content, and social media highlights. See what the beauty community is saying about us.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Media */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-8 text-white mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Featured in City Style Magazine</h2>
                                <p className="text-lg mb-6 opacity-90">
                                    &quot;XFactor Salon continues to set the standard for excellence in the beauty industry
                                    with their innovative techniques and exceptional customer service.&quot;
                                </p>
                                <button className="bg-white text-pink-600 hover:bg-gray-50 px-6 py-3 rounded-full font-semibold transition-colors duration-200">
                                    Read Full Article
                                </button>
                            </div>
                            <div className="bg-white bg-opacity-20 h-64 rounded-lg flex items-center justify-center">
                                <span className="text-white text-lg">Magazine Cover Image</span>
                            </div>
                        </div>
                    </div>

                    {/* Media Categories */}
                    <div className="space-y-16">
                        {mediaCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex}>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.title}</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                                            {/* Media Preview */}
                                            <div className="bg-gray-200 h-48 flex items-center justify-center">
                                                {item.type === 'video' ? (
                                                    <div className="text-center">
                                                        <div className="bg-pink-500 h-16 w-16 rounded-full mx-auto mb-2 flex items-center justify-center">
                                                            <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-gray-600 text-sm">
                                                            {item.type === 'video' ? (item as VideoItem).duration : ''}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-500">
                                                        {item.type === 'article' ? '📰' :
                                                            item.type === 'interview' ? '🎤' : '📱'} Content Preview
                                                    </span>
                                                )}
                                            </div>

                                            <div className="p-6">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                    {item.type === 'social' ? (item as SocialItem).content : (item as ArticleItem | VideoItem).title}
                                                </h3>

                                                {item.type !== 'video' && item.type !== 'social' && (
                                                    <p className="text-sm text-pink-600 font-medium mb-2">{(item as ArticleItem).source}</p>
                                                )}

                                                {item.type === 'social' && (
                                                    <p className="text-sm text-pink-600 font-medium mb-2">{(item as SocialItem).platform}</p>
                                                )}

                                                {(item.type === 'article' || item.type === 'interview') && (
                                                    <p className="text-gray-600 text-sm mb-3">{(item as ArticleItem).excerpt}</p>
                                                )}

                                                {item.type === 'video' && (
                                                    <p className="text-gray-600 text-sm mb-3">{(item as VideoItem).description}</p>
                                                )}

                                                <div className="flex justify-between items-center text-sm text-gray-500">
                                                    <span>
                                                        {item.type === 'video' ? '' :
                                                            item.type === 'social' ? (item as SocialItem).date :
                                                                (item as ArticleItem).date}
                                                    </span>
                                                    {item.type === 'video' && <span>{(item as VideoItem).views} views</span>}
                                                    {item.type === 'social' && <span>{(item as SocialItem).engagement}</span>}
                                                </div>

                                                <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full text-sm font-medium transition-colors duration-200">
                                                    {item.type === 'video' ? 'Watch Video' :
                                                        item.type === 'social' ? 'View Post' : 'Read More'}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We&apos;re proud to be recognized by industry leaders and our community for our
                            commitment to excellence in beauty and customer service.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {awards.map((award, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="bg-yellow-100 h-20 w-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-yellow-600 text-3xl">🏆</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                                <p className="text-sm text-gray-600 mb-1">{award.organization}</p>
                                <p className="text-sm text-pink-600 font-medium">{award.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Our Journey</h2>
                        <p className="text-gray-600 mb-8">
                            Connect with us on social media for daily inspiration, tips, and behind-the-scenes content.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Instagram */}
                        <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-6 rounded-lg text-white text-center">
                            <div className="text-4xl mb-4">📸</div>
                            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                            <p className="mb-4 opacity-90">Daily transformations & style inspiration</p>
                            <p className="text-lg font-bold mb-4">25.6K Followers</p>
                            <button className="bg-white text-purple-600 hover:bg-gray-50 px-4 py-2 rounded-full font-medium transition-colors duration-200">
                                Follow
                            </button>
                        </div>

                        {/* TikTok */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-600 p-6 rounded-lg text-white text-center">
                            <div className="text-4xl mb-4">🎵</div>
                            <h3 className="text-xl font-semibold mb-2">TikTok</h3>
                            <p className="mb-4 opacity-90">Quick tutorials & trending styles</p>
                            <p className="text-lg font-bold mb-4">12.3K Followers</p>
                            <button className="bg-white text-gray-800 hover:bg-gray-50 px-4 py-2 rounded-full font-medium transition-colors duration-200">
                                Follow
                            </button>
                        </div>

                        {/* Facebook */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-6 rounded-lg text-white text-center">
                            <div className="text-4xl mb-4">👍</div>
                            <h3 className="text-xl font-semibold mb-2">Facebook</h3>
                            <p className="mb-4 opacity-90">Updates, events & community</p>
                            <p className="text-lg font-bold mb-4">8.9K Likes</p>
                            <button className="bg-white text-blue-600 hover:bg-gray-50 px-4 py-2 rounded-full font-medium transition-colors duration-200">
                                Like
                            </button>
                        </div>

                        {/* YouTube */}
                        <div className="bg-gradient-to-br from-red-600 to-red-400 p-6 rounded-lg text-white text-center">
                            <div className="text-4xl mb-4">📺</div>
                            <h3 className="text-xl font-semibold mb-2">YouTube</h3>
                            <p className="mb-4 opacity-90">Detailed tutorials & salon tours</p>
                            <p className="text-lg font-bold mb-4">5.2K Subscribers</p>
                            <button className="bg-white text-red-600 hover:bg-gray-50 px-4 py-2 rounded-full font-medium transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-pink-50 rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter for the latest news, beauty tips, exclusive offers,
                            and first access to our media content.
                        </p>

                        <div className="max-w-md mx-auto flex gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MediaPage;