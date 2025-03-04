import React from 'react';
import { Bot, GitBranch, Zap } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionary Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform transforms customer service with cutting-edge technology and intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-primary-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Bot className="text-primary-600" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Multi-model AI Support</h3>
            <p className="text-gray-600 mb-4">
              Advanced AI models powered by Gemini integration deliver human-like interactions and sophisticated problem-solving capabilities, resulting in 40% faster resolution times.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-gray-700">Human-like conversations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-gray-700">Multi-language support</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-gray-700">Context-aware responses</span>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-primary-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <GitBranch className="text-primary-600" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Predictive Routing</h3>
            <p className="text-gray-600 mb-4">
              Industry-first AI-driven customer routing system leverages historical data and real-time analytics to achieve 95% first-contact resolution rate.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-gray-700">Smart agent matching</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-gray-700">Reduced wait times</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-gray-700">Continuous optimization</span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-primary-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Zap className="text-primary-600" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
            <p className="text-gray-600 mb-4">
              Zero context loss during human handoff with intelligent agent assistance, reducing average handling time by 35% while maintaining 98% customer satisfaction.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-gray-700">Smooth AI-to-human transitions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-gray-700">Complete conversation history</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-gray-700">Real-time agent suggestions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
            <span>Explore all features</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
