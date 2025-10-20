import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogData';

const BlogDetail = () => {
  const { slug } = useParams();
  
  // Get the blog post or fallback to first post
  const post = blogPosts[slug] || blogPosts['complete-web-development-guide-2024'];

  // Helper function to get previous and next posts
  const getNavigationPosts = (currentSlug) => {
    const postSlugs = Object.keys(blogPosts);
    const currentIndex = postSlugs.indexOf(currentSlug);
    
    const previousSlug = currentIndex > 0 ? postSlugs[currentIndex - 1] : null;
    const nextSlug = currentIndex < postSlugs.length - 1 ? postSlugs[currentIndex + 1] : null;
    
    return {
      previous: previousSlug ? { slug: previousSlug, ...blogPosts[previousSlug] } : null,
      next: nextSlug ? { slug: nextSlug, ...blogPosts[nextSlug] } : null
    };
  };

  const navigationPosts = getNavigationPosts(slug);

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://pixelhub.com${post.image}`,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "PixelHub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pixelhub.com/assets/img/logo.svg"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pixelhub.com/blog/${slug}`
    }
  };

  return (
    <div>
      <SEO 
        title={`${post.title} - PixelHub Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        url={`https://pixelhub.com/blog/${slug}`}
        type="article"
        image={post.image}
        structuredData={blogStructuredData}
      />
      
      <div 
        className="cs-page_heading cs-bg cs-center" 
        data-src="/assets/img/blog_hero_bg.jpeg"
        style={{backgroundImage: 'url(/assets/img/blog_hero_bg.jpeg)'}}
      >
        <div className="container">
          <div className="cs-page_heading_in">
            <h1 className="cs-page_title cs-font_50 cs-white_color">{post.title}</h1>
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
              <li className="breadcrumb-item active">{post.category}</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="cs-height_150 cs-height_lg_80"></div>
      
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cs-post cs-style1">
                <div className="cs-post_thumb">
                  <img src={post.image} alt={post.title} className="w-100 cs-radius_15" />
                </div>
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
                  <div className="cs-height_25 cs-height_lg_25"></div>
                  <div className="cs-post_content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                  
                  <div className="cs-height_50 cs-height_lg_40"></div>
                  
                  {/* Tags */}
                  <div className="cs-post_tags">
                    <div className="cs-post_tags_left">
                      <h4>Tags:</h4>
                      <div className="cs-post_tags_in">
                        {post.tags.map((tag, index) => (
                          <Link key={index} to="/blog" className="cs-post_tag">{tag}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="cs-height_50 cs-height_lg_40"></div>
                  
                  {/* Navigation */}
                  <div className="cs-post_nav">
                    {navigationPosts.previous && (
                      <div className="cs-post_nav_item cs-post_nav_left">
                        <Link to={`/blog/${navigationPosts.previous.slug}`} className="cs-post_nav_link">
                          <span className="cs-post_nav_icon">
                            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM24 6.75H1V5.25H24V6.75Z" fill="currentColor"/>
                            </svg>
                          </span>
                          <span className="cs-post_nav_text">
                            <span>Previous Post</span>
                            <h3>{navigationPosts.previous.title}</h3>
                          </span>
                        </Link>
                      </div>
                    )}
                    {navigationPosts.next && (
                      <div className="cs-post_nav_item cs-post_nav_right">
                        <Link to={`/blog/${navigationPosts.next.slug}`} className="cs-post_nav_link">
                          <span className="cs-post_nav_icon">
                            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.5303 6.53033C23.8232 6.23744 23.8232 5.76256 23.5303 5.46967L18.7574 0.696699C18.4645 0.403806 17.9896 0.403806 17.6967 0.696699C17.4038 0.989593 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM0 6.75H23V5.25H0V6.75Z" fill="currentColor"/>
                            </svg>
                          </span>
                          <span className="cs-post_nav_text">
                            <span>Next Post</span>
                            <h3>{navigationPosts.next.title}</h3>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-3 col-lg-4 offset-xl-1">
              <div className="cs-height_0 cs-height_lg_80"></div>
              <div className="cs-sidebar cs-right_sidebar">
                <div className="cs-sidebar_item">
                  <h4 className="cs-sidebar_widget_title">Search</h4>
                  <div className="cs-sidebar_search">
                    <form className="cs-search_form">
                      <input type="text" className="cs-search_input" placeholder="Search..." />
                      <button className="cs-search_btn">
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
                    <li>
                      <Link to="/blog">Web Development</Link>
                      <span>(3)</span>
                    </li>
                    <li>
                      <Link to="/blog">UI/UX Design</Link>
                      <span>(2)</span>
                    </li>
                    <li>
                      <Link to="/blog">JavaScript Frameworks</Link>
                      <span>(1)</span>
                    </li>
                    <li>
                      <Link to="/blog">Mobile Design</Link>
                      <span>(1)</span>
                    </li>
                    <li>
                      <Link to="/blog">SEO</Link>
                      <span>(1)</span>
                    </li>
                    <li>
                      <Link to="/blog">CSS</Link>
                      <span>(1)</span>
                    </li>
                    <li>
                      <Link to="/blog">Accessibility</Link>
                      <span>(1)</span>
                    </li>
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

export default BlogDetail;