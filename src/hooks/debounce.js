import { useEffect, useState } from "react";

function useDebounce(value, delay) {

    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {

        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        console.log(value,"value");

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    console.log(value,"value");

    return debouncedValue
}

export default useDebounce;
