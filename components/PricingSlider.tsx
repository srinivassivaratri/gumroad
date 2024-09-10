import React, { useState, useEffect } from 'react';

interface PricingSliderProps {
    currency: string;
    minPrice: number;
    maxPrice: number;
    enableInversePricing: boolean;
    onChange: (min: number, max: number) => void;
}

const PricingSlider: React.FC<PricingSliderProps> = ({ currency, minPrice, maxPrice, enableInversePricing, onChange }) => {
    const [currentMin, setCurrentMin] = useState(minPrice);
    const [currentMax, setCurrentMax] = useState(maxPrice);
    const [inverse, setInverse] = useState(enableInversePricing);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMin = Math.min(Number(e.target.value), maxPrice - 1);
        setCurrentMin(newMin);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMax = Math.max(Number(e.target.value), minPrice + 1);
        setCurrentMax(newMax);
    };

    useEffect(() => {
        onChange(currentMin, currentMax);
    }, [currentMin, currentMax, onChange]);

    const graphPoints = Array.from({ length: 10 }, (_, i) => {
        const x = i * 10;
        const y = inverse
            ? 100 - (i / 9) * 100
            : (i / 9) * 100;
        return `${x},${y}`;
    }).join(' ');

    const toggleInverse = () => {
        setInverse(!inverse);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="relative pb-12 mb-6">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentMin}
                    onChange={handleMinChange}
                    className="absolute w-full"
                />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentMax}
                    onChange={handleMaxChange}
                    className="absolute w-full"
                />
                <svg className="w-full h-32 mt-6" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline
                        points={graphPoints}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            </div>
            <div className="flex justify-between mb-4">
                <span>{currency}{currentMin}</span>
                <span>{currency}{currentMax}</span>
            </div>
            <button
                onClick={toggleInverse}
                className={`w-full py-2 px-4 rounded ${inverse ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
                {inverse ? 'Inverse Pricing On' : 'Inverse Pricing Off'}
            </button>
        </div>
    );
};

export default PricingSlider;
