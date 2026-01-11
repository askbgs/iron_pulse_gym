'use client';

import { useState } from 'react';
import styles from './FAQAccordion.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
                >
                    <button
                        className={styles.header}
                        onClick={() => toggleItem(index)}
                        aria-expanded={openIndex === index}
                    >
                        <span className={styles.question}>{item.question}</span>
                        <span className={styles.icon}>
                            <span className={styles.iconBar}></span>
                            <span className={styles.iconBar}></span>
                        </span>
                    </button>
                    <div className={styles.content}>
                        <div className={styles.answer}>
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
