import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Main from './Main';

function Loading() {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLoading(false);
        }, 4500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className='container'>
            {
                showLoading ? (
                    <div className='loading'>
                        <motion.svg width="100" height="100"
                            initial={{ opacity: 1, scale: 1 }}
                            animate={{ opacity: 0, scale: 0 }}
                            transition={{
                                delay: 4,
                                duration: 0.5,
                                ease: 'easeInOut'
                            }}
                        >
                            <motion.path
                                d="M50,50 m-45,0 a45,45 0 1,0 90,0 a45,45 0 1,0 -90,0"
                                stroke="#64ffda"
                                strokeWidth="2"
                                fill="none"
                                initial={{
                                    pathLength: 0,
                                    rotate: -90,
                                }}
                                animate="final"
                                variants={{
                                    initial: {
                                        pathLength: 0,
                                        rotate: -90,
                                    },
                                    final: {
                                        pathLength: 1,
                                        rotate: 270,
                                    },
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.text
                                x="50"
                                y="56"
                                fill="#64ffda"
                                fontSize="1.5em"
                                fontWeight="bold"
                                textAnchor="middle"
                                initial={{
                                    opacity: 0,
                                }}
                                animate="final"
                                variants={{
                                    initial: {
                                        opacity: 0,
                                    },
                                    final: {
                                        opacity: 1,
                                    },
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                            >
                                JS
                            </motion.text>
                        </motion.svg>
                    </div>
                ) :
                    (
                        <Main />
                    )
            }
        </div>

    )
}

export default Loading;