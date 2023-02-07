import { useEffect, useState } from 'react'

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounce(value)
        }, delay)

        return () => clearTimeout(timeoutId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debounce
}

export default useDebounce
