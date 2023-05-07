import { useState, RefObject, useEffect } from 'react'

export default function usePonteiroSeguindo(ref: RefObject<HTMLElement>) {
    const [cursor, setCursor] = useState({ x:0, y:0 })

    useEffect(() => {
        if (!ref.current) return;

        function handleMoveCursor({clientX, clientY}: MouseEvent) {
            const element = ref.current//@ts-expect-error
            const x = 40 + clientX - element.offsetLeft - element.offsetWidth / 2;//@ts-expect-error
            const y = clientY - element.offsetTop - element.offsetHeight / 2;
            setCursor({ x, y });
        }

        window.addEventListener("pointermove", handleMoveCursor)

        return () => window.removeEventListener("pointermove", handleMoveCursor)
    }, [])

    return cursor
}