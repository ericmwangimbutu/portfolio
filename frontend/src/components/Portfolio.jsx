import React from 'react';
import { motion } from 'framer-motion';

// Import images (ensure these exist in assets or public folder)
// For now, I will use placeholders or assume they will be added.
// To make it robust without the actual images, I'll use placeholders if imports fail.
// But based on the Next.js code, they were in public/. In Vite, we can reference public/ directly or import.
// Let's assume public/ folder usage for simplicity like Next.js, 
// using absolute paths which Vite supports for public dir.

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution built with Vue.js and Python/Django.',
        tags: ['Vue.js', 'Python', 'Django'],
        image: '/ecommerce-platform.png',
        liveDemo: 'https://alycs-fashion.com',
        sourceCode: 'https://github.com/ericmwangimbutu/alycs-fashion',
    },
    {
        title: 'Business Website',
        description: 'A modern business website with React and PHP/laravel.',
        tags: ['React', 'PHP', 'Laravel'],
        image: '/inner-beauty.png',
        liveDemo: 'https://inner-beauty.beauty',
        sourceCode: 'https://github.com/ericmwangimbutu/inner-beauty',
    },
    {
        title: 'Portfolio Website',
        description: 'A portfolio website built with Next.js and Tailwind CSS.',
        tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        image: '/portfolio-website.png',
        liveDemo: 'https://ericmwangi.dev',
        sourceCode: 'https://github.com/ericmwangimbutu/nextjs-portfolio',
    },
    {
        title: 'Business Website',
        description: 'A modern business website with React and PHP/laravel.',
        tags: ['React', 'PHP', 'Laravel'],
        image: '/inner-beauty.png',
        liveDemo: 'https://inner-beauty.beauty',
        sourceCode: 'https://github.com/ericmwangimbutu/inner-beauty',
    },
    {
        title: 'Business Website',
        description: 'A modern business website with React and PHP/laravel.',
        tags: ['React', 'PHP', 'Laravel'],
        image: '/inner-beauty.png',
        liveDemo: 'https://inner-beauty.beauty',
        sourceCode: 'https://github.com/ericmwangimbutu/inner-beauty',
    }
];

const Portfolio = () => {
    return (
        <section className="py-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-xl overflow-hidden group"
                    >
                        <div className={`h-48 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80 group-hover:opacity-100 transition-opacity overflow-hidden`}>
                            {/* Improved Image handling: simple img tag for Vite public assets */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://placehold.co/600x400?text=Project+Image'; // Fallback
                                }}
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-2 p-6 pt-0">
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-4 py-2.5 transition-colors">Live Demo</a>
                            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="text-white bg-gray-700 hover:bg-gray-600 font-medium rounded-full text-sm px-4 py-2.5 transition-colors">Source Code</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
