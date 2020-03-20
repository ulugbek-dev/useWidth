import { useState, useEffect } from 'react';

function useWidth() {
    const [width, setWidth] = useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);
        
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        })

        return () => {
            window.removeEventListener('resize', () => {
                setWidth(window.innerWidth);
            })
        }
    });

    return width;
} 

function useHeight() {
    const [height, setHeight] = useState(null);

    useEffect(() => {
        setHeight(window.innerHeight);
        
        window.addEventListener('resize', () => {
            setHeight(window.innerHeight);
        })

        return () => {
            window.removeEventListener('resize', () => {
                setHeight(window.innerHeight);
            })
        }
    });

    return height;
} 

module.exports.useWidth = useWidth;
module.exports.useHeight = useHeight;