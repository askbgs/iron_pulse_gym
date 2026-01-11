import styles from './TestimonialCard.module.css';

interface Testimonial {
    name: string;
    duration: string;
    rating: number;
    text: string;
    achievement?: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.avatar}>
                    {testimonial.name.charAt(0)}
                </div>
                <div className={styles.info}>
                    <h4 className={styles.name}>{testimonial.name}</h4>
                    <p className={styles.duration}>Member for {testimonial.duration}</p>
                </div>
            </div>

            <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.star} ${i < testimonial.rating ? styles.filled : ''}`}
                    >
                        ★
                    </span>
                ))}
            </div>

            <p className={styles.text}>&ldquo;{testimonial.text}&rdquo;</p>

            {testimonial.achievement && (
                <div className={styles.achievement}>
                    <span className={styles.achievementIcon}>🏆</span>
                    <span>{testimonial.achievement}</span>
                </div>
            )}
        </div>
    );
}
