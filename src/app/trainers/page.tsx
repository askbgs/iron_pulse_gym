'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import FreeTrialModal from '@/components/FreeTrialModal';
import styles from './page.module.css';

const trainers = [
    {
        name: 'Marcus Chen',
        title: 'Head Strength Coach',
        specialties: ['Powerlifting', 'Bodybuilding', 'Sports Nutrition'],
        experience: '12+ Years',
        image: '/images/trainer-1.jpg',
        bio: 'Marcus is our head strength coach with over 12 years of experience in competitive powerlifting and bodybuilding. He has helped hundreds of clients achieve their strength goals, from beginners to competitive athletes. Marcus holds certifications from NSCA and Precision Nutrition.',
        certifications: ['NSCA-CSCS', 'Precision Nutrition L2', 'USA Powerlifting Coach'],
        achievements: ['National Powerlifting Champion 2019', 'Coached 50+ Competition Athletes', '1000+ Client Transformations'],
    },
    {
        name: 'Sarah Williams',
        title: 'HIIT & Cardio Specialist',
        specialties: ['HIIT Training', 'Weight Loss', 'Endurance Coaching'],
        experience: '8+ Years',
        image: '/images/trainer-2.jpg',
        bio: 'Sarah brings infectious energy to every class she teaches. Specializing in high-intensity training, she has helped countless members shed weight and discover their athletic potential. Her HIIT classes are consistently the most popular at Iron Pulse.',
        certifications: ['ACE Personal Trainer', 'TRX Certified', 'Spinning Instructor'],
        achievements: ['500+ Members Transformed', 'Weight Loss Specialist', 'Marathon Finisher'],
    },
    {
        name: 'David Kumar',
        title: 'Yoga & Wellness Expert',
        specialties: ['Vinyasa Yoga', 'Meditation', 'Flexibility Training'],
        experience: '10+ Years',
        image: '/images/trainer-3.jpg',
        bio: 'David trained in traditional yoga practices in India before bringing his expertise to Iron Pulse. He believes in the transformative power of mindful movement and meditation. His classes blend physical challenge with mental wellness.',
        certifications: ['RYT-500', 'Meditation Teacher', 'Breathwork Certified'],
        achievements: ['Trained in Rishikesh, India', '2000+ Hours Teaching', 'Wellness Retreat Leader'],
    },
    {
        name: 'Emma Rodriguez',
        title: 'Functional Fitness Coach',
        specialties: ['CrossFit', 'Mobility', 'Injury Rehabilitation'],
        experience: '6+ Years',
        image: '/images/trainer-4.jpg',
        bio: 'Emma is a former collegiate athlete who discovered her passion for coaching after overcoming a career-ending injury. She specializes in functional fitness and helping people move better, whether they are recovering from injury or training for peak performance.',
        certifications: ['CrossFit L2', 'FMS Certified', 'Corrective Exercise Specialist'],
        achievements: ['Former D1 Athlete', 'Injury Prevention Expert', 'Community Coach Award 2023'],
    },
];

export default function TrainersPage() {
    const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);

    return (
        <>
            <Navbar onJoinClick={() => setIsFreeTrialOpen(true)} />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1 className={styles.heroTitle}>Meet Our <span>Trainers</span></h1>
                        <p className={styles.heroSubtitle}>
                            World-class coaches dedicated to helping you achieve your fitness goals.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.trainersList}>
                            {trainers.map((trainer, index) => (
                                <div key={index} className={styles.trainerCard}>
                                    <div className={styles.trainerImage}>
                                        <div className={styles.imagePlaceholder}>
                                            <span>👤</span>
                                        </div>
                                        <Image
                                            src={trainer.image}
                                            alt={trainer.name}
                                            fill
                                            className={styles.image}
                                            sizes="(max-width: 768px) 100vw, 300px"
                                        />
                                    </div>

                                    <div className={styles.trainerContent}>
                                        <h2 className={styles.trainerName}>{trainer.name}</h2>
                                        <p className={styles.trainerTitle}>{trainer.title}</p>
                                        <p className={styles.trainerExp}>⭐ {trainer.experience} Experience</p>

                                        <p className={styles.trainerBio}>{trainer.bio}</p>

                                        <div className={styles.specialties}>
                                            <h4 className={styles.subTitle}>Specialties</h4>
                                            <div className={styles.tagList}>
                                                {trainer.specialties.map((s, i) => (
                                                    <span key={i} className={styles.tag}>{s}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={styles.certifications}>
                                            <h4 className={styles.subTitle}>Certifications</h4>
                                            <ul className={styles.certList}>
                                                {trainer.certifications.map((c, i) => (
                                                    <li key={i}>✓ {c}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={styles.achievements}>
                                            <h4 className={styles.subTitle}>Achievements</h4>
                                            <ul className={styles.achieveList}>
                                                {trainer.achievements.map((a, i) => (
                                                    <li key={i}>🏆 {a}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button
                                            className={styles.bookBtn}
                                            onClick={() => setIsFreeTrialOpen(true)}
                                        >
                                            Book a Session with {trainer.name.split(' ')[0]}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTABanner
                    title="Train with the Best"
                    subtitle="Book a free consultation with any of our expert trainers."
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
