'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import CTABanner from '@/components/CTABanner';
import FreeTrialModal from '@/components/FreeTrialModal';
import styles from './page.module.css';

interface ClassInfo {
    name: string;
    description: string;
    longDescription: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
    calories: string;
    icon: string;
    instructor: string;
    schedule: string[];
    benefits: string[];
}

const allClasses: ClassInfo[] = [
    {
        name: 'HIIT',
        description: 'High-intensity interval training that torches calories.',
        longDescription: 'Our HIIT classes are designed to push your limits with explosive bursts of activity followed by short recovery periods. This scientifically-proven method maximizes calorie burn and improves cardiovascular health in minimal time.',
        duration: '45 min',
        level: 'Intermediate',
        calories: '500-700 cal',
        icon: '🔥',
        instructor: 'Sarah Williams',
        schedule: ['Mon 6AM', 'Wed 6AM', 'Fri 6AM', 'Sat 10AM'],
        benefits: ['Burn fat efficiently', 'Boost metabolism', 'Improve endurance', 'Build lean muscle'],
    },
    {
        name: 'Strength & Conditioning',
        description: 'Build lean muscle and functional strength.',
        longDescription: 'Develop raw power and functional strength through compound movements and progressive overload. Perfect for those looking to build muscle, increase bone density, and improve overall physical performance.',
        duration: '60 min',
        level: 'All Levels',
        calories: '400-600 cal',
        icon: '💪',
        instructor: 'Marcus Chen',
        schedule: ['Mon 8AM', 'Wed 8AM', 'Fri 8AM', 'Tue 5PM', 'Thu 5PM'],
        benefits: ['Build muscle mass', 'Increase strength', 'Improve posture', 'Boost confidence'],
    },
    {
        name: 'Yoga Flow',
        description: 'Find balance with mindful movement and stretches.',
        longDescription: 'Flow through poses that build strength, flexibility, and inner peace. Our yoga classes combine traditional practices with modern techniques, suitable for beginners seeking calm and athletes needing recovery.',
        duration: '60 min',
        level: 'Beginner',
        calories: '200-300 cal',
        icon: '🧘',
        instructor: 'David Kumar',
        schedule: ['Tue 6AM', 'Thu 6AM', 'Mon 10AM', 'Wed 10AM', 'Fri 10AM', 'Sun 8AM'],
        benefits: ['Reduce stress', 'Improve flexibility', 'Better sleep', 'Mental clarity'],
    },
    {
        name: 'Zumba',
        description: 'Dance your way to fitness with Latin rhythms.',
        longDescription: 'Get ready to party yourself into shape! Zumba combines Latin and international music with dance moves, creating a dynamic and fun workout that feel more like a celebration than exercise.',
        duration: '50 min',
        level: 'All Levels',
        calories: '400-600 cal',
        icon: '💃',
        instructor: 'Emma Rodriguez',
        schedule: ['Tue 8AM', 'Thu 8AM', 'Sun 10AM', 'Fri 7PM'],
        benefits: ['Improve coordination', 'Boost mood', 'Full-body workout', 'Social fun'],
    },
    {
        name: 'Cross Training',
        description: 'Functional fitness combining multiple disciplines.',
        longDescription: 'Our CrossFit-inspired classes combine Olympic weightlifting, gymnastics, and high-intensity cardio for the ultimate functional fitness experience. Prepare to be challenged and transformed.',
        duration: '55 min',
        level: 'Advanced',
        calories: '600-800 cal',
        icon: '🏋️',
        instructor: 'Marcus Chen',
        schedule: ['Mon 7PM', 'Wed 7PM', 'Sat 6AM'],
        benefits: ['Total body fitness', 'Functional strength', 'Community support', 'Constant variety'],
    },
    {
        name: 'Boxing Fitness',
        description: 'Learn boxing while getting an incredible workout.',
        longDescription: 'Channel your inner fighter with our boxing fitness classes. Learn proper technique, combination punches, and footwork while getting an incredible cardio and strength workout. No contact, all gains.',
        duration: '50 min',
        level: 'Intermediate',
        calories: '500-700 cal',
        icon: '🥊',
        instructor: 'Sarah Williams',
        schedule: ['Mon 5PM', 'Wed 5PM', 'Fri 5PM', 'Sat 8AM', 'Thu 7PM'],
        benefits: ['Stress relief', 'Self-defense skills', 'Core strength', 'Hand-eye coordination'],
    },
    {
        name: 'Spin Class',
        description: 'High-energy indoor cycling for maximum results.',
        longDescription: 'Experience the thrill of cycling without leaving the gym. Our spin classes feature motivating music, immersive lighting, and expert coaching to push you through intervals and climbs.',
        duration: '45 min',
        level: 'All Levels',
        calories: '400-600 cal',
        icon: '🚴',
        instructor: 'Emma Rodriguez',
        schedule: ['Mon 6AM', 'Wed 6AM', 'Fri 6AM', 'Tue 7PM', 'Thu 7PM'],
        benefits: ['Low joint impact', 'Leg strength', 'Cardiovascular health', 'Mental endurance'],
    },
    {
        name: 'Core Blast',
        description: 'Intense focus on core strength and stability.',
        longDescription: 'A concentrated 30-minute session targeting your entire core - abs, obliques, and lower back. Perfect as an add-on to any workout or as a standalone strength session.',
        duration: '30 min',
        level: 'All Levels',
        calories: '150-250 cal',
        icon: '🎯',
        instructor: 'David Kumar',
        schedule: ['Daily at 12PM', 'Sat 9AM'],
        benefits: ['Flat abs', 'Better posture', 'Injury prevention', 'Athletic performance'],
    },
];

const levelColors: Record<string, string> = {
    'Beginner': '#39ff14',
    'Intermediate': '#ffa500',
    'Advanced': '#ff4500',
    'All Levels': '#00bfff',
};

export default function ClassesPage() {
    const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);
    const [filterLevel, setFilterLevel] = useState<string>('all');
    const [filterDuration, setFilterDuration] = useState<string>('all');
    const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);

    const filteredClasses = allClasses.filter(cls => {
        if (filterLevel !== 'all' && cls.level !== filterLevel) return false;
        if (filterDuration === 'short' && parseInt(cls.duration) > 45) return false;
        if (filterDuration === 'medium' && (parseInt(cls.duration) < 46 || parseInt(cls.duration) > 55)) return false;
        if (filterDuration === 'long' && parseInt(cls.duration) < 56) return false;
        return true;
    });

    return (
        <>
            <Navbar onJoinClick={() => setIsFreeTrialOpen(true)} />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1 className={styles.heroTitle}>Our <span>Classes</span></h1>
                        <p className={styles.heroSubtitle}>
                            From high-intensity sessions to mindful yoga, find the perfect class to match your goals.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        {/* Filters */}
                        <div className={styles.filters}>
                            <div className={styles.filterGroup}>
                                <label className={styles.filterLabel}>Level</label>
                                <select
                                    className={styles.filterSelect}
                                    value={filterLevel}
                                    onChange={(e) => setFilterLevel(e.target.value)}
                                >
                                    <option value="all">All Levels</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="All Levels">Multi-Level</option>
                                </select>
                            </div>
                            <div className={styles.filterGroup}>
                                <label className={styles.filterLabel}>Duration</label>
                                <select
                                    className={styles.filterSelect}
                                    value={filterDuration}
                                    onChange={(e) => setFilterDuration(e.target.value)}
                                >
                                    <option value="all">Any Duration</option>
                                    <option value="short">30-45 min</option>
                                    <option value="medium">46-55 min</option>
                                    <option value="long">60+ min</option>
                                </select>
                            </div>
                        </div>

                        {/* Classes Grid */}
                        <div className={styles.classesGrid}>
                            {filteredClasses.map((cls, index) => (
                                <div
                                    key={index}
                                    className={styles.classCard}
                                    onClick={() => setSelectedClass(cls)}
                                >
                                    <div className={styles.cardIcon}>{cls.icon}</div>
                                    <h3 className={styles.cardName}>{cls.name}</h3>
                                    <p className={styles.cardDesc}>{cls.description}</p>
                                    <div className={styles.cardMeta}>
                                        <span>⏱️ {cls.duration}</span>
                                        <span>🔥 {cls.calories}</span>
                                    </div>
                                    <span
                                        className={styles.cardLevel}
                                        style={{ color: levelColors[cls.level], borderColor: levelColors[cls.level] }}
                                    >
                                        {cls.level}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {filteredClasses.length === 0 && (
                            <p className={styles.noResults}>No classes match your filters. Try adjusting them!</p>
                        )}
                    </div>
                </section>

                <CTABanner
                    title="Ready to Try a Class?"
                    subtitle="Your first class is on us. Book your free trial today!"
                    buttonText="Book Free Class"
                    onButtonClick={() => setIsFreeTrialOpen(true)}
                    variant="gradient"
                />
            </main>

            <Footer />

            {/* Class Detail Modal */}
            <Modal
                isOpen={!!selectedClass}
                onClose={() => setSelectedClass(null)}
                title={selectedClass?.name || ''}
                size="lg"
            >
                {selectedClass && (
                    <div className={styles.modalContent}>
                        <div className={styles.modalIcon}>{selectedClass.icon}</div>
                        <p className={styles.modalDesc}>{selectedClass.longDescription}</p>

                        <div className={styles.modalInfo}>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Duration</span>
                                <span className={styles.infoValue}>{selectedClass.duration}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Calories</span>
                                <span className={styles.infoValue}>{selectedClass.calories}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Level</span>
                                <span
                                    className={styles.infoValue}
                                    style={{ color: levelColors[selectedClass.level] }}
                                >
                                    {selectedClass.level}
                                </span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Instructor</span>
                                <span className={styles.infoValue}>{selectedClass.instructor}</span>
                            </div>
                        </div>

                        <div className={styles.modalSection}>
                            <h4 className={styles.modalSectionTitle}>Benefits</h4>
                            <ul className={styles.benefitsList}>
                                {selectedClass.benefits.map((benefit, i) => (
                                    <li key={i}>✓ {benefit}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.modalSection}>
                            <h4 className={styles.modalSectionTitle}>Schedule</h4>
                            <div className={styles.scheduleList}>
                                {selectedClass.schedule.map((time, i) => (
                                    <span key={i} className={styles.scheduleItem}>{time}</span>
                                ))}
                            </div>
                        </div>

                        <button
                            className={styles.modalCta}
                            onClick={() => {
                                setSelectedClass(null);
                                setIsFreeTrialOpen(true);
                            }}
                        >
                            Book This Class
                        </button>
                    </div>
                )}
            </Modal>

            <FreeTrialModal
                isOpen={isFreeTrialOpen}
                onClose={() => setIsFreeTrialOpen(false)}
            />
        </>
    );
}
