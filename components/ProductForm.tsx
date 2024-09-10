import { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import ServiceCard from './ServiceCard';
import PriceGraph from './PriceGraph';
import PricingSlider from './PricingSlider';

const products = [
    { icon: '📁', title: 'Digital product', description: 'Any set of files to download or stream.' },
    { icon: '🎵', title: 'Course or tutorial', description: 'Sell a single lesson or teach a whole cohort of students.' },
    { icon: '📚', title: 'E-book', description: 'Offer a book or comic in PDF, ePub, and Mobi formats.' },
    { icon: '🎫', title: 'Membership', description: 'Start a membership business around your fans.' },
    { icon: '📦', title: 'Physical good', description: 'Sell anything that requires shipping something.' },
    { icon: '🛍️', title: 'Bundle', description: 'Sell two or more existing products for a new price' },
];

const services = [
    { icon: '✍️', title: 'Commission', description: 'Sell unique tailored work or services to your customers.' },
    { icon: '📞', title: 'Call', description: 'Offer scheduled calls with your customers.' },
    { icon: '☕', title: 'Coffee', description: 'Boost your support and accept tips from customers.' },
];

const currencies = [
    '$ (US Dollars)', '£ (GBP)', '€ (Euro)', '¥ (Yen)', '₹ (Rupees)',
    'A$ (Australian Dollars)', 'CAD$ (Canadian Dollars)', 'HK$ (Hong Kong Dollars)',
    'SGD$ (Singapore Dollars)', 'NT$ (Taiwanese Dollars)', 'NZ$ (New Zealand Dollars)',
    'R$ (Brazilian Real)', 'ZAR (South African Rand)', 'CHF (Swiss Franc)',
    '₪ (Israeli Shekel)', '₱ (Philippine Peso)', '₩ (Korean Won)',
    'zł (Polish złoty)', 'Kč (Czech koruna)'
];

export default function ProductForm() {
    const [productName, setProductName] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('$');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [enableInversePricing, setEnableInversePricing] = useState(false);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Publish your first product</h1>
                <div>
                    <button className="px-4 py-2 bg-gray-600 rounded mr-2">Cancel</button>
                    <button className="px-4 py-2 bg-pink-500 rounded">Next: Customize</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-1">
                    <p className="mb-2">Make some selections, fill in some boxes, and go live in minutes.</p>
                    <p>Our <a href="#" className="underline">Help Center</a> has everything you need to know.</p>
                </div>

                <div className="col-span-2">
                    <div className="mb-6">
                        <label htmlFor="productName" className="block mb-2">Name</label>
                        <input
                            type="text"
                            id="productName"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder="Name of product"
                            className="w-full p-2 bg-black border border-gray-600 rounded"
                        />
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl mb-4">Products</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {products.map((product, index) => (
                                <ProductCard key={index} {...product} />
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl mb-4">Services</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {services.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="price" className="block mb-2">Price</label>
                        <div className="flex items-center space-x-4">
                            <div className="relative flex-1">
                                <button
                                    type="button"
                                    className="absolute left-0 top-0 h-full px-2 bg-black border-r border-gray-600 flex items-center"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    {selectedCurrency}
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute left-0 bottom-full mb-1 w-48 bg-black border border-gray-600 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                                        {currencies.map((currency) => (
                                            <button
                                                key={currency}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-800"
                                                onClick={() => {
                                                    setSelectedCurrency(currency.split(' ')[0]);
                                                    setIsDropdownOpen(false);
                                                }}
                                            >
                                                {currency}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                <input
                                    type="number"
                                    value={priceRange.min}
                                    onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                                    placeholder="Min"
                                    className="w-full p-2 pl-14 bg-black border border-gray-600 rounded text-white"
                                />
                            </div>
                            <span>-</span>
                            <div className="flex-1">
                                <input
                                    type="number"
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                                    placeholder="Max"
                                    className="w-full p-2 bg-black border border-gray-600 rounded text-white"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm">Enable Inverse Pricing</span>
                            <button
                                onClick={() => setEnableInversePricing(!enableInversePricing)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${enableInversePricing ? 'bg-pink-500' : 'bg-gray-200'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enableInversePricing ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                        {enableInversePricing && (
                            <div className="mt-4">
                                <h3 className="text-xl mb-2">Price Decrease Graph</h3>
                                <PriceGraph maxPrice={parseFloat(priceRange.max)} minPrice={parseFloat(priceRange.min)} />
                                <PricingSlider
                                    currency={selectedCurrency}
                                    minPrice={parseFloat(priceRange.min)}
                                    maxPrice={parseFloat(priceRange.max)}
                                    enableInversePricing={enableInversePricing}
                                    onChange={(min, max) => {
                                        setPriceRange({ min: min.toString(), max: max.toString() });
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
