import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 3; // 3 posts per page
  
  const blogPostsArray = Object.entries(blogPosts).map(([slug, post]) => ({
    slug,
    ...post
  }));

  // Get current page and filters from URL params
  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    const category = searchParams.get('category') || 'All';
    const search = searchParams.get('search') || '';
    
    setCurrentPage(page);
    setSelectedCategory(category);
    setSearchTerm(search);
  }, [searchParams]);

  // Filter posts by category and search
  const filteredPosts = blogPostsArray.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination for filtered posts
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Get unique categories for sidebar
  const categories = ['All', ...new Set(blogPostsArray.map(post => post.category))];
  const categoryCounts = categories.reduce((acc, category) => {
    if (category === 'All') {
      acc[category] = blogPostsArray.length;
    } else {
      acc[category] = blogPostsArray.filter(post => post.category === category).length;
    }
    return acc;
  }, {});

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', page.toString());
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filtering
    const newParams = new URLSearchParams();
    if (category !== 'All') newParams.set('category', category);
    if (searchTerm) newParams.set('search', searchTerm);
    setSearchParams(newParams);
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page when searching
    const newParams = new URLSearchParams();
    if (selectedCategory !== 'All') newParams.set('category', selectedCategory);
    if (searchTerm) newParams.set('search', searchTerm);
    setSearchParams(newParams);
  };

  return (
    <div>
      <SEO 
        title="Blog - PixelHub | Web Design Tips, Development Tutorials & Digital Marketing"
        description="Read PixelHub's latest blog posts about web design trends, development tutorials, digital marketing strategies, and industry insights."
        keywords="web design blog, development tutorials, digital marketing blog, design trends, technology blog, UI/UX tips"
        url="https://pixelhub.com/blog"
        type="blog"
      />
      <div className="cs-page_heading cs-bg cs-center" data-src="/assets/img/blog_hero_bg.jpeg">
        <div className="container">
          <div className="cs-page_heading_in">
            <h1 className="cs-page_title cs-font_50 cs-white_color">Blog</h1>
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Blog</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="cs-height_150 cs-height_lg_80"></div>
      
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {currentPosts.length === 0 ? (
                <div className="cs-no_posts_found text-center">
                  <h3>No posts found</h3>
                  <p>No blog posts match your current filter criteria. Try adjusting your search or category filter.</p>
                  <button 
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchTerm('');
                      setSearchParams({});
                    }}
                    className="cs-text_btn"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#fd550e',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                currentPosts.map((post, index) => (
                <div key={post.slug}>
                  <div className="cs-post cs-style2">
                    <Link to={`/blog/${post.slug}`} className="cs-post_thumb">
                      <img src={post.image} alt={post.title} className="w-100 cs-radius_15" />
                    </Link>
                    <div className="cs-post_info">
                      <div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                        <span className="cs-posted_by">{post.date}</span>
                        <span className="cs-post_avatar">
                          <span>{post.author}</span>
                        </span>
                        <span className="cs-post_category">
                          <Link to="/blog">{post.category}</Link>
                        </span>
                        <span className="cs-post_read_time">{post.readTime}</span>
                      </div>
                      <h2 className="cs-post_title">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <div className="cs-post_subtitle">
                        {post.excerpt}
                      </div>
                      <div className="cs-post_footer">
                        <Link to={`/blog/${post.slug}`} className="cs-text_btn">
                          <span>Continue Reading</span>
                          <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {index < currentPosts.length - 1 && <div className="cs-height_65 cs-height_lg_40"></div>}
                </div>
              )))}
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="cs-pagination cs-style1">
                  <ul className="cs-pagi_list cs-mp0">
                    {/* Previous button */}
                    {currentPage > 1 && (
                      <li className="cs-pagi_item">
                        <button onClick={() => handlePageChange(currentPage - 1)} className="cs-pagi_btn">
                          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(180deg)'}}>
                            <path d="M0 1.272L4.55116 6L0 10.728L1.22326 12L7 6L1.22326 0L0 1.272Z" fill="currentColor"/>
                          </svg>
                        </button>
                      </li>
                    )}
                    
                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <li key={page} className={`cs-pagi_item ${currentPage === page ? 'active' : ''}`}>
                        {currentPage === page ? (
                          <span>{page}</span>
                        ) : (
                          <button onClick={() => handlePageChange(page)} className="cs-pagi_btn">
                            {page}
                          </button>
                        )}
                      </li>
                    ))}
                    
                    {/* Next button */}
                    {currentPage < totalPages && (
                      <li className="cs-pagi_item">
                        <button onClick={() => handlePageChange(currentPage + 1)} className="cs-pagi_btn">
                          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.272L4.55116 6L0 10.728L1.22326 12L7 6L1.22326 0L0 1.272Z" fill="currentColor"/>
                          </svg>
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="col-xl-3 col-lg-4 offset-xl-1">
              <div className="cs-height_0 cs-height_lg_80"></div>
              <div className="cs-sidebar cs-right_sidebar">
                <div className="cs-sidebar_item">
                  <h4 className="cs-sidebar_widget_title">Search</h4>
                  <div className="cs-sidebar_search">
                    <form className="cs-search_form" onSubmit={handleSearch}>
                      <input 
                        type="text" 
                        className="cs-search_input" 
                        placeholder="Search..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button type="submit" className="cs-search_btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M14 14L11.1 11.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
                
                <div className="cs-sidebar_item">
                  <h4 className="cs-sidebar_widget_title">Categories</h4>
                  <ul className="cs-menu_widget cs-mp0">
                    {categories.map((category) => (
                      <li key={category}>
                        <button 
                          onClick={() => handleCategoryFilter(category)}
                          className={`cs-category_btn ${selectedCategory === category ? 'active' : ''}`}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: selectedCategory === category ? '#fd550e' : 'inherit',
                            cursor: 'pointer',
                            padding: 0,
                            textAlign: 'left',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <span>{category}</span>
                          <span>({categoryCounts[category]})</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="cs-sidebar_item">
                  <h4 className="cs-sidebar_widget_title">Recent Posts</h4>
                  <ul className="cs-recent_posts cs-mp0">
                    {Object.entries(blogPosts).slice(0, 3).map(([postSlug, recentPost]) => (
                      <li key={postSlug}>
                        <div className="cs-recent_post">
                          <Link to={`/blog/${postSlug}`} className="cs-recent_post_thumb">
                            <img className="cs-recent_post_thumb_in cs-bg" src={recentPost.image} alt={recentPost.title} />
                          </Link>
                          <div className="cs-recent_post_info">
                            <h3 className="cs-recent_post_title">
                              <Link to={`/blog/${postSlug}`}>{recentPost.title}</Link>
                            </h3>
                            <div className="cs-recent_post_date cs-primary_color">{recentPost.date}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-height_145 cs-height_lg_80"></div>
    </div>
  );
};

export default Blog;
