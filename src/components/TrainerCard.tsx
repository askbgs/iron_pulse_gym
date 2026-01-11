import Image from 'next/image';
import styles from './TrainerCard.module.css';

interface Trainer {
    name: string;
    title: string;
    specialties: string[];
    experience: string;
    image: string;
    bio?: string;
}

interface TrainerCardProps {
    trainer: Trainer;
    onBookSession?: (trainer: Trainer) => void;
}

export default function TrainerCard({ trainer, onBookSession }: TrainerCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.name}>{trainer.name}</h3>
                <p className={styles.title}>{trainer.title}</p>

                <div className={styles.specialties}>
                    {trainer.specialties.slice(0, 3).map((specialty, index) => (
                        <span key={index} className={styles.specialty}>
                            {specialty}
                        </span>
                    ))}
                </div>

                <div className={styles.experience}>
                    <span className={styles.expIcon}>⭐</span>
                    <span>{trainer.experience} Experience</span>
                </div>

                <button
                    className={styles.bookBtn}
                    onClick={() => onBookSession?.(trainer)}
                >
                    Book a Session
                </button>
            </div>
        </div>
    );
}
