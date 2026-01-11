'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeTrialModal from '@/components/FreeTrialModal';
import styles from './page.module.css';

interface FormData {
    name: string;
    phone: string;
    email: string;
    goal: string;
    message: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
}

export default function ContactPage() {
    const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        goal: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);

        setTimeout(() => {
            setIsSuccess(false);
            setFormData({ name: '', phone: '', email: '', goal: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <>
            <Navbar onJoinClick={() => setIsFreeTrialOpen(true)} />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1 className={styles.heroTitle}>Contact <span>Us</span></h1>
                        <p className={styles.heroSubtitle}>
                            Have questions? We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.contactGrid}>
                            {/* Contact Form */}
                            <div className={styles.formSection}>
                                <h2 className={styles.formTitle}>Send Us a Message</h2>

                                {isSuccess ? (
                                    <div className={styles.successMessage}>
                                        <span className={styles.successIcon}>✓</span>
                                        <h3>Message Sent!</h3>
                                        <p>Thank you for reaching out. We&apos;ll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form className={styles.form} onSubmit={handleSubmit}>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label} htmlFor="name">Full Name *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                                {errors.name && <span className={styles.error}>{errors.name}</span>}
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label} htmlFor="phone">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                                                    placeholder="+94 74 123 4567"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                                            </div>
                                        </div>

                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label} htmlFor="email">Email Address *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && <span className={styles.error}>{errors.email}</span>}
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label} htmlFor="goal">Fitness Goal</label>
                                                <select
                                                    id="goal"
                                                    name="goal"
                                                    className={`${styles.input} ${styles.select}`}
                                                    value={formData.goal}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select a goal (optional)</option>
                                                    <option value="weight-loss">Weight Loss</option>
                                                    <option value="muscle-gain">Build Muscle</option>
                                                    <option value="strength">Increase Strength</option>
                                                    <option value="endurance">Improve Endurance</option>
                                                    <option value="general">General Fitness</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label className={styles.label} htmlFor="message">Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                                                placeholder="Tell us how we can help you..."
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                            {errors.message && <span className={styles.error}>{errors.message}</span>}
                                        </div>

                                        <button
                                            type="submit"
                                            className={styles.submitBtn}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* Contact Info */}
                            <div className={styles.infoSection}>
                                <div className={styles.infoCard}>
                                    <h3 className={styles.infoTitle}>Visit Us</h3>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoIcon}>📍</span>
                                        <div>
                                            <p>No. 120, Main Street</p>
                                            <p>Trincomalee, Sri Lanka</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3 className={styles.infoTitle}>Contact</h3>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoIcon}>📞</span>
                                        <a href="tel:+94741234567">+94 74 123 4567</a>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoIcon}>✉️</span>
                                        <a href="mailto:info@ironpulsefit.lk">info@ironpulsefit.lk</a>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3 className={styles.infoTitle}>Opening Hours</h3>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoIcon}>⏰</span>
                                        <div>
                                            <p><strong>Monday – Sunday</strong></p>
                                            <p>6:00 AM – 10:00 PM</p>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/94741234567"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.whatsappBtn}
                                >
                                    💬 Chat on WhatsApp
                                </a>

                                {/* Map Placeholder */}
                                <div className={styles.mapPlaceholder}>
                                    <div className={styles.mapContent}>
                                        <span className={styles.mapIcon}>🗺️</span>
                                        <p>Map Integration</p>
                                        <span className={styles.mapNote}>Google Maps embed placeholder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <FreeTrialModal
                isOpen={isFreeTrialOpen}
                onClose={() => setIsFreeTrialOpen(false)}
            />
        </>
    );
}
