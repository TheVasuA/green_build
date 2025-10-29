import { useState, useEffect } from 'react';

// Custom hook for managing slideshow image data
export const useImageGallery = () => {
  const [imageCollections, setImageCollections] = useState({
    products: [],
    facilities: [],
    team: [],
    projects: [],
  });

  const [loading, setLoading] = useState(false);

  // Load images with fallback support
  useEffect(() => {
    setLoading(true);
    
    // Sample image data - replace with your actual image sources
    const sampleData = {
      products: [
        {
          src: "/images/ups-system-1.jpg",
          alt: "UPS System Model A",
          fallback: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
        },
        {
          src: "/images/ups-system-2.jpg", 
          alt: "UPS System Model B",
          fallback: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop"
        },
        {
          src: "/images/power-solution-1.jpg",
          alt: "Power Solution System",
          fallback: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop"
        },
        {
          src: "/images/data-center-equipment.jpg",
          alt: "Data Center Equipment",
          fallback: "https://images.unsplash.com/photo-1558618047-3c8ad9099c25?w=600&h=400&fit=crop"
        }
      ],
      facilities: [
        {
          src: "/images/facility-manufacturing.jpg",
          alt: "Manufacturing Facility",
          fallback: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
        },
        {
          src: "/images/facility-warehouse.jpg",
          alt: "Warehouse Storage",
          fallback: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
        },
        {
          src: "/images/facility-office.jpg",
          alt: "Office Building",
          fallback: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop"
        }
      ],
      team: [
        {
          src: "/images/team-engineers.jpg",
          alt: "Engineering Team",
          fallback: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop"
        },
        {
          src: "/images/team-technicians.jpg",
          alt: "Technical Team",
          fallback: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
        },
        {
          src: "/images/team-management.jpg",
          alt: "Management Team",
          fallback: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
        }
      ],
      projects: [
        {
          src: "/images/project-hospital.jpg",
          alt: "Hospital UPS Installation",
          fallback: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop"
        },
        {
          src: "/images/project-datacenter.jpg",
          alt: "Data Center Setup",
          fallback: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
        },
        {
          src: "/images/project-industrial.jpg",
          alt: "Industrial Power Solution",
          fallback: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
        }
      ]
    };
    
    // Process images to include fallback URLs
    const processedData = {};
    Object.keys(sampleData).forEach(category => {
      processedData[category] = sampleData[category].map(img => ({
        ...img,
        src: img.fallback // Use fallback for demo, replace with actual image loading logic
      }));
    });

    setImageCollections(processedData);
    setLoading(false);
  }, []);

  // Helper function to get images for a specific category
  const getImages = (category) => {
    return imageCollections[category] || [];
  };

  // Helper function to get just image URLs (for simple string arrays)
  const getImageUrls = (category) => {
    return (imageCollections[category] || []).map(img => img.src);
  };

  // Helper function to add new images to a category
  const addImages = (category, newImages) => {
    setImageCollections(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), ...newImages]
    }));
  };

  // Helper function to update a specific image
  const updateImage = (category, index, newImageData) => {
    setImageCollections(prev => ({
      ...prev,
      [category]: prev[category]?.map((img, i) => 
        i === index ? { ...img, ...newImageData } : img
      ) || []
    }));
  };

  return {
    imageCollections,
    loading,
    getImages,
    getImageUrls,
    addImages,
    updateImage,
  };
};