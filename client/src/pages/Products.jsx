import React, { useState } from 'react';
import { Search, Filter, Grid, List, ChevronDown, Eye, Heart, ShoppingCart } from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Categories data based on Delta Electronics India
  const categories = [
    { id: 'all', name: 'All Products', count: 50000 },
    // Power Electronics
    { id: 'components', name: 'Components', count: 5000 },
    { id: 'power-system', name: 'Power and System', count: 3500 },
    { id: 'fans-thermal', name: 'Fans and Thermal Management', count: 2800 },
    { id: 'embedded-power', name: 'Embedded Power', count: 1200 },
    { id: 'external-adapter', name: 'External Adapter', count: 900 },
    // Mobility
    { id: 'ev-powertrain', name: 'EV Powertrain System', count: 450 },
    { id: 'automotive-electronics', name: 'Automotive Electronics', count: 650 },
    // Automation
    { id: 'industrial-automation', name: 'Industrial Automation', count: 4800 },
    { id: 'building-automation', name: 'Building Automation', count: 2200 },
    { id: 'collaborative-robots', name: 'Collaborative Robots (Cobots)', count: 25 },
    { id: 'scada-systems', name: 'SCADA Systems', count: 180 },
    // Infrastructure
    { id: 'ict-infrastructure', name: 'ICT Infrastructure', count: 3200 },
    { id: 'power-energy-solutions', name: 'Power and Energy Solutions', count: 4100 },
    { id: 'display-visualization', name: 'Display and Visualization', count: 800 },
    { id: 'ev-charging', name: 'EV Charging Solutions', count: 320 },
    { id: 'data-center', name: 'Data Center Solutions', count: 1800 },
    { id: 'telecom-power', name: 'Telecom Power Solutions', count: 1500 },
    { id: 'smart-energy', name: 'Smart Energy Solutions', count: 2100 },
    { id: 'indoor-air-quality', name: 'Indoor Air Quality Solutions', count: 650 }
  ];

  // Sample products data based on Delta Electronics
  const products = [
    {
      id: 1,
      name: 'Industrial Power Supply',
      category: 'components',
      image: '/api/placeholder/250/200',
      description: 'High-efficiency industrial power supply units for automation systems',
      items: 450,
      inStock: true,
      price: 'Contact for Quote',
      features: ['High Efficiency', 'Compact Design', 'Wide Input Range']
    },
    {
      id: 2,
      name: 'AC Servo Motor Drive',
      category: 'industrial-automation',
      image: '/api/placeholder/250/200',
      description: 'Precision AC servo motor drives for motion control applications',
      items: 280,
      inStock: true,
      price: 'Contact for Quote',
      features: ['High Precision', 'Low Vibration', 'Energy Efficient']
    },
    {
      id: 3,
      name: 'Switching Power Supply',
      category: 'power-system',
      image: '/api/placeholder/250/200',
      description: 'Reliable switching power supplies for industrial equipment',
      items: 520,
      inStock: true,
      price: 'Contact for Quote',
      features: ['Stable Output', 'Overload Protection', 'Compact Size']
    },
    {
      id: 4,
      name: 'Industrial Cooling Fan',
      category: 'fans-thermal',
      image: '/api/placeholder/250/200',
      description: 'High-performance cooling fans for thermal management',
      items: 650,
      inStock: true,
      price: 'Contact for Quote',
      features: ['Low Noise', 'Long Life', 'High Airflow']
    },
    {
      id: 5,
      name: 'DC Fast Charger',
      category: 'ev-charging',
      image: '/api/placeholder/250/200',
      description: 'Advanced DC fast charging stations for electric vehicles',
      items: 45,
      inStock: true,
      price: 'Contact for Quote',
      features: ['Fast Charging', 'Smart Control', 'Weather Resistant']
    },
    {
      id: 6,
      name: 'Building Management System',
      category: 'building-automation',
      image: '/api/placeholder/250/200',
      description: 'Comprehensive building automation and management system',
      items: 120,
      inStock: true,
      price: 'Contact for Quote',
      features: ['Energy Monitoring', 'Smart Control', 'Remote Access']
    },
    {
      id: 7,
      name: 'Industrial Display Monitor',
      category: 'display-visualization',
      image: '/api/placeholder/250/200',
      description: 'High-resolution industrial display monitors for visualization',
      items: 180,
      inStock: true,
      price: 'Contact for Quote',
      features: ['High Resolution', 'Touch Interface', 'Industrial Grade']
    },
    {
      id: 8,
      name: 'UPS System',
      category: 'power-energy-solutions',
      image: '/api/placeholder/250/200',
      description: 'Uninterruptible power supply systems for critical applications',
      items: 95,
      inStock: true,
      price: 'Contact for Quote',
      features: ['High Reliability', 'Scalable', 'Remote Monitoring']
    },
    {
      id: 9,
      name: 'Collaborative Robot (Cobot)',
      category: 'collaborative-robots',
      image: '/api/placeholder/250/200',
      description: 'D-Bot series collaborative robots for smart manufacturing',
      items: 12,
      inStock: true,
      price: 'Contact for Quote',
      features: ['30kg Payload', '6-Axis', 'Safety Certified']
    },
    {
      id: 10,
      name: 'Solar Inverter',
      category: 'smart-energy',
      image: '/api/placeholder/250/200',
      description: 'High-efficiency solar PV inverters for renewable energy systems',
      items: 220,
      inStock: true,
      price: 'Contact for Quote',
      features: ['Grid-Tie', 'MPPT Control', 'Weather Resistant']
    },
    {
      id: 11,
      name: 'Data Center Cooling Solution',
      category: 'data-center',
      image: '/api/placeholder/250/200',
      description: 'Precision cooling solutions for data center infrastructure',
      items: 80,
      inStock: true,
      price: 'Contact for Quote',
      features: ['Energy Efficient', 'Precise Control', 'High Capacity']
    },
    {
      id: 12,
      name: 'Telecom Rectifier',
      category: 'telecom-power',
      image: '/api/placeholder/250/200',
      description: 'High-efficiency rectifiers for telecom power systems',
      items: 340,
      inStock: true,
      price: 'Contact for Quote',
      features: ['High Efficiency', 'Hot Swappable', 'Remote Monitoring']
    }
  ];

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Power Electronics & Industrial Solutions</h1>
          <p className="mt-2 text-gray-600">Innovative, clean and energy-efficient solutions for a better tomorrow - Power Electronics, Mobility, Automation & Infrastructure</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="text-gray-600">Power Electronics</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-gray-600">Mobility Solutions</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              <span className="text-gray-600">Automation</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="text-gray-600">Infrastructure</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar - Categories */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-100 text-primary-700 border-l-4 border-primary-500'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="truncate">{category.name}</span>
                      <span className="text-xs text-gray-400 ml-2">{category.count.toLocaleString()}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                
                {/* Search Bar */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* View Controls */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Filter className="h-4 w-4" />
                    <span>Filters</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                  </button>

                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Filters Panel */}
              {showFilters && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <select className="border border-gray-300 rounded-lg px-3 py-2">
                      <option>Sort by</option>
                      <option>Name A-Z</option>
                      <option>Name Z-A</option>
                      <option>Most Items</option>
                      <option>Least Items</option>
                    </select>
                    <select className="border border-gray-300 rounded-lg px-3 py-2">
                      <option>Availability</option>
                      <option>In Stock</option>
                      <option>Out of Stock</option>
                    </select>
                    <select className="border border-gray-300 rounded-lg px-3 py-2">
                      <option>Price Range</option>
                      <option>Under $100</option>
                      <option>$100 - $500</option>
                      <option>$500+</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
                {selectedCategory !== 'all' && ` in ${categories.find(cat => cat.id === selectedCategory)?.name}`}
              </p>
            </div>

            {/* Products Grid/List */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === 'list' ? 'h-32' : 'h-48'
                      }`}
                    />
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <button className="p-1.5 bg-white/80 hover:bg-white rounded-full transition-colors">
                        <Eye className="h-3 w-3 text-gray-600" />
                      </button>
                      <button className="p-1.5 bg-white/80 hover:bg-white rounded-full transition-colors">
                        <Heart className="h-3 w-3 text-gray-600" />
                      </button>
                    </div>
                    {product.inStock && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          In Stock
                        </span>
                      </div>
                    )}
                  </div>

                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    
                    {/* Features */}
                    {product.features && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 2 && (
                          <span className="text-xs text-gray-500">+{product.features.length - 2} more</span>
                        )}
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-500">
                        {product.items.toLocaleString()} Items Available
                      </span>
                      <span className="text-lg font-bold text-primary-600">
                        {product.price || 'Request Quote'}
                      </span>
                    </div>

                    <div className={`flex gap-2 ${viewMode === 'list' ? 'justify-end' : ''}`}>
                      <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Request Quote</span>
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;