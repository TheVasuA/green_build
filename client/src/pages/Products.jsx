import React, { useState } from 'react';
import { Search, Filter, Grid, List, ChevronDown, Eye, Heart, ShoppingCart } from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Categories data
  const categories = [
    { id: 'all', name: 'All Products', count: 500 },
    { id: 'cable-carriers', name: 'Cable and Hose Carriers, Drag Chains', count: 195 },
    { id: 'cam-positioners', name: 'Cam Positioners', count: 16 },
    { id: 'controllers', name: 'Controllers', count: 201 },
    { id: 'disconnect-switch', name: 'Disconnect Switch Components', count: 3961 },
    { id: 'electric-actuators', name: 'Electric Actuators/Cylinders', count: 728 },
    { id: 'graphical-displays', name: 'Graphical/Numeric Displays', count: 21 },
    { id: 'greases-lubricants', name: 'Greases and Lubricants', count: 112 },
    { id: 'hmi', name: 'Human Machine Interface (HMI)', count: 1986 },
    { id: 'automation-accessories', name: 'Industrial Automation Accessories', count: 9679 },
    { id: 'industrial-equipment', name: 'Industrial Equipment', count: 2922 },
    { id: 'industrial-lighting', name: 'Industrial Lighting', count: 3184 },
    { id: 'lighting-control', name: 'Industrial Lighting Control', count: 0 },
    { id: 'industrial-pcs', name: 'Industrial PCs', count: 4261 },
    { id: 'industrial-sensors', name: 'Industrial Sensors', count: 109884 },
    { id: 'industrial-specialized', name: 'Industrial Specialized', count: 661 }
  ];

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Cable Carrier System',
      category: 'cable-carriers',
      image: '/api/placeholder/250/200',
      description: 'Heavy-duty cable carrier for industrial applications',
      items: 195,
      inStock: true
    },
    {
      id: 2,
      name: 'Graphical Display Unit',
      category: 'graphical-displays',
      image: '/api/placeholder/250/200',
      description: 'High-resolution graphical display for control systems',
      items: 21,
      inStock: true
    },
    {
      id: 3,
      name: 'Industrial Lubricant',
      category: 'greases-lubricants',
      image: '/api/placeholder/250/200',
      description: 'Premium grade industrial lubricant',
      items: 112,
      inStock: true
    },
    {
      id: 4,
      name: 'HMI Touch Panel',
      category: 'hmi',
      image: '/api/placeholder/250/200',
      description: 'Advanced touch panel for machine interface',
      items: 1986,
      inStock: true
    },
    {
      id: 5,
      name: 'Automation Sensor',
      category: 'automation-accessories',
      image: '/api/placeholder/250/200',
      description: 'High-precision automation sensor',
      items: 9679,
      inStock: true
    },
    {
      id: 6,
      name: 'Industrial Equipment',
      category: 'industrial-equipment',
      image: '/api/placeholder/250/200',
      description: 'Robust industrial equipment solution',
      items: 2922,
      inStock: true
    },
    {
      id: 7,
      name: 'LED Lighting System',
      category: 'industrial-lighting',
      image: '/api/placeholder/250/200',
      description: 'Energy-efficient LED lighting for industrial use',
      items: 3184,
      inStock: true
    },
    {
      id: 8,
      name: 'Industrial PC',
      category: 'industrial-pcs',
      image: '/api/placeholder/250/200',
      description: 'Rugged industrial computer system',
      items: 4261,
      inStock: true
    },
    {
      id: 9,
      name: 'Proximity Sensor',
      category: 'industrial-sensors',
      image: '/api/placeholder/250/200',
      description: 'High-performance proximity sensor',
      items: 109884,
      inStock: true
    },
    {
      id: 10,
      name: 'Specialized Controller',
      category: 'industrial-specialized',
      image: '/api/placeholder/250/200',
      description: 'Specialized industrial controller unit',
      items: 661,
      inStock: true
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
          <h1 className="text-3xl font-bold text-gray-900">Industrial Products</h1>
          <p className="mt-2 text-gray-600">Comprehensive range of industrial automation and electrical components</p>
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
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-500">
                        {product.items.toLocaleString()} Items
                      </span>
                      <span className="text-lg font-bold text-primary-600">
                        Request Quote
                      </span>
                    </div>

                    <div className={`flex gap-2 ${viewMode === 'list' ? 'justify-end' : ''}`}>
                      <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Add to Cart</span>
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