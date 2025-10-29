// Component to demonstrate the new two-color gradient theme
const GradientDemo = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center text-theme mb-8">
        Green Build Theme Demo
      </h1>
      
      {/* Two-color gradient text examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-theme">Two-Color Gradient Text:</h2>
        
        <div className="text-5xl font-bold gradient-brand-text text-center">
          Green Build Enterprises
        </div>
        
        <div className="text-3xl font-semibold gradient-brand-text text-center">
          Delta Electronics Channel Partner
        </div>
        
        <div className="text-2xl gradient-brand-text text-center">
          Sustainable Power Solutions
        </div>
      </div>
      
      {/* Background gradient examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-theme">Two-Color Gradient Backgrounds:</h2>
        
        <div className="gradient-brand p-6 rounded-lg text-white text-center">
          <h3 className="text-xl font-semibold">Green to Blue Background</h3>
          <p>This demonstrates the new two-color theme</p>
        </div>
        
        <div className="bg-gradient-primary p-6 rounded-lg text-white text-center">
          <h3 className="text-xl font-semibold">Primary Gradient</h3>
          <p>Green shades gradient</p>
        </div>
        
        <div className="bg-gradient-secondary p-6 rounded-lg text-white text-center">
          <h3 className="text-xl font-semibold">Secondary Gradient</h3>
          <p>Blue shades gradient</p>
        </div>
      </div>
      
      {/* Color palette display */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-theme">Color Palette:</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="w-full h-24 bg-primary-500 rounded-lg mb-2"></div>
            <p className="text-theme-muted">Primary Green (#22c55e)</p>
          </div>
          <div className="text-center">
            <div className="w-full h-24 bg-secondary-500 rounded-lg mb-2"></div>
            <p className="text-theme-muted">Secondary Blue (#3b82f6)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientDemo;