import styles from './PricingCard.module.css';

interface PricingPlan {
    name: string;
    price: number;
    annualPrice: number;
    period: string;
    features: string[];
    isPopular?: boolean;
    ctaText?: string;
}

interface PricingCardProps {
    plan: PricingPlan;
    isAnnual: boolean;
    onSelect?: (plan: PricingPlan) => void;
}

export default function PricingCard({ plan, isAnnual, onSelect }: PricingCardProps) {
    const currentPrice = isAnnual ? plan.annualPrice : plan.price;
    const savings = isAnnual ? Math.round((plan.price * 12 - plan.annualPrice) / 12) : 0;

    return (
        <div className={`${styles.card} ${plan.isPopular ? styles.popular : ''}`}>
            {plan.isPopular && <span className={styles.badge}>Most Popular</span>}

            <div className={styles.header}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.pricing}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.price}>{currentPrice}</span>
                    <span className={styles.period}>/{plan.period}</span>
                </div>
                {isAnnual && savings > 0 && (
                    <p className={styles.savings}>Save ${savings}/mo with annual</p>
                )}
            </div>

            <ul className={styles.features}>
                {plan.features.map((feature, index) => (
                    <li key={index} className={styles.feature}>
                        <span className={styles.checkIcon}>✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <button
                className={`${styles.ctaBtn} ${plan.isPopular ? styles.primary : styles.secondary}`}
                onClick={() => onSelect?.(plan)}
            >
                {plan.ctaText || `Join ${plan.name}`}
            </button>
        </div>
    );
}
