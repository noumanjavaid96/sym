import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their customer service with Symflowise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex text-yellow-400 mb-4">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <blockquote className="text-gray-700 mb-6">
              "Implementing Symflowise has been a game-changer for our customer support team. The AI-powered routing has reduced our response times by 45%, and our customer satisfaction scores have never been higher. The seamless integration with our existing systems made the transition incredibly smooth."
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                alt="Sarah Johnson" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-gray-500 text-sm">Customer Service Director, TechGlobal</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex text-yellow-400 mb-4">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <blockquote className="text-gray-700 mb-6">
              "The sentiment analysis feature has transformed how we understand our customers. We can now identify and address issues before they escalate, and our agents are better prepared for every interaction. Symflowise has helped us reduce customer churn by 28% in just six months."
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                alt="Michael Chen" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-medium">Michael Chen</p>
                <p className="text-gray-500 text-sm">VP of Operations, RetailNow</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex text-yellow-400 mb-4">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <blockquote className="text-gray-700 mb-6">
              "As a rapidly growing startup, we needed a solution that could scale with us. Symflowise not only met our immediate needs but has grown alongside our business. The personalized training feature ensures our AI interactions perfectly match our brand voice, and the compliance tools give us peace of mind."
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                alt="Emily Rodriguez" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-medium">Emily Rodriguez</p>
                <p className="text-gray-500 text-sm">Founder & CEO, FinanceFlow</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
            <span>Read more success stories</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
