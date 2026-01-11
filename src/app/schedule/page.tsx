'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import FreeTrialModal from '@/components/FreeTrialModal';
import styles from './page.module.css';

const fullSchedule = {
    Monday: [
        { time: '6:00 AM', class: 'HIIT', trainer: 'Sarah', duration: '45 min' },
        { time: '7:00 AM', class: 'Spin Class', trainer: 'Emma', duration: '45 min' },
        { time: '8:00 AM', class: 'Strength', trainer: 'Marcus', duration: '60 min' },
        { time: '10:00 AM', class: 'Yoga Flow', trainer: 'David', duration: '60 min' },
        { time: '12:00 PM', class: 'Core Blast', trainer: 'David', duration: '30 min' },
        { time: '5:00 PM', class: 'Boxing', trainer: 'Sarah', duration: '50 min' },
        { time: '7:00 PM', class: 'CrossFit', trainer: 'Marcus', duration: '55 min' },
    ],
    Tuesday: [
        { time: '6:00 AM', class: 'Yoga Flow', trainer: 'David', duration: '60 min' },
        { time: '7:00 PM', class: 'Spin Class', trainer: 'Emma', duration: '45 min' },
        { time: '8:00 AM', class: 'Zumba', trainer: 'Emma', duration: '50 min' },
        { time: '10:00 AM', class: 'HIIT', trainer: 'Sarah', duration: '45 min' },
        { time: '12:00 PM', class: 'Core Blast', trainer: 'David', duration: '30 min' },
        { time: '5:00 PM', class: 'Strength', trainer: 'Marcus', duration: '60 min' },
        { time: '7:00 PM', class: 'Yoga Flow', trainer: 'David', duration: '60 min' },
    ],
    Wednesday: [
        { time: '6:00 AM', class: 'HIIT', trainer: 'Sarah', duration: '45 min' },
        { time: '7:00 AM', class: 'Spin Class', trainer: 'Emma', duration: '45 min' },
        { time: '8:00 AM', class: 'Strength', trainer: 'Marcus', duration: '60 min' },
        { time: '10:00 AM', class: 'Yoga Flow', trainer: 'David', duration: '60 min' },
        { time: '12:00 PM', class: 'Core Blast', trainer: 'David', duration: '30 min' },
        { time: '5:00 PM', class: 'Boxing', trainer: 'Sarah', duration: '50 min' },
        { time: '7:00 PM', class: 'CrossFit', trainer: 'Marcus', duration: '55 min' },
    ],
    Thursday: [
        { time: '6:00 AM', class: 'Yoga Flow', trainer: 'David', duration: '60 min' },
        { time: '7:00 PM', class: 'Spin Class', trainer: 'Emma', duration: '45 min' },
        { time: '8:00 AM', class: 'Zumba', trainer: 'Emma', duration: '50 min' },
        { time: '10:00 AM', class: 'HIIT', trainer: 'Sarah', duration: '45 min' },
        { time: '12:00 PM', class: 'Core Blast', trainer: 'David', duration: '30 min' },
        { time: '5:00 PM', class: 'Strength', trainer: 'Marcus', duration: '60 min' },
        { time: '7:00 PM', class: 'Boxing', trainer: 'Sarah', duration: '50 min' },
    ],
    Friday: [
        { time: '6:00 AM', class: 'HIIT', trainer: 'Sarah', duration: '45 min' },
        { time: '7:00 AM', class: 'Spin Class', trainer: 'Emma', duration: '45 min' },
        { time: '8:00 AM', class: 'Strength', trainer: 'Marcus', duration: '60 min' },
        { time: '10:00 AM', class: 'Yoga Flow', trainer: 'David', duration: '60 min' },
        { time: '12:00 PM', class: 'Core Blast', trainer: 'David', duration: '30 min' },
        { time: '5:00 PM', class: 'Boxing', trainer: 'Sarah', duration: '50 min' },
        { time: '7:00 PM', class: 'Zumba', trainer: 'Emma', duration: '50 min' },
    ],
    Saturday: [
        { time: '6:00 AM', class: 'CrossFit', trainer: 'Marcus', duration: '55 min' },
        { time: '8:00 AM', class: 'Boxing', trainer: 'Sarah', duration: '50 min' },
        { time: '9:00 AM', class: 'Core Blast', trainer: 'David', duration: '30 min' },
        { time: '10:00 AM', class: 'HIIT', trainer: 'Sarah', duration: '45 min' },
    ],
    Sunday: [
        { time: '8:00 AM', class: 'Yoga Flow', trainer: 'David', duration: '60 min' },
        { time: '10:00 AM', class: 'Zumba', trainer: 'Emma', duration: '50 min' },
    ],
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const classColors: Record<string, string> = {
    'HIIT': '#ff4500',
    'Strength': '#ffa500',
    'Yoga Flow': '#39ff14',
    'Zumba': '#ff69b4',
    'CrossFit': '#00bfff',
    'Boxing': '#ff3333',
    'Spin Class': '#9370db',
    'Core Blast': '#00ced1',
};

export default function SchedulePage() {
    const [selectedDay, setSelectedDay] = useState('Monday');
    const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);

    return (
        <>
            <Navbar onJoinClick={() => setIsFreeTrialOpen(true)} />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1 className={styles.heroTitle}>Class <span>Schedule</span></h1>
                        <p className={styles.heroSubtitle}>
                            Plan your week with our diverse range of classes. Book your spot today!
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        {/* Day Tabs */}
                        <div className={styles.dayTabs}>
                            {days.map((day) => (
                                <button
                                    key={day}
                                    className={`${styles.dayTab} ${selectedDay === day ? styles.active : ''}`}
                                    onClick={() => setSelectedDay(day)}
                                >
                                    <span className={styles.dayFull}>{day}</span>
                                    <span className={styles.dayShort}>{day.slice(0, 3)}</span>
                                </button>
                            ))}
                        </div>

                        {/* Schedule List */}
                        <div className={styles.scheduleList}>
                            {fullSchedule[selectedDay as keyof typeof fullSchedule].map((item, index) => (
                                <div key={index} className={styles.scheduleItem}>
                                    <div className={styles.itemTime}>
                                        <span className={styles.time}>{item.time}</span>
                                        <span className={styles.duration}>{item.duration}</span>
                                    </div>
                                    <div
                                        className={styles.itemClass}
                                        style={{ '--class-color': classColors[item.class] || '#ff4500' } as React.CSSProperties}
                                    >
                                        <span className={styles.className}>{item.class}</span>
                                        <span className={styles.trainer}>with {item.trainer}</span>
                                    </div>
                                    <button
                                        className={styles.bookBtn}
                                        onClick={() => setIsFreeTrialOpen(true)}
                                    >
                                        Book Class
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className={styles.legend}>
                            <h4 className={styles.legendTitle}>Classes</h4>
                            <div className={styles.legendItems}>
                                {Object.entries(classColors).map(([name, color]) => (
                                    <div key={name} className={styles.legendItem}>
                                        <span className={styles.legendDot} style={{ background: color }}></span>
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <CTABanner
                    title="Ready to Start?"
                    subtitle="Book your first class free and experience the Iron Pulse difference."
                    buttonText="Book Free Class"
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
