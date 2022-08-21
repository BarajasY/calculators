import React, { useState, useEffect } from 'react';
import './Narcissistic.css';
import { motion } from 'framer-motion';

const Narcissistic = () => {
    const [NarNumber, setNarNumber] = useState()
    const [Sum, setSum] = useState('')
    const [NarArray, setNarArray] = useState([])
    const [IsNar, setIsNar] = useState(false)

    useEffect(() => {
        const exponential = NarArray.map((x) => x ** NarArray.length);
        setSum(exponential.reduce((prev, curr) => prev + curr, 0));
        setNarNumber(+NarArray.join(""))
        if (NarNumber === Sum) {
            setIsNar(true)
        } else {
            setIsNar(false)
        }
    }, [NarArray, Sum, NarNumber])


    return (
        <div className="nar_container">
            <div className="nar_content">
                <div className="nar_description">
                    <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2 }}>Narcissistic Numbers</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .4 }}>A number that is the sum of its own digits each raised to the power of the number of digits</motion.p>
                </div>
                <div className="nar_examples">
                    <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .6 }}>Examples</motion.h1>
                    <div className="examples">
                        <motion.li initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .8 }}>153</motion.li>
                        <motion.li initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .8 }}>370</motion.li>
                        <motion.li initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .8 }}>371</motion.li>
                        <motion.li initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .8 }}>407</motion.li>
                    </div>
                </div>
                <div className="nar_calculator">
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1 }}>Insert a number!</motion.p>
                    <motion.input type="text" placeholder="0" onChange={e => setNarArray(Array.from(String(e.target.value), Number))} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1.2 }} />
                </div>
                <div className="nar_result">
                    {IsNar ?
                        <>
                            <motion.h1 style={{ color: '#b2de27' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1.4 }}>It is a Narcissistic Number!</motion.h1>
                        </>
                        :
                        <>
                            <motion.h1 style={{ color: '#c44d56' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1.4 }}>It isn't a Narcissistic Number!</motion.h1>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Narcissistic