import styles from './CTABanner.module.css';

interface CTABannerProps {
    title: string;
    subtitle?: string;
    buttonText: string;
    onButtonClick?: () => void;
    variant?: 'default' | 'gradient';
}

export default function CTABanner({
    title,
    subtitle,
    buttonText,
    onButtonClick,
    variant = 'default'
}: CTABannerProps) {
    return (
        <section className={`${styles.banner} ${styles[variant]}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
                <button className={styles.ctaBtn} onClick={onButtonClick}>
                    {buttonText}
                </button>
            </div>

            {/* Decorative elements */}
            <div className={styles.glow}></div>
            <div className={styles.pattern}></div>
        </section>
    );
}
