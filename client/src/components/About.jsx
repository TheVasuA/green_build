import { Building, Award, Zap, Server, Shield, Database } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">

      
      <div className="flex flex-wrap mt-10 lg:mt-20">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center lg:mx-6 lg:mx-0">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide">
              Delta Electronics{" "}
              <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-400 text-transparent bg-clip-text">
                Channel Partner
              </span>
            </h3>
            <p className="mt-4 text-lg text-neutral-500 max-w-4xl">
              Green Build Enterprises is a dedicated channel partner of Delta Electronics, 
              specializing exclusively in the design, implementation, and maintenance of 
              Uninterruptible Power Supply (UPS) systems and high-performance Data Center 
              Infrastructure Solutions.
            </p>
            <p className="mt-4 text-lg text-neutral-500 max-w-4xl">
              Leveraging Delta's core expertise in power and thermal management, we serve 
              as a mission-critical power and cooling architect for businesses where data 
              continuity, reliability, and efficiency are paramount. Our focus is on 
              delivering highly reliable, modular, and energy-efficient solutions that 
              significantly reduce the Total Cost of Ownership (TCO).
            </p>
            <p className="mt-4 text-lg text-neutral-500 max-w-4xl">
              We are committed to securing the digital backbone of our customers' enterprises, 
              making us the trusted partner for resilient and sustainable Information and 
              Communications Technology (ICT) infrastructure.
            </p>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-neutral-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Server className="h-8 w-8 text-green-500 mr-3" />
                <h4 className="text-xl font-semibold">500+</h4>
              </div>
              <p className="text-neutral-400">UPS Systems Deployed</p>
            </div>
            
            <div className="bg-neutral-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-yellow-500 mr-3" />
                <h4 className="text-xl font-semibold">50+</h4>
              </div>
              <p className="text-neutral-400">Data Centers Protected</p>
            </div>
            
            <div className="bg-neutral-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-orange-500 mr-3" />
                <h4 className="text-xl font-semibold">97%</h4>
              </div>
              <p className="text-neutral-400">AC-AC Efficiency</p>
            </div>
            
            <div className="bg-neutral-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-red-500 mr-3" />
                <h4 className="text-xl font-semibold">24/7/365</h4>
              </div>
              <p className="text-neutral-400">Technical Support</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vision and Mission Section */}
      <div className="mt-20">
        <h3 className="text-2xl sm:text-3xl text-center mb-10">
          🎯 Our Vision and Mission
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-neutral-900 p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-green-400">Vision</h4>
            <p className="text-neutral-300">
              To be the foremost provider of resilient and green ICT infrastructure, 
              driving digital transformation and setting the industry standard for 
              mission-critical availability and energy efficiency across all supported markets.
            </p>
          </div>
          
          <div className="bg-neutral-900 p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-orange-400">Mission</h4>
            <p className="text-neutral-300">
              To empower our clients—from small businesses to large enterprises—with 
              integrated, scalable, and highly reliable Delta Electronics UPS and 
              InfraSuite Data Center Solutions. We ensure the uninterrupted protection 
              and optimal performance of their mission-critical applications through 
              best-in-class technology, expert consultation, and 24/7/365 support.
            </p>
          </div>
        </div>
      </div>
      
      {/* Core Solutions Section */}
      <div className="mt-20">
        <h3 className="text-2xl sm:text-3xl text-center mb-10">
          💡 What We Do: Core Business & Solutions
        </h3>
        <div className="mb-8">
          <p className="text-lg text-neutral-400 text-center max-w-4xl mx-auto">
            Green Build Enterprises offers a total lifecycle approach to data center 
            and critical power management, utilizing the modular and high-efficiency 
            product portfolio of Delta Electronics.
          </p>
        </div>
        
        <h4 className="text-xl font-semibold mb-6 text-center">Our Specialization: Delta InfraSuite Solutions</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-neutral-900 p-6 rounded-lg text-center">
            <Zap className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h5 className="font-semibold mb-2">Power Management (UPS)</h5>
            <p className="text-sm text-neutral-400">Modulon, Ultron, Amplon - Zero-downtime power with best-in-class AC-AC efficiency</p>
          </div>
          
          <div className="bg-neutral-900 p-6 rounded-lg text-center">
            <Database className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h5 className="font-semibold mb-2">Precision Cooling</h5>
            <p className="text-sm text-neutral-400">High-Density Liquid and Air Cooling Systems for optimal thermal performance</p>
          </div>
          
          <div className="bg-neutral-900 p-6 rounded-lg text-center">
            <Server className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h5 className="font-semibold mb-2">Racks & Accessories</h5>
            <p className="text-sm text-neutral-400">Smart Modular Racks, Remote PDUs for quick deployment and maximum density</p>
          </div>
          
          <div className="bg-neutral-900 p-6 rounded-lg text-center">
            <Shield className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h5 className="font-semibold mb-2">Management Systems</h5>
            <p className="text-sm text-neutral-400">InfraSuite Manager for real-time visibility and control</p>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h3 className="text-2xl sm:text-3xl text-center mb-10">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-green-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">🌳 Energy Efficiency</h4>
            <p className="text-neutral-400">
              We deploy Delta&apos;s state-of-the-art UPS technology featuring 97% AC-AC efficiency, 
              directly contributing to significant long-term energy savings for our clients.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Modular Scalability</h4>
            <p className="text-neutral-400">
              Our solutions enable &quot;pay-as-you-grow&quot; scaling, reducing initial capital 
              investment and preventing energy waste associated with over-sizing of power infrastructure.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-500 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Mission-Critical Reliability</h4>
            <p className="text-neutral-400">
              We ensure the highest levels of availability for critical operations across 
              ICT, finance, manufacturing, and healthcare sectors with 24/7/365 support.
            </p>
          </div>
        </div>
      </div>
      
      {/* Markets & Applications Section */}
      <div className="mt-20">
        <h3 className="text-2xl sm:text-3xl text-center mb-10">Markets & Applications</h3>
        <p className="text-lg text-neutral-400 text-center max-w-4xl mx-auto mb-8">
          We protect mission-critical functions across diverse sectors where data integrity and continuity are non-negotiable:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-900 p-6 rounded-lg text-center">
            <h5 className="font-semibold mb-2 text-green-400">ICT & Telecommunications</h5>
            <p className="text-sm text-neutral-400">Securing 5G infrastructure, exchange rooms, and network backbones</p>
          </div>
          
          <div className="bg-neutral-900 p-6 rounded-lg text-center">
            <h5 className="font-semibold mb-2 text-yellow-400">Finance & Banking</h5>
            <p className="text-sm text-neutral-400">Reliable power for core banking systems, trading platforms, and ATMs</p>
          </div>
          
          <div className="bg-neutral-900 p-6 rounded-lg text-center">
            <h5 className="font-semibold mb-2 text-orange-400">Manufacturing & Industrial</h5>
            <p className="text-sm text-neutral-400">Protecting automation, control systems, and industrial processes</p>
          </div>
          
          <div className="bg-neutral-900 p-6 rounded-lg text-center">
            <h5 className="font-semibold mb-2 text-red-400">Commercial & Healthcare</h5>
            <p className="text-sm text-neutral-400">Continuous power for server rooms, medical devices, and hospital infrastructure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;