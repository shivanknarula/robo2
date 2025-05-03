import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import ProductList from '../components/ProductList.jsx';
import ProductDetail from '../components/ProductDetail.jsx';
import QueryForm from '../components/QueryForm.jsx';
import '../styles/ProductPage.css';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data
    const mockData = [
      {
        id: 1,
        heading: 'Industrial Robot Series',  // Added heading
        name: 'QJAR Series ',
        description: 'The overall system architecture of the robot is compact, lightweight, large workspace, fast response, high repeat positioning accuracy, applicable to assembly, sorting, handling, loading and unloading applications, etc.',
        image: '../pics/welding 1.jpg',
        specs: ['Material: Stainless Steel', 'Weight: 5kg', 'Dimensions: 30x20x15cm'],
        features: ['Durable construction', 'Easy to maintain', 'High precision'],
      },
      {
        id: 2,
        name: 'Mobile Intelligent Vision Robot',
        description: 'No programming or teaching required, all models can autonomously scan and extract workpiece models and weld information.',
        image: '../pics/Mobile-Intelligent-Vision-WeldingCutting-Robot.jpg',
        specs: ['Material: Aluminum', 'Weight: 3kg', 'Connectivity: Wi-Fi, Bluetooth'],
        features: ['Smart controls', 'Real-time monitoring', 'Energy efficient'],
      },
      {
        id: 3,
        name: 'Cobot Industrial Series',
        description: 'material handling, loading and unloading, palletizing, flexible assembling, painting, grinding, gluing, packing, testing, labelling, welding, deburring, etc,',
        image: '../pics/cobot.png',
        specs: ['Material: Reinforced Polymer', 'Weight: 4kg', 'Max Load: 500kg'],
        features: ['Multi-functional', 'High load capacity', 'Quick setup'],
      },
      {
        id: 4,
        name: 'SCARA Series',
        description: 'EVS SCARA robots feature high speeds and better repeatability allowing you to increase the productivity on pick and place and assembly operations. These robots are a great way to enhance the efficiency of the following operations: material handling, palletizing, laser engraving, 3D printing, and soldering.',
        image: '../pics/SCARA.jpg',
        specs: ['Material: Reinforced Polymer', 'Weight: 4kg', 'Max Load: 500kg'],
        features: ['Multi-functional', 'High load capacity', 'Quick setup'],
      },
      {
        id: 5,
        name: 'Welding Robot Series',
        description: ' The overall system architecture of the robot is compact, lightweight, large workspace, fast response, high repeat positioning accuracy, applicable to assembly, sorting, handling, loading and unloading applications, etc.',
        image: '../pics/welding 3.jpg',
        specs: ['Material: Reinforced Polymer', 'Weight: 4kg', 'Max Load: 500kg'],
        features: ['Multi-functional', 'High load capacity', 'Quick setup'],
      },
      {
        id: 6,
        name: 'Painting Series',
        description: 'The overall system architecture of the robot is compact, lightweight, large workspace, fast response, high repeat positioning accuracy, applicable to assembly, sorting, handling, loading and unloading applications, etc.',
        image: '../pics/Painting.jpg',
        specs: ['Material: Reinforced Polymer', 'Weight: 4kg', 'Max Load: 500kg'],
        features: ['Multi-functional', 'High load capacity', 'Quick setup'],
      },
      {
        id: 7,
        name: 'ZHI HUA Series',
        description: 'It is widely used in the pharmaceutical, food,3C, daily chemical, hardware sorting and other industries',
        image: '../pics/Delta.jpg',
        specs: ['Material: Reinforced Polymer', 'Weight: 4kg', 'Max Load: 500kg'],
        features: ['Multi-functional', 'High load capacity', 'Quick setup'],
      },
      {
        id: 8,
        name: 'Palletizing Robots',
        description: 'Special purpose high-load palletizing machine, high-speed and stable, all axis operating at low power output, simple equipment composition can be used with special palletizing software',
        image: '../pics/palletizing.jpg',
        specs: ['Material: Reinforced Polymer', 'Weight: 4kg', 'Max Load: 500kg'],
        features: ['Multi-functional', 'High load capacity', 'Quick setup'],
      },
      {
        id: 9,
        name: 'Robot Track Series',
        description: 'EVS SCARA robots feature high speeds and better repeatability allowing you to increase the productivity on pick and place and assembly operations. These robots are a great way to enhance the efficiency of the following operations: material handling, palletizing, laser engraving, 3D printing, and soldering.',
        image: '../pics/robottrack.jpg',
        specs: ['Material: Reinforced Polymer', 'Weight: 4kg', 'Max Load: 500kg'],
        features: ['Multi-functional', 'High load capacity', 'Quick setup'],
      },
    ];
    setProducts(mockData);
  }, []);

  return (
    <div className="product-page">
      <Header productName={selectedProduct ? (selectedProduct.heading || selectedProduct.name) : 'Product Line'} />
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
      ) : (
        <ProductList products={products} onSelectProduct={setSelectedProduct} />
      )}
      <QueryForm />
    </div>
  );
}

export default ProductPage;