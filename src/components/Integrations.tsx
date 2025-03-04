import React from 'react';

const Integrations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Symflowise works with your favorite tools and platforms for a unified customer service experience.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {/* Integration logos */}
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <svg className="h-8" viewBox="0 0 100 30" fill="currentColor">
                <path d="M20.5,15.1c-0.1-1.6,0.1-3.2,0.7-4.7c0.6-1.5,1.5-2.8,2.7-3.9c1.2-1.1,2.5-2,4.1-2.6c1.5-0.6,3.2-0.9,4.8-0.9 c1.6,0,3.2,0.3,4.7,0.9c1.5,0.6,2.9,1.5,4,2.6c1.2,1.1,2.1,2.4,2.7,3.9c0.6,1.5,0.9,3.1,0.9,4.7c0,1.6-0.3,3.2-0.9,4.7 c-0.6,1.5-1.5,2.8-2.7,3.9c-1.2,1.1-2.5,2-4,2.6c-1.5,0.6-3.1,0.9-4.7,0.9c-1.6,0-3.3-0.3-4.8-0.9c-1.5-0.6-2.9-1.5-4.1-2.6 c-1.2-1.1-2.1-2.4-2.7-3.9C20.6,18.3,20.4,16.7,20.5,15.1z M26.5,15.1c0,0.9,0.2,1.7,0.5,2.5c0.3,0.8,0.8,1.5,1.4,2.1 c0.6,0.6,1.3,1.1,2.1,1.4c0.8,0.3,1.6,0.5,2.5,0.5c0.9,0,1.7-0.2,2.5-0.5c0.8-0.3,1.5-0.8,2.1-1.4c0.6-0.6,1.1-1.3,1.4-2.1 c0.3-0.8,0.5-1.6,0.5-2.5c0-0.9-0.2-1.7-0.5-2.5c-0.3-0.8-0.8-1.5-1.4-2.1c-0.6-0.6-1.3-1.1-2.1-1.4c-0.8-0.3-1.6-0.5-2.5-0.5 c-0.9,0-1.7,0.2-2.5,0.5c-0.8,0.3-1.5,0.8-2.1,1.4c-0.6,0.6-1.1,1.3-1.4,2.1C26.7,13.4,26.5,14.2,26.5,15.1z"></path>
                <path d="M56.5,4h6v22h-6V4z"></path>
                <path d="M70.5,26h-6V4h6v8.7l7-8.7h7.2l-8.3,9.6l8.3,12.4h-7.4l-6.8-10.4V26z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <svg className="h-8" viewBox="0 0 124 34" fill="currentColor">
                <path d="M49.5,14.1c0-1.9-1.4-3.1-3.2-3.1c-1.8,0-3.2,1.2-3.2,3.1c0,1.9,1.4,3.1,3.2,3.1C48.1,17.2,49.5,16,49.5,14.1z M39.5,14.1 c0-4,3.1-6.8,6.8-6.8c3.7,0,6.8,2.8,6.8,6.8c0,4-3.1,6.8-6.8,6.8C42.6,20.9,39.5,18.1,39.5,14.1z M54.5,7.8h3.3v1.8 c0.8-1.3,2.2-2.1,4.1-2.1c3.5,0,5.5,2.4,5.5,6.1v7.9h-3.5v-7.3c0-2.1-1-3.3-2.9-3.3c-1.9,0-3.1,1.2-3.1,3.3v7.3h-3.5V7.8z M69.5,14.1c0-4,2.9-6.8,6.5-6.8c2,0,3.5,0.8,4.3,2v-1.6h3.3v13.7h-3.3v-1.7c-0.8,1.2-2.3,2-4.3,2C72.4,20.9,69.5,18.1,69.5,14.1z M80.5,14.1c0-1.9-1.4-3.1-3.2-3.1c-1.8,0-3.2,1.2-3.2,3.1c0,1.9,1.4,3.1,3.2,3.1C79.1,17.2,80.5,16,80.5,14.1z M84.5,0.8h3.5v20.7h-3.5 V0.8z M90.5,14.1c0-4,3.1-6.8,6.8-6.8c3.7,0,6.8,2.8,6.8,6.8c0,4-3.1,6.8-6.8,6.8C93.6,20.9,90.5,18.1,90.5,14.1z M100.5,14.1 c0-1.9-1.4-3.1-3.2-3.1c-1.8,0-3.2,1.2-3.2,3.1c0,1.9,1.4,3.1,3.2,3.1C99.1,17.2,100.5,16,100.5,14.1z"></path>
                <path d="M26.5,6.8c-1.4-1.4-3-2.5-4.9-3.2C19.8,2.9,17.8,2.5,15.8,2.5c-2,0-4,0.4-5.9,1.1c-1.8,0.7-3.5,1.8-4.9,3.2 C3.6,8.2,2.5,9.9,1.8,11.7C1.1,13.6,0.7,15.6,0.7,17.6c0,2,0.4,4,1.1,5.9c0.7,1.8,1.8,3.5,3.2,4.9c1.4,1.4,3,2.5,4.9,3.2 c1.8,0.7,3.8,1.1,5.9,1.1c2,0,4-0.4,5.9-1.1c1.8-0.7,3.5-1.8,4.9-3.2c1.4-1.4,2.5-3,3.2-4.9c0.7-1.8,1.1-3.8,1.1-5.9 c0-2-0.4-4-1.1-5.9C29,9.9,27.9,8.2,26.5,6.8z M15.8,28.8c-6.2,0-11.2-5-11.2-11.2c0-6.2,5-11.2,11.2-11.2c6.2,0,11.2,5,11.2,11.2 C27,23.8,22,28.8,15.8,28.8z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <svg className="h-8" viewBox="0 0 150 34" fill="currentColor">
                <path d="M44.5,12.5h-7v-3h17v3h-7v18h-3V12.5z M56.5,9.5h3v8h10v-8h3v21h-3v-10h-10v10h-3V9.5z M76.5,9.5h16v3h-13v6h11v3h-11v6 h13v3h-16V9.5z M95.5,9.5h3l11,14.6V9.5h3v21h-3l-11-14.6v14.6h-3V9.5z M119.5,9.5h3v21h-3V9.5z M126.5,9.5h3l11,14.6V9.5h3v21 h-3l-11-14.6v14.6h-3V9.5z"></path>
                <path d="M15.5,2.5c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S22.7,2.5,15.5,2.5z M15.5,25.5c-5.5,0-10-4.5-10-10s4.5-10,10-10 s10,4.5,10,10S21,25.5,15.5,25.5z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <svg className="h-8" viewBox="0 0 120 30" fill="currentColor">
                <path d="M20.5,15c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S20.5,18.3,20.5,15z M5.5,15c0-5,4-9,9-9s9,4,9,9s-4,9-9,9 S5.5,20,5.5,15z M39.5,10.5h-3v9c0,1.7-1.3,3-3,3s-3-1.3-3-3v-9h-3v9c0,3.3,2.7,6,6,6s6-2.7,6-6V10.5z M43.5,10.5h-3v15h3v-15z M43.5,4.5h-3v3h3V4.5z M59.5,16.5c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S59.5,19.8,59.5,16.5z M50.5,16.5c0-1.7,1.3-3,3-3s3,1.3,3,3 s-1.3,3-3,3S50.5,18.2,50.5,16.5z M60.5,10.5v15h3v-9c0-1.7,1.3-3,3-3s3,1.3,3,3v9h3v-9c0-3.3-2.7-6-6-6 C64.2,10.5,62.1,11.7,60.5,10.5z M83.5,10.5h-9v15h3v-6h6c1.7,0,3-1.3,3-3v-3C86.5,11.8,85.2,10.5,83.5,10.5z M83.5,16.5 c0,0-0.1,0-6,0v-3h6V16.5z M99.5,10.5h-9v15h3v-6h6c1.7,0,3-1.3,3-3v-3C102.5,11.8,101.2,10.5,99.5,10.5z M99.5,16.5 c0,0-0.1,0-6,0v-3h6V16.5z M114.5,13.5v-3h-9v15h9v-3h-6v-3h6v-3h-6v-3H114.5z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <svg className="h-8" viewBox="0 0 120 30" fill="currentColor">
                <path d="M20.5,15c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S20.5,18.3,20.5,15z M5.5,15c0-5,4-9,9-9s9,4,9,9s-4,9-9,9 S5.5,20,5.5,15z M39.5,10.5h-3v9c0,1.7-1.3,3-3,3s-3-1.3-3-3v-9h-3v9c0,3.3,2.7,6,6,6s6-2.7,6-6V10.5z M43.5,10.5h-3v15h3v-15z M43.5,4.5h-3v3h3V4.5z M59.5,16.5c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S59.5,19.8,59.5,16.5z M50.5,16.5c0-1.7,1.3-3,3-3s3,1.3,3,3 s-1.3,3-3,3S50.5,18.2,50.5,16.5z M60.5,10.5v15h3v-9c0-1.7,1.3-3,3-3s3,1.3,3,3v9h3v-9c0-3.3-2.7-6-6-6 C64.2,10.5,62.1,11.7,60.5,10.5z M83.5,10.5h-9v15h3v-6h6c1.7,0,3-1.3,3-3v-3C86.5,11.8,85.2,10.5,83.5,10.5z M83.5,16.5 c0,0-0.1,0-6,0v-3h6V16.5z M99.5,10.5h-9v15h3v-6h6c1.7,0,3-1.3,3-3v-3C102.5,11.8,101.2,10.5,99.5,10.5z M99.5,16.5 c0,0-0.1,0-6,0v-3h6V16.5z M114.5,13.5v-3h-9v15h9v-3h-6v-3h6v-3h-6v-3H114.5z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <svg className="h-8" viewBox="0 0 120 30" fill="currentColor">
                <path d="M20.5,15c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S20.5,18.3,20.5,15z M5.5,15c0-5,4-9,9-9s9,4,9,9s-4,9-9,9 S5.5,20,5.5,15z M39.5,10.5h-3v9c0,1.7-1.3,3-3,3s-3-1.3-3-3v-9h-3v9c0,3.3,2.7,6,6,6s6-2.7,6-6V10.5z M43.5,10.5h-3v15h3v-15z M43.5,4.5h-3v3h3V4.5z M59.5,16.5c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S59.5,19.8,59.5,16.5z M50.5,16.5c0-1.7,1.3-3,3-3s3,1.3,3,3 s-1.3,3-3,3S50.5,18.2,50.5,16.5z M60.5,10.5v15h3v-9c0-1.7,1.3-3,3-3s3,1.3,3,3v9h3v-9c0-3.3-2.7-6-6-6 C64.2,10.5,62.1,11.7,60.5,10.5z M83.5,10.5h-9v15h3v-6h6c1.7,0,3-1.3,3-3v-3C86.5,11.8,85.2,10.5,83.5,10.5z M83.5,16.5 c0,0-0.1,0-6,0v-3h6V16.5z M99.5,10.5h-9v15h3v-6h6c1.7,0,3-1.3,3-3v-3C102.5,11.8,101.2,10.5,99.5,10.5z M99.5,16.5 c0,0-0.1,0-6,0v-3h6V16.5z M114.5,13.5v-3h-9v15h9v-3h-6v-3h6v-3h-6v-3H114.5z"></path>
              </svg>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Connect Symflowise with 50+ popular business tools and platforms for a unified workflow.
            </p>
            <a href="#" className="inline-flex items-center bg-primary-600 text-white hover:bg-primary-700 transition-colors px-6 py-3 rounded-lg font-medium">
              <span>View all integrations</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
