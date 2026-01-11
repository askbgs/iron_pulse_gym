'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import FreeTrialModal from '@/components/FreeTrialModal';
import styles from './page.module.css';

const stats = [
    { value: 2500, suffix: '+', label: 'Active Members' },
    { value: 15, suffix: '+', label: 'Expert Trainers' },
    { value: 50, suffix: '+', label: 'Weekly Classes' },
    { value: 8, suffix: '', label: 'Years in Business' },
];

const values = [
    {
        icon: '💪',
        title: 'Results-Driven',
        description: 'Every program we design is backed by science and focused on delivering real, measurable results.',
    },
    {
        icon: '🤝',
        title: 'Community First',
        description: 'We believe fitness is better together. Our community supports, motivates, and celebrates each other.',
    },
    {
        icon: '🎯',
        title: 'Personalized Approach',
        description: 'No cookie-cutter programs. We tailor every experience to your unique goals and fitness level.',
    },
    {
        icon: '🌟',
        title: 'Continuous Improvement',
        description: 'We constantly evolve our equipment, classes, and methods to give you the cutting edge.',
    },
];

const timeline = [
    { year: '2016', title: 'The Beginning', description: 'Iron Pulse Fitness was founded with just 10 members and a dream.' },
    { year: '2018', title: 'First Expansion', description: 'Moved to a larger facility and introduced group fitness classes.' },
    { year: '2020', title: 'Digital Evolution', description: 'Launched online training programs during challenging times.' },
    { year: '2022', title: 'Premium Upgrade', description: 'Complete facility renovation with state-of-the-art equipment.' },
    { year: '2024', title: '2500+ Members', description: 'Reached a milestone of 2,500+ active members and counting.' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const end = value;
                    const duration = 2000;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value, hasAnimated]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutPage() {
    const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);

    return (
        <>
            <Navbar onJoinClick={() => setIsFreeTrialOpen(true)} />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1 className={styles.heroTitle}>About <span>Iron Pulse</span></h1>
                        <p className={styles.heroSubtitle}>
                            More than a gym. We&apos;re a community dedicated to helping you become the strongest version of yourself.
                        </p>
                    </div>
                </section>

                {/* Mission */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.missionGrid}>
                            <div className={styles.missionContent}>
                                <h2 className={styles.sectionTitle}>Our <span>Mission</span></h2>
                                <p className={styles.missionText}>
                                    At Iron Pulse Fitness, we believe everyone deserves access to world-class training and a supportive community. Our mission is to empower individuals to transform their bodies, minds, and lives through fitness.
                                </p>
                                <p className={styles.missionText}>
                                    We&apos;re not just building muscles – we&apos;re building confidence, resilience, and lifelong healthy habits. Whether you&apos;re taking your first step into fitness or training for competition, Iron Pulse is your home.
                                </p>
                            </div>
                            <div className={styles.missionImage}>
                                <div className={styles.imagePlaceholder}>
                                    <span>🏋️</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className={`${styles.section} ${styles.statsSection}`}>
                    <div className={styles.container}>
                        <div className={styles.statsGrid}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.statItem}>
                                    <span className={styles.statValue}>
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Our <span>Values</span></h2>
                            <p className={styles.sectionSubtitle}>
                                The principles that guide everything we do at Iron Pulse Fitness.
                            </p>
                        </div>
                        <div className={styles.valuesGrid}>
                            {values.map((value, index) => (
                                <div key={index} className={styles.valueCard}>
                                    <span className={styles.valueIcon}>{value.icon}</span>
                                    <h3 className={styles.valueTitle}>{value.title}</h3>
                                    <p className={styles.valueDesc}>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className={`${styles.section} ${styles.bgDark}`}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Our <span>Story</span></h2>
                        </div>
                        <div className={styles.timeline}>
                            {timeline.map((item, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.timelineYear}>{item.year}</div>
                                    <div className={styles.timelineContent}>
                                        <h4 className={styles.timelineTitle}>{item.title}</h4>
                                        <p className={styles.timelineDesc}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTABanner
                    title="Be Part of Our Story"
                    subtitle="Join the Iron Pulse community and start writing your success story today."
                    buttonText="Start Your Journey"
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
