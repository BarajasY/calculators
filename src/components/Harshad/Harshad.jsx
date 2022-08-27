import React, { useState, useEffect } from 'react';
import './Harshad.css';
import { motion } from 'framer-motion';

const Harshad = () => {
    const [HarArray, setHarArray] = useState([])
    const [Sum, setSum] = useState()
    const [HarNumber, setHarNumber] = useState()
    const [IsHar, setIsHar] = useState(false)

    useEffect(() => {
        setSum(HarArray.reduce((prev, curr) => prev + curr, 0))
        setHarNumber(+HarArray.join("") / Sum)
        if (Number.isInteger(HarNumber) === true) {
            setIsHar(true)
        } else {
            setIsHar(false)
        }
    }, [HarArray, HarNumber, Sum])

    return (
        <div className="har_container">
            <div className="har_content">
                <div className="har_description">
                    <motion.h1 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .1 }}>Harshad Numbers</motion.h1>
                    <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .2 }}>A number that is divisible by the sum of its digits.</motion.p>
                </div>
                <div className="har_examples">
                    <motion.h1 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .3 }}>Examples:</motion.h1>
                    <motion.li initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .4 }}>12 = 12 / (1+2) = 4</motion.li>
                    <motion.li initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .5 }}>45 = 45 / (4+5) = 5</motion.li>
                    <motion.li initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .6 }}>198 = 198 / (1+9+8) = 11</motion.li>
                </div>
                <div className="har_calculator">
                    <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .7 }}>Insert a number!</motion.p>
                    <motion.input initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .8 }} type="text" placeholder="0" onChange={e => setHarArray(Array.from(String(e.target.value), Number))} />
                </div>
                <div className="har_results">
                    {IsHar
                        ?
                        <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .9 }} style={{ color: 'green' }}>It's a Harshad Number!</motion.p>
                        :
                        <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .9 }} style={{ color: 'red' }}>It's not a Harshad Number!</motion.p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Harshad