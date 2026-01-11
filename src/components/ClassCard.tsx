import styles from './ClassCard.module.css';

interface ClassInfo {
    name: string;
    description: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
    calories: string;
    icon: string;
}

interface ClassCardProps {
    classInfo: ClassInfo;
    onViewDetails?: (classInfo: ClassInfo) => void;
}

export default function ClassCard({ classInfo, onViewDetails }: ClassCardProps) {
    const levelColors: Record<string, string> = {
        'Beginner': '#39ff14',
        'Intermediate': '#ffa500',
        'Advanced': '#ff4500',
        'All Levels': '#00bfff',
    };

    return (
        <div className={styles.card} onClick={() => onViewDetails?.(classInfo)}>
            <div className={styles.iconWrapper}>
                <span className={styles.icon}>{classInfo.icon}</span>
            </div>

            <h3 className={styles.name}>{classInfo.name}</h3>
            <p className={styles.description}>{classInfo.description}</p>

            <div className={styles.meta}>
                <div className={styles.metaItem}>
                    <span className={styles.metaIcon}>⏱️</span>
                    <span>{classInfo.duration}</span>
                </div>
                <div className={styles.metaItem}>
                    <span className={styles.metaIcon}>🔥</span>
                    <span>{classInfo.calories}</span>
                </div>
            </div>

            <span
                className={styles.level}
                style={{ '--level-color': levelColors[classInfo.level] } as React.CSSProperties}
            >
                {classInfo.level}
            </span>

            <div className={styles.overlay}>
                <span className={styles.viewText}>View Details →</span>
            </div>
        </div>
    );
}
