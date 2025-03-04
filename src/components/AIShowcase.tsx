import React from 'react';
import { Bot, Sparkles, BarChart3, MessageSquare } from 'lucide-react';

const AIShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 mb-6">
            <Sparkles size={16} className="mr-2" />
            <span className="text-sm font-medium">AI-Powered Innovation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Future of Customer Service</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our advanced AI platform transforms how businesses connect with customers, delivering personalized experiences at scale.
          </p>
        </div>

        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute -z-10 top-1/4 -right-20 w-80 h-80 bg-primary-200 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute -z-10 bottom-1/4 -left-20 w-80 h-80 bg-secondary-200 rounded-full filter blur-3xl opacity-30"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Image with floating elements */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-4 relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="AI Customer Service Dashboard" 
                  className="rounded-xl w-full"
                />
                
                {/* Floating UI elements */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center">
                  <Bot className="text-primary-600 mr-2" size={20} />
                  <span className="text-sm font-medium">AI Assistant Active</span>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center mb-2">
                    <BarChart3 className="text-primary-600 mr-2" size={18} />
                    <span className="text-sm font-medium">Sentiment Analysis</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="h-2 w-12 rounded-full bg-green-500"></div>
                    <div className="h-2 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Chat bubbles */}
              <div className="absolute top-1/4 -right-12 bg-white p-3 rounded-lg shadow-md max-w-[200px] animate-float" style={{animationDelay: '0.5s'}}>
                <div className="flex items-start mb-2">
                  <MessageSquare className="text-primary-600 mr-2 flex-shrink-0" size={16} />
                  <p className="text-xs">How can I help you today?</p>
                </div>
                <div className="h-1 w-20 bg-gray-200 rounded-full"></div>
              </div>
              
              <div className="absolute bottom-1/4 -left-12 bg-white p-3 rounded-lg shadow-md max-w-[200px] animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-start mb-2">
                  <MessageSquare className="text-secondary-600 mr-2 flex-shrink-0" size={16} />
                  <p className="text-xs">Processing your request...</p>
                </div>
                <div className="flex space-x-1">
                  <div className="h-1 w-3 bg-secondary-400 rounded-full"></div>
                  <div className="h-1 w-3 bg-secondary-400 rounded-full"></div>
                  <div className="h-1 w-3 bg-secondary-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Right side: Features */}
            <div>
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-lg p-3 mr-4">
                      <Bot className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Intelligent Conversations</h3>
                      <p className="text-gray-600">
                        Our AI understands context, sentiment, and intent to deliver human-like interactions that resolve customer issues efficiently.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-lg p-3 mr-4">
                      <BarChart3 className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
                      <p className="text-gray-600">
                        Monitor customer sentiment and conversation metrics in real-time to identify trends and improve service quality.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-lg p-3 mr-4">
                      <Sparkles className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                      <p className="text-gray-600">
                        Our AI system learns from every interaction, constantly improving its responses and recommendations over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  <span>Learn more about our AI technology</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
