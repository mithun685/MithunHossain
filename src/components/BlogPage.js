// BlogPage.js
import React from 'react';
import './BlogPage.css';

function BlogPage() {
    // Sample blog posts data
    const posts = [
        { id: 1, title: 'Understanding Neural Networks', content: 'Neural networks are...' },
        { id: 2, title: 'Introduction to Natural Language Processing', content: 'NLP is a field...' },
        // Add more posts as needed
    ];

    return (
        <div className="blog-container">
            <h1>My Blog</h1>
            <ul className="blog-list">
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogPage;
