import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="logo-container">
              <Link to="/" className="text-bala-button font-bold text-2xl">MegaMart</Link>
            </div>
            
            <div className="search-container">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search essentials, groceries and more..." 
                  className="w-full md:w-96 bg-gray-100 rounded-full px-4 py-2 pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            <div className="auth-container flex items-center gap-4">
              <Link to="/login" className="text-bala-button hover:underline">Sign In</Link>
              <span className="text-gray-400">/</span>
              <Link to="/signup" className="text-bala-button hover:underline">Sign Up</Link>
              <div className="cart ml-4">
                <Link to="/cart" className="flex items-center">
                  <ShoppingCart className="text-bala-button" />
                  <span className="ml-1">Cart</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Categories Navigation */}
          <nav className="categories-nav mb-6">
            <ul className="flex flex-wrap gap-2 md:gap-6 overflow-x-auto pb-2">
              <li>
                <Button variant="outline" className="category-button">
                  Groceries
                </Button>
              </li>
              <li>
                <Button variant="outline" className="category-button">
                  Premium Fruits
                </Button>
              </li>
              <li>
                <Button variant="outline" className="category-button">
                  Home & Kitchen
                </Button>
              </li>
              <li>
                <Button variant="outline" className="category-button">
                  Fashion
                </Button>
              </li>
              <li>
                <Button variant="outline" className="category-button">
                  Electronics
                </Button>
              </li>
              <li>
                <Button variant="outline" className="category-button">
                  Beauty
                </Button>
              </li>
              <li>
                <Button variant="outline" className="category-button">
                  Home Improvement
                </Button>
              </li>
              <li>
                <Button variant="outline" className="category-button">
                  Sports, Toys & Luggage
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Hero Carousel */}
      <section className="hero-section">
        <div className="container mx-auto px-4">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="hero-slide bg-[#1A2238] text-white p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="hero-content max-w-md">
                      <p className="text-sm md:text-base opacity-90 mb-2">Best Deal Online on smart watches</p>
                      <h2 className="text-3xl md:text-5xl font-bold mb-4">SMART WEARABLE.</h2>
                      <p className="text-xl md:text-2xl mb-4">UP to 80% OFF</p>
                      <div className="slider-dots flex gap-2 mt-4">
                        <span className="w-4 h-1 bg-white rounded-full"></span>
                        <span className="w-1 h-1 bg-white opacity-50 rounded-full"></span>
                        <span className="w-1 h-1 bg-white opacity-50 rounded-full"></span>
                        <span className="w-1 h-1 bg-white opacity-50 rounded-full"></span>
                        <span className="w-1 h-1 bg-white opacity-50 rounded-full"></span>
                      </div>
                    </div>
                    <div className="hero-image max-w-[200px] md:max-w-[300px] mt-6 md:mt-0">
                      <img 
                        src="/lovable-uploads/de45efe5-9c21-4870-b29c-fbf17e7c4f13.png" 
                        alt="Smart Watch" 
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="products-section mt-10">
        <div className="container mx-auto px-4">
          <div className="section-header flex justify-between items-center mb-6">
            <div className="section-title">
              <p className="text-base font-medium">Grab the best deal on <span className="text-bala-button border-b-2 border-bala-button pb-1">Smartphones</span></p>
            </div>
            <Link to="/smartphones" className="text-sm text-bala-button flex items-center">
              View All
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Product Card 1 */}
            <div className="product-card border rounded-lg p-4 relative">
              <div className="discount-badge absolute top-2 right-2 bg-bala-button text-white text-xs px-2 py-1 rounded">
                55% OFF
              </div>
              <div className="product-image h-40 flex items-center justify-center mb-4">
                <img src="https://via.placeholder.com/150" alt="Galaxy S22 Ultra" className="max-h-full" />
              </div>
              <div className="product-info">
                <h3 className="product-title text-sm font-medium">Galaxy S22 Ultra</h3>
                <div className="price-container flex items-center gap-2 mt-1">
                  <span className="current-price font-semibold">₹22999</span>
                  <span className="original-price text-gray-400 line-through text-sm">₹74999</span>
                </div>
                <p className="savings text-green-600 text-xs mt-1">Save - ₹52000</p>
              </div>
            </div>
            
            {/* Product Card 2 */}
            <div className="product-card border rounded-lg p-4 relative">
              <div className="discount-badge absolute top-2 right-2 bg-bala-button text-white text-xs px-2 py-1 rounded">
                56% OFF
              </div>
              <div className="product-image h-40 flex items-center justify-center mb-4">
                <img src="https://via.placeholder.com/150" alt="Galaxy M13" className="max-h-full" />
              </div>
              <div className="product-info">
                <h3 className="product-title text-sm font-medium">Galaxy M13 (4GB | 64 GB)</h3>
                <div className="price-container flex items-center gap-2 mt-1">
                  <span className="current-price font-semibold">₹10499</span>
                  <span className="original-price text-gray-400 line-through text-sm">₹14999</span>
                </div>
                <p className="savings text-green-600 text-xs mt-1">Save - ₹4500</p>
              </div>
            </div>
            
            {/* Product Card 3 */}
            <div className="product-card border rounded-lg p-4 relative">
              <div className="discount-badge absolute top-2 right-2 bg-bala-button text-white text-xs px-2 py-1 rounded">
                55% OFF
              </div>
              <div className="product-image h-40 flex items-center justify-center mb-4">
                <img src="https://via.placeholder.com/150" alt="Galaxy M33" className="max-h-full" />
              </div>
              <div className="product-info">
                <h3 className="product-title text-sm font-medium">Galaxy M33 (4GB | 64 GB)</h3>
                <div className="price-container flex items-center gap-2 mt-1">
                  <span className="current-price font-semibold">₹16999</span>
                  <span className="original-price text-gray-400 line-through text-sm">₹24999</span>
                </div>
                <p className="savings text-green-600 text-xs mt-1">Save - ₹8000</p>
              </div>
            </div>
            
            {/* Product Card 4 */}
            <div className="product-card border rounded-lg p-4 relative">
              <div className="discount-badge absolute top-2 right-2 bg-bala-button text-white text-xs px-2 py-1 rounded">
                56% OFF
              </div>
              <div className="product-image h-40 flex items-center justify-center mb-4">
                <img src="https://via.placeholder.com/150" alt="Galaxy M53" className="max-h-full" />
              </div>
              <div className="product-info">
                <h3 className="product-title text-sm font-medium">Galaxy M53 (4GB | 64 GB)</h3>
                <div className="price-container flex items-center gap-2 mt-1">
                  <span className="current-price font-semibold">₹31999</span>
                  <span className="original-price text-gray-400 line-through text-sm">₹40999</span>
                </div>
                <p className="savings text-green-600 text-xs mt-1">Save - ₹9000</p>
              </div>
            </div>
            
            {/* Product Card 5 */}
            <div className="product-card border rounded-lg p-4 relative">
              <div className="discount-badge absolute top-2 right-2 bg-bala-button text-white text-xs px-2 py-1 rounded">
                58% OFF
              </div>
              <div className="product-image h-40 flex items-center justify-center mb-4">
                <img src="https://via.placeholder.com/150" alt="Galaxy S22 Ultra" className="max-h-full" />
              </div>
              <div className="product-info">
                <h3 className="product-title text-sm font-medium">Galaxy S22 Ultra</h3>
                <div className="price-container flex items-center gap-2 mt-1">
                  <span className="current-price font-semibold">₹67999</span>
                  <span className="original-price text-gray-400 line-through text-sm">₹85999</span>
                </div>
                <p className="savings text-green-600 text-xs mt-1">Save - ₹18000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
