'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import FreeTrialModal from '@/components/FreeTrialModal';
import styles from './page.module.css';

const pricingPlans = [
    {
        name: 'Basic',
        price: 29,
        annualPrice: 24,
        period: 'mo',
        features: [
            'Full gym access (6AM - 10PM)',
            'Locker room & shower access',
            'Basic fitness assessment',
            '2 group classes per week',
            'Mobile app access',
            'Free parking',
        ],
    },
    {
        name: 'Pro',
        price: 59,
        annualPrice: 49,
        period: 'mo',
        isPopular: true,
        features: [
            'Everything in Basic, plus:',
            'Unlimited group classes',
            '2 personal training sessions/month',
            'Personalized nutrition guidance',
            'Monthly InBody composition analysis',
            '2 guest passes per month',
            'Priority class booking',
            'Access to member events',
        ],
    },
    {
        name: 'Elite',
        price: 99,
        annualPrice: 84,
        period: 'mo',
        features: [
            'Everything in Pro, plus:',
            'Unlimited personal training',
            'Custom meal plans by our nutritionist',
            'Recovery zone access (sauna, ice bath)',
            '24/7 gym access',
            'Unlimited guest passes',
            'Free fitness merchandise quarterly',
            'VIP member lounge access',
        ],
    },
];

const comparisonFeatures = [
    { feature: 'Gym Access Hours', basic: '6AM - 10PM', pro: '6AM - 10PM', elite: '24/7' },
    { feature: 'Group Classes', basic: '2/week', pro: 'Unlimited', elite: 'Unlimited' },
    { feature: 'Personal Training', basic: '—', pro: '2 sessions/mo', elite: 'Unlimited' },
    { feature: 'Nutrition Guidance', basic: '—', pro: 'Basic', elite: 'Custom Meal Plans' },
    { feature: 'Body Composition Analysis', basic: '—', pro: 'Monthly', elite: 'Bi-weekly' },
    { feature: 'Guest Passes', basic: '—', pro: '2/month', elite: 'Unlimited' },
    { feature: 'Recovery Zone Access', basic: '—', pro: '—', elite: '✓' },
    { feature: 'Priority Booking', basic: '—', pro: '✓', elite: '✓' },
    { feature: 'Free Merchandise', basic: '—', pro: '—', elite: 'Quarterly' },
];

const membershipFaqs = [
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit/debit cards, bank transfers, and cash payments. For annual memberships, we also offer installment payment options.',
    },
    {
        question: 'Can I upgrade or downgrade my plan?',
        answer: 'Yes! You can change your plan at any time. Upgrades take effect immediately with a prorated charge. Downgrades take effect at the start of your next billing cycle.',
    },
    {
        question: 'Is there a joining fee?',
        answer: 'We occasionally waive our joining fee during promotional periods. Currently, there is no joining fee when you sign up for an annual membership.',
    },
    {
        question: 'Can I freeze my membership?',
        answer: 'Pro and Elite members can freeze their membership for up to 2 months per year for medical reasons or travel. Basic members can freeze for 1 month.',
    },
    {
        question: 'What happens if I cancel?',
        answer: 'You can cancel anytime with 30 days notice. Monthly members can use the gym until the end of their billing period. Annual members receive a prorated refund.',
    },
    {
        question: 'Do you offer student or corporate discounts?',
        answer: 'Yes! Students with valid ID receive 15% off any plan. We also offer corporate packages for companies - contact us for details.',
    },
];

export default function PlansPage() {
    const [isAnnual, setIsAnnual] = useState(false);
    const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);

    return (
        <>
            <Navbar onJoinClick={() => setIsFreeTrialOpen(true)} />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1 className={styles.heroTitle}>
                            Membership <span>Plans</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Choose the perfect plan for your fitness journey. No hidden fees, no long-term contracts.
                        </p>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.pricingToggle}>
                            <span className={!isAnnual ? styles.active : ''}>Monthly</span>
                            <button
                                className={styles.toggleSwitch}
                                onClick={() => setIsAnnual(!isAnnual)}
                                aria-label="Toggle annual pricing"
                            >
                                <span className={`${styles.toggleKnob} ${isAnnual ? styles.annual : ''}`}></span>
                            </button>
                            <span className={isAnnual ? styles.active : ''}>
                                Annual <span className={styles.saveBadge}>Save 15%</span>
                            </span>
                        </div>

                        <div className={styles.pricingGrid}>
                            {pricingPlans.map((plan, index) => (
                                <PricingCard
                                    key={index}
                                    plan={plan}
                                    isAnnual={isAnnual}
                                    onSelect={() => setIsFreeTrialOpen(true)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className={`${styles.section} ${styles.bgDark}`}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Plan <span>Comparison</span></h2>
                            <p className={styles.sectionSubtitle}>
                                See all features side by side to find the perfect fit for you.
                            </p>
                        </div>

                        <div className={styles.tableWrapper}>
                            <table className={styles.comparisonTable}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Basic</th>
                                        <th className={styles.popularCol}>Pro</th>
                                        <th>Elite</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((row, index) => (
                                        <tr key={index}>
                                            <td className={styles.featureCell}>{row.feature}</td>
                                            <td>{row.basic}</td>
                                            <td className={styles.popularCol}>{row.pro}</td>
                                            <td>{row.elite}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Membership <span>FAQs</span></h2>
                        </div>
                        <FAQAccordion items={membershipFaqs} />
                    </div>
                </section>

                {/* CTA */}
                <CTABanner
                    title="Ready to Start?"
                    subtitle="Join today and get your first week free. No credit card required."
                    buttonText="Get Started"
                    onButtonClick={() => setIsFreeTrialOpen(true)}
                    variant="gradient"
                />
            </main>

            <Footer />

            <FreeTrialModal
                isOpen={isFreeTrialOpen}
                onClose={() => setIsFreeTrialOpen(false)}
            />
        </>
    );
}
