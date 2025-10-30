import { Building, Zap, Server, Shield, Database } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight text-theme mb-6">
              A leading partner for{" "}
              <span className="gradient-brand-text">
                critical power solutions
              </span>
            </h1>
            <p className="text-xl text-theme-muted max-w-4xl mx-auto leading-relaxed">
              We help industrial, commercial and data center customers make their infrastructure 
              more energy efficient, reliable, safe and sustainable.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-theme-secondary py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* <h2 className="text-3xl font-bold text-center mb-12 text-theme">Green Build at a glance</h2> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-theme mb-2">500+</div>
              <div className="text-theme-muted">UPS systems deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-theme mb-2">50+</div>
              <div className="text-theme-muted">Data centers protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-theme mb-2">97%</div>
              <div className="text-theme-muted">AC-AC efficiency</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-theme mb-2">24/7</div>
              <div className="text-theme-muted">Technical support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Partnership Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-theme mb-6">
                From power protection to complete infrastructure solutions
              </h2>
              <p className="text-lg text-theme-muted mb-6">
                As a dedicated channel partner of Delta Electronics, Green Build 
                is uniquely positioned to accelerate the digital transformation of critical 
                infrastructure across diverse industries.
              </p>
              <p className="text-lg text-theme-muted mb-8">
                We leverage Delta's cutting-edge power and thermal management technologies 
                to deliver mission-critical solutions where data continuity, reliability, 
                and energy efficiency are paramount.
              </p>
              <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Learn more about our strategy →
              </button>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mr-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-theme">Delta Electronics Partnership</h3>
                  <p className="text-theme-muted">Authorized Channel Partner</p>
                </div>
              </div>
              <blockquote className="text-theme-muted italic">
                "Green Build serves as our trusted partner in delivering 
                world-class infrastructure solutions that enable our customers to achieve 
                their digital transformation goals while maintaining the highest standards 
                of reliability and efficiency."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do - Core Solutions */}
      <div className="bg-theme-secondary py-1">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-theme">
            What We Do: Core Business & Solutions
          </h2>
          <p className="text-lg text-theme-muted text-center max-w-4xl mx-auto mb-12">
            Green Build offers a total lifecycle approach to data center 
            and critical power management, utilizing the modular and high-efficiency 
            product portfolio of Delta Electronics.
          </p>
          
          <h3 className="text-xl font-semibold mb-8 text-center text-theme">Our Specialization: Delta InfraSuite Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <Zap className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 text-theme">Power Management (UPS)</h4>
              <p className="text-sm text-theme-muted">Modulon, Ultron, Amplon - Zero-downtime power with best-in-class AC-AC efficiency</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <Database className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 text-theme">Precision Cooling</h4>
              <p className="text-sm text-theme-muted">High-Density Liquid and Air Cooling Systems for optimal thermal performance</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <Server className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 text-theme">Racks & Accessories</h4>
              <p className="text-sm text-theme-muted">Smart Modular Racks, Remote PDUs for quick deployment and maximum density</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 text-theme">Management Systems</h4>
              <p className="text-sm text-theme-muted">InfraSuite Manager for real-time visibility and control</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-theme">Our approach at the core of value creation</h2>
          <p className="text-lg text-theme-muted text-center max-w-4xl mx-auto mb-12">
            We deliver sustainable, efficient, and reliable infrastructure solutions that drive digital transformation 
            while minimizing environmental impact and maximizing operational efficiency.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-theme">Energy Efficiency</h3>
              <p className="text-theme-muted">
                We deploy Delta's state-of-the-art UPS technology featuring 97% AC-AC efficiency, 
                directly contributing to significant long-term energy savings for our clients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-theme">Modular Scalability</h3>
              <p className="text-theme-muted">
                Our solutions enable "pay-as-you-grow" scaling, reducing initial capital 
                investment and preventing energy waste associated with over-sizing of power infrastructure.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-theme">Mission-Critical Reliability</h3>
              <p className="text-theme-muted">
                We ensure the highest levels of availability for critical operations across 
                ICT, finance, manufacturing, and healthcare sectors with 24/7/365 support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Markets & Applications */}
      <div className="bg-theme-secondary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-theme">Markets & Applications</h2>
          <p className="text-lg text-theme-muted text-center max-w-4xl mx-auto mb-12">
            We protect mission-critical functions across diverse sectors where data integrity and continuity are non-negotiable:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-green-500">ICT & Telecommunications</h4>
              <p className="text-sm text-theme-muted">Securing 5G infrastructure, exchange rooms, and network backbones</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-yellow-500">Finance & Banking</h4>
              <p className="text-sm text-theme-muted">Reliable power for core banking systems, trading platforms, and ATMs</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-orange-500">Manufacturing & Industrial</h4>
              <p className="text-sm text-theme-muted">Protecting automation, control systems, and industrial processes</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-red-500">Commercial & Healthcare</h4>
              <p className="text-sm text-theme-muted">Continuous power for server rooms, medical devices, and hospital infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
