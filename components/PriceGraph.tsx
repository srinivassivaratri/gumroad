import React from 'react';

interface PriceGraphProps {
    maxPrice: number;
    minPrice: number;
}

const PriceGraph: React.FC<PriceGraphProps> = ({ maxPrice, minPrice }) => {
    const graphHeight = 200;
    const graphWidth = 300;
    const priceRange = maxPrice - minPrice;

    const points = Array.from({ length: 10 }, (_, i) => {
        const x = (i / 9) * graphWidth;
        const y = graphHeight - ((maxPrice - (priceRange * (i / 9))) / maxPrice) * graphHeight;
        return `${x},${y}`;
    }).join(' ');

    return (
        <svg width={graphWidth} height={graphHeight} className="bg-gray-800">
            <polyline
                points={points}
                fill="none"
                stroke="white"
                strokeWidth="2"
            />
            <text x="0" y={graphHeight + 20} fill="white" fontSize="12">0 Sales</text>
            <text x={graphWidth - 60} y={graphHeight + 20} fill="white" fontSize="12">Max Sales</text>
            <text x="-30" y="10" fill="white" fontSize="12">${maxPrice}</text>
            <text x="-30" y={graphHeight} fill="white" fontSize="12">${minPrice}</text>
        </svg>
    );
};

export default PriceGraph;
