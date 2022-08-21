import React, { useState, useEffect } from 'react';
import './Munchausen.css';
import { motion } from 'framer-motion';

const Munchausen = () => {
    const [MunArray, setMunArray] = useState([])
    const [Sum, setSum] = useState()
    const [MunNumber, setMunNumber] = useState()
    const [IsMun, setIsMun] = useState(false)

    useEffect(() => {
        const multiplication = MunArray.map((x) => x ** x);
        setSum(multiplication.reduce((prev, curr) => prev + curr, 0))
        setMunNumber(+MunArray.join(""))
        if (MunNumber === Sum) {
            setIsMun(true)
        } else {
            setIsMun(false)
        }
    }, [MunArray, MunNumber, Sum])

    return (
        <div className="mun_container">
            <div className="mun_content">
                <div className="mun_description">
                    <motion.h1 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .2 }}>Munchausen Numbers</motion.h1>
                    <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .4 }}>A number that is equal to the sum of its digits each raised to the power of itself</motion.p>
                </div>
                <div className="mun_examples">
                    <motion.h1 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .6 }}>Example</motion.h1>
                    <motion.li initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .8 }}>3435</motion.li>
                </div>
                <div className="mun_calculator">
                    <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: 1 }}>Insert a number!</motion.p>
                    <motion.input type="text" placeholder="0" onChange={e => setMunArray(Array.from(String(e.target.value), Number))} initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: 1.2 }} />
                </div>
                <div className="mun_result">
                    {IsMun
                        ?
                        <motion.h1 style={{ color: '#097969' }} initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: 1.4 }}>It is a Munchausen Number!</motion.h1>
                        :
                        <motion.h1 style={{ color: '#c44d56' }} initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: 1.6 }}>It isn't a Munchausen Number!</motion.h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default Munchausen