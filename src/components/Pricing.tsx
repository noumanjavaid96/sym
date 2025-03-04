import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs with transparent pricing and no hidden fees.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Annual</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={!isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
            <span className={`ml-3 ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Monthly</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600">Perfect for small businesses just getting started with AI.</p>
            </div>
            <div className="mb-6">
              <p className="text-4xl font-bold">
                ${isAnnual ? '49' : '59'}
                <span className="text-lg font-normal text-gray-500">/{isAnnual ? 'mo' : 'mo'}</span>
              </p>
              {isAnnual && <p className="text-sm text-primary-600 mt-1">Billed annually (save 17%)</p>}
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Up to 5 AI agents</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Basic sentiment analysis</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Standard reporting</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Email support</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>1,000 AI interactions/month</span>
              </li>
            </ul>
            <a href="#" className="block text-center bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 transition-colors px-6 py-3 rounded-lg font-medium">
              Start Free Trial
            </a>
          </div>

          {/* Professional Plan */}
          <div className="bg-white rounded-xl p-8 border-2 border-primary-500 shadow-lg relative">
            <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-gray-600">Ideal for growing businesses with advanced needs.</p>
            </div>
            <div className="mb-6">
              <p className="text-4xl font-bold">
                ${isAnnual ? '99' : '119'}
                <span className="text-lg font-normal text-gray-500">/{isAnnual ? 'mo' : 'mo'}</span>
              </p>
              {isAnnual && <p className="text-sm text-primary-600 mt-1">Billed annually (save 17%)</p>}
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Up to 20 AI agents</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Advanced sentiment analysis</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Custom reporting & analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Priority support</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>5,000 AI interactions/month</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Custom AI training</span>
              </li>
            </ul>
            <a href="#" className="block text-center bg-primary-600 text-white hover:bg-primary-700 transition-colors px-6 py-3 rounded-lg font-medium">
              Start Free Trial
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600">For large organizations with complex requirements.</p>
            </div>
            <div className="mb-6">
              <p className="text-4xl font-bold">
                Custom
                <span className="text-lg font-normal text-gray-500"></span>
              </p>
              <p className="text-sm text-gray-500 mt-1">Contact us for custom pricing</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Unlimited AI agents</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Enterprise-grade security</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Advanced compliance tools</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Unlimited AI interactions</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>24/7 premium support</span>
              </li>
            </ul>
            <a href="#" className="block text-center bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 transition-colors px-6 py-3 rounded-lg font-medium">
              Contact Sales
            </a>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Frequently Asked Questions</h3>
            <p className="text-gray-600">Find answers to common questions about our pricing and features.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-2">Can I change plans later?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">What happens if I exceed my monthly interactions?</h4>
              <p className="text-gray-600">Additional interactions are billed at a per-use rate. We'll notify you when you're approaching your limit.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Is there a setup fee?</h4>
              <p className="text-gray-600">No, there are no setup fees for any of our plans. You only pay the advertised monthly or annual rate.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Do you offer a free trial?</h4>
              <p className="text-gray-600">Yes, all plans come with a 14-day free trial so you can test the features before committing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
