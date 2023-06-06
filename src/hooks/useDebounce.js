import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const hadler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(hadler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debouncedValue;
}

export default useDebounce;
