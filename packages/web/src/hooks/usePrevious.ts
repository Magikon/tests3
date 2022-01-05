import { useEffect, useRef } from 'react';

/**
 * Hook cached the provided value as a previous
 * @param value
 * @returns {undefined}
 */
function usePrevious(value: any) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default usePrevious;
