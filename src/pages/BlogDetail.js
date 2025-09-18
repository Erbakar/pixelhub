import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { slug } = useParams();
  
  // Sample blog data - in a real app, this would come from an API or database
  const blogPosts = {
    'post-1': {
      title: 'Make more productive work flow in few steps',
      date: '07 Mar 2022',
      author: 'Arino Team',
      image: '/assets/img/post_1.jpeg',
      category: 'Productivity',
      content: `
        <p>In today's fast-paced digital world, productivity is key to success. Whether you're a freelancer, entrepreneur, or part of a larger organization, optimizing your workflow can significantly impact your output and overall satisfaction with your work.</p>
        
        <h3>Understanding Workflow Optimization</h3>
        <p>Workflow optimization is the process of improving the efficiency and effectiveness of your work processes. It involves analyzing your current methods, identifying bottlenecks, and implementing solutions that streamline your operations.</p>
        
        <h3>Key Steps to Improve Your Workflow</h3>
        <h4>1. Audit Your Current Process</h4>
        <p>Before making any changes, it's crucial to understand how you currently work. Track your time for a week and note down all the tasks you perform, how long they take, and any obstacles you encounter.</p>
        
        <h4>2. Identify Bottlenecks</h4>
        <p>Look for patterns in your audit. Are there specific tasks that consistently take longer than expected? Are there interruptions that frequently derail your focus? These are your bottlenecks.</p>
        
        <h4>3. Implement Automation</h4>
        <p>Many repetitive tasks can be automated using various tools and software. From email templates to social media scheduling, automation can free up significant time in your day.</p>
        
        <h4>4. Use Project Management Tools</h4>
        <p>Tools like Trello, Asana, or Monday.com can help you organize tasks, set deadlines, and collaborate more effectively with team members.</p>
        
        <h4>5. Establish Clear Communication Channels</h4>
        <p>Miscommunication is a major productivity killer. Establish clear protocols for how and when team members should communicate about different types of issues.</p>
        
        <h3>Measuring Success</h3>
        <p>After implementing changes, it's important to measure their effectiveness. Set up metrics that matter to your business, such as time to completion, quality scores, or customer satisfaction ratings.</p>
        
        <p>Remember, workflow optimization is an ongoing process. What works today might need adjustment tomorrow as your business grows and evolves. Stay flexible and be willing to adapt your processes as needed.</p>
      `
    },
    'post-2': {
      title: 'How to make website WCAG compliant?',
      date: '05 Mar 2022',
      author: 'Arino Team',
      image: '/assets/img/post_2.jpeg',
      category: 'Web Development',
      content: `
        <p>Web Content Accessibility Guidelines (WCAG) compliance is not just a legal requirement in many jurisdictions—it's also the right thing to do. Making your website accessible ensures that people with disabilities can use your site effectively.</p>
        
        <h3>Understanding WCAG Guidelines</h3>
        <p>WCAG 2.1 is organized around four main principles, often referred to by the acronym POUR:</p>
        <ul>
          <li><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
          <li><strong>Operable:</strong> Interface components must be operable</li>
          <li><strong>Understandable:</strong> Information and UI operation must be understandable</li>
          <li><strong>Robust:</strong> Content must be robust enough for interpretation by assistive technologies</li>
        </ul>
        
        <h3>Key Implementation Steps</h3>
        <h4>1. Semantic HTML</h4>
        <p>Use proper HTML elements for their intended purpose. Headers should use h1-h6 tags, lists should use ul/ol tags, and buttons should be actual button elements.</p>
        
        <h4>2. Alternative Text for Images</h4>
        <p>Every image should have descriptive alt text that explains the content or function of the image. Decorative images should have empty alt attributes.</p>
        
        <h4>3. Keyboard Navigation</h4>
        <p>Ensure all interactive elements can be accessed and operated using only a keyboard. This includes proper focus indicators and logical tab order.</p>
        
        <h4>4. Color and Contrast</h4>
        <p>Don't rely on color alone to convey information. Ensure sufficient color contrast between text and background colors (minimum 4.5:1 for normal text).</p>
        
        <h4>5. Form Accessibility</h4>
        <p>Label all form inputs clearly, provide error messages that are easy to understand, and group related fields appropriately.</p>
        
        <h3>Testing Your Website</h3>
        <p>Regular testing is crucial for maintaining accessibility. Use automated tools like axe-core or WAVE, but remember that manual testing is also essential. Try navigating your site using only a keyboard or with a screen reader.</p>
        
        <p>Accessibility is an ongoing commitment, not a one-time fix. As you add new features or content, always consider their accessibility implications.</p>
      `
    },
    'post-3': {
      title: 'How to work with prototype design with adobe xd featuring tools',
      date: '03 Mar 2022',
      author: 'Arino Team',
      image: '/assets/img/post_3.jpeg',
      category: 'Design',
      content: `
        <p>Adobe XD has revolutionized the way designers create prototypes and collaborate with development teams. Its intuitive interface and powerful features make it an essential tool for modern UX/UI design workflows.</p>
        
        <h3>Getting Started with Adobe XD</h3>
        <p>Adobe XD is a vector-based user experience design tool that allows you to create wireframes, prototypes, and design specifications all in one place. It's particularly powerful for creating interactive prototypes that closely mimic the final user experience.</p>
        
        <h3>Essential XD Features for Prototyping</h3>
        <h4>1. Artboards and Responsive Resize</h4>
        <p>Create multiple artboards for different screen sizes and use responsive resize to ensure your designs adapt properly across devices.</p>
        
        <h4>2. Components and States</h4>
        <p>Create reusable components with multiple states (default, hover, pressed) to maintain consistency across your design and speed up your workflow.</p>
        
        <h4>3. Auto-Animate</h4>
        <p>Use Auto-Animate to create smooth transitions between artboards. This feature automatically animates objects that appear in both the source and destination artboards.</p>
        
        <h4>4. Voice Prototyping</h4>
        <p>XD's voice prototyping capabilities allow you to design voice user interfaces and test voice interactions within your prototypes.</p>
        
        <h4>5. Plugins and Integrations</h4>
        <p>Extend XD's functionality with plugins for everything from content generation to design system management.</p>
        
        <h3>Best Practices for XD Prototyping</h3>
        <h4>Organize Your Artboards</h4>
        <p>Keep your artboards organized with clear naming conventions and logical groupings. This makes it easier for others to understand your design flow.</p>
        
        <h4>Use Real Content</h4>
        <p>Whenever possible, use real or realistic content in your prototypes. This helps stakeholders better understand how the design will work with actual data.</p>
        
        <h4>Test Early and Often</h4>
        <p>Share your prototypes with users and stakeholders early in the design process. XD's sharing features make it easy to gather feedback and iterate quickly.</p>
        
        <h3>Collaboration Features</h3>
        <p>XD's collaboration features include real-time co-editing, commenting, and design specs that automatically generate CSS code for developers. These features help bridge the gap between design and development teams.</p>
        
        <p>By mastering these XD features and following best practices, you'll be able to create compelling prototypes that effectively communicate your design vision and improve the overall user experience.</p>
      `
    }
  };

  const post = blogPosts[slug] || blogPosts['post-1'];

  return (
    <div>
      <div className="cs-page_heading cs-bg cs-center" data-src="/assets/img/blog_hero_bg.jpeg">
        <div className="container">
          <div className="cs-page_heading_in">
            <h1 className="cs-page_title cs-font_50 cs-white_color">{post.title}</h1>
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><a href="/" rel="noopener">Home</a></li>
              <li className="breadcrumb-item"><a href="/blog" rel="noopener">Blog</a></li>
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
              <div className="cs-post cs-style2">
                <div className="cs-post_thumb">
                  <img src={post.image} alt={post.title} className="w-100 cs-radius_15" />
                </div>
                <div className="cs-post_info">
                  <div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                    <span className="cs-posted_by">{post.date}</span>
                    <a href="/blog" className="cs-post_avatar">
                      <span>{post.author}</span>
                    </a>
                    <span className="cs-post_category">
                      <a href="/blog">{post.category}</a>
                    </span>
                  </div>
                  <div className="cs-height_25 cs-height_lg_25"></div>
                  <div className="cs-post_content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                  
                  <div className="cs-height_50 cs-height_lg_40"></div>
                  
                  {/* Tags */}
                  <div className="cs-post_tags">
                    <div className="cs-post_tags_left">
                      <h4>Tags:</h4>
                      <div className="cs-post_tags_in">
                        <a href="/blog" className="cs-post_tag">{post.category}</a>
                        <a href="/blog" className="cs-post_tag">Tutorial</a>
                        <a href="/blog" className="cs-post_tag">Tips</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="cs-height_50 cs-height_lg_40"></div>
                  
                  {/* Navigation */}
                  <div className="cs-page_navigation">
                    <div>
                      <a href="/blog/post-2" className="cs-text_btn">
                        <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM26 6.75H1V5.25H26V6.75Z" fill="currentColor"/>
                        </svg>
                        <span>Previous Post</span>
                      </a>
                    </div>
                    <div>
                      <a href="/blog/post-3" className="cs-text_btn">
                        <span>Next Post</span>
                        <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor"/>
                        </svg>
                      </a>
                    </div>
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
                      <a href="/blog">UI/UX Design</a>
                      <span>(3)</span>
                    </li>
                    <li>
                      <a href="/blog">Development</a>
                      <span>(7)</span>
                    </li>
                    <li>
                      <a href="/blog">WordPress</a>
                      <span>(2)</span>
                    </li>
                    <li>
                      <a href="/blog">Technology</a>
                      <span>(5)</span>
                    </li>
                    <li>
                      <a href="/blog">Graphic Design</a>
                      <span>(9)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="cs-sidebar_item">
                  <h4 className="cs-sidebar_widget_title">Recent Posts</h4>
                  <ul className="cs-recent_posts cs-mp0">
                    <li>
                      <div className="cs-recent_post">
                        <a href="/blog/post-1" className="cs-recent_post_thumb">
                          <div className="cs-recent_post_thumb_in cs-bg" data-src="/assets/img/recent_post_1.jpeg"></div>
                        </a>
                        <div className="cs-recent_post_info">
                          <h3 className="cs-recent_post_title">
                            <a href="/blog/post-1">Make more productive work flow in few steps</a>
                          </h3>
                          <div className="cs-recent_post_date cs-primary_color">March 7, 2022</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="cs-recent_post">
                        <a href="/blog/post-2" className="cs-recent_post_thumb">
                          <div className="cs-recent_post_thumb_in cs-bg" data-src="/assets/img/recent_post_2.jpeg"></div>
                        </a>
                        <div className="cs-recent_post_info">
                          <h3 className="cs-recent_post_title">
                            <a href="/blog/post-2">How to make website WCAG compliant?</a>
                          </h3>
                          <div className="cs-recent_post_date cs-primary_color">March 5, 2022</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="cs-recent_post">
                        <a href="/blog/post-3" className="cs-recent_post_thumb">
                          <div className="cs-recent_post_thumb_in cs-bg" data-src="/assets/img/recent_post_3.jpeg"></div>
                        </a>
                        <div className="cs-recent_post_info">
                          <h3 className="cs-recent_post_title">
                            <a href="/blog/post-3">Adobe XD Prototyping Guide</a>
                          </h3>
                          <div className="cs-recent_post_date cs-primary_color">March 3, 2022</div>
                        </div>
                      </div>
                    </li>
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
