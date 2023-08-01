import { useEffect, useState } from "react"

export default function TypeWriter({ texto }) {
    const [textoAtual, setTextoAtual] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (index < texto.length) {
                setTextoAtual((textoAtual) => textoAtual + texto.charAt(index));
                setIndex((index) => index + 1);
            } else {
                clearInterval(timer);
            }
        }, 60);

        return () => clearInterval(timer);
        
    }, [index, texto]);

    return (
        <span>{textoAtual}</span>
    )

}