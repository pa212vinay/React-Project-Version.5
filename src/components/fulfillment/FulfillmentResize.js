import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function FulfillmentResize() {
    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        function handleWindowResize() {
            setWidth(ref.current.clientWidth);
            setHeight(ref.current.clientHeight);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <>
            <div ref={ref} style={{ backgroundColor: 'lightgrey' }}>
                <h2>Width: {width}</h2>

                <h2>Height: {height}</h2>

                {/* {numbers.map((element, index) => {
                    return <h2 key={index}>{element}</h2>;
                })}

                <button
                    onClick={() => setNumbers(numbers => [...numbers, Math.random()])}
                >
                    Increase height
                </button> */}
            </div>
        </>
    )
}

