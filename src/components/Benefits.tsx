import React from 'react';
import { BarChart3, Lock, UserCog, FileCheck } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Symflowise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform delivers exceptional results through advanced AI technology and customer-centric design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="bg-primary-100 rounded-lg p-3 mr-4">
                <BarChart3 className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">95% Accurate Sentiment Analysis</h3>
                <p className="text-gray-600">
                  Our advanced AI algorithms analyze customer emotions and intent with remarkable precision, enabling agents to respond appropriately and improve satisfaction rates. The system continuously learns from interactions to enhance accuracy over time.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="bg-primary-100 rounded-lg p-3 mr-4">
                <Lock className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Advanced Privacy Controls</h3>
                <p className="text-gray-600">
                  Enterprise-grade security with customizable data retention policies, end-to-end encryption, and compliance with global privacy regulations. Our platform gives you complete control over sensitive customer information while maintaining seamless service.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="bg-primary-100 rounded-lg p-3 mr-4">
                <UserCog className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Personalized Training</h3>
                <p className="text-gray-600">
                  Our AI adapts to your specific business needs through customized training on your company's products, services, and communication style. This ensures consistent brand voice and accurate information across all customer interactions.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="bg-primary-100 rounded-lg p-3 mr-4">
                <FileCheck className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Automated Compliance</h3>
                <p className="text-gray-600">
                  Stay compliant with industry regulations through automated monitoring and enforcement of communication standards. The system flags potential compliance issues in real-time and provides agents with approved response templates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Ready to experience the difference?</h3>
              <p className="text-white/80">
                Join thousands of businesses transforming their customer service with Symflowise.
              </p>
            </div>
            <a href="#" className="bg-white text-primary-600 hover:bg-gray-100 transition-colors px-6 py-3 rounded-lg font-medium whitespace-nowrap">
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
