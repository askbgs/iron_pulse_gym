'use client';

import { useState } from 'react';
import Modal from './Modal';
import styles from './FreeTrialModal.module.css';

interface FreeTrialModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    phone: string;
    email: string;
    preferredTime: string;
    goal: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
    preferredTime?: string;
    goal?: string;
}

export default function FreeTrialModal({ isOpen, onClose }: FreeTrialModalProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        preferredTime: '',
        goal: '',
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
        } else if (!/^[\+]?[\d\s-]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.preferredTime) {
            newErrors.preferredTime = 'Please select a preferred time';
        }

        if (!formData.goal) {
            newErrors.goal = 'Please select your fitness goal';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({ name: '', phone: '', email: '', preferredTime: '', goal: '' });
            onClose();
        }, 2500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    if (isSuccess) {
        return (
            <Modal isOpen={isOpen} onClose={onClose} size="sm">
                <div className={styles.successState}>
                    <div className={styles.successIcon}>✓</div>
                    <h3 className={styles.successTitle}>You&apos;re All Set!</h3>
                    <p className={styles.successText}>
                        Thank you for signing up for your free trial. Our team will contact you shortly to schedule your first session.
                    </p>
                </div>
            </Modal>
        );
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Start Your Free Trial">
            <form className={styles.form} onSubmit={handleSubmit}>
                <p className={styles.formIntro}>
                    Experience Iron Pulse Fitness with a complimentary trial session. Fill out the form below and we&apos;ll get you started!
                </p>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Full Name</label>
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
                    <label className={styles.label} htmlFor="phone">Phone Number</label>
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

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email Address</label>
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
                    <label className={styles.label} htmlFor="preferredTime">Preferred Time</label>
                    <select
                        id="preferredTime"
                        name="preferredTime"
                        className={`${styles.input} ${styles.select} ${errors.preferredTime ? styles.inputError : ''}`}
                        value={formData.preferredTime}
                        onChange={handleChange}
                    >
                        <option value="">Select a time slot</option>
                        <option value="morning">Morning (6AM - 10AM)</option>
                        <option value="midday">Midday (10AM - 2PM)</option>
                        <option value="afternoon">Afternoon (2PM - 6PM)</option>
                        <option value="evening">Evening (6PM - 10PM)</option>
                    </select>
                    {errors.preferredTime && <span className={styles.error}>{errors.preferredTime}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="goal">Fitness Goal</label>
                    <select
                        id="goal"
                        name="goal"
                        className={`${styles.input} ${styles.select} ${errors.goal ? styles.inputError : ''}`}
                        value={formData.goal}
                        onChange={handleChange}
                    >
                        <option value="">Select your goal</option>
                        <option value="weight-loss">Lose Weight</option>
                        <option value="muscle-gain">Build Muscle</option>
                        <option value="strength">Increase Strength</option>
                        <option value="endurance">Improve Endurance</option>
                        <option value="flexibility">Flexibility & Mobility</option>
                        <option value="general">General Fitness</option>
                    </select>
                    {errors.goal && <span className={styles.error}>{errors.goal}</span>}
                </div>

                <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Claim My Free Trial'}
                </button>

                <p className={styles.disclaimer}>
                    By submitting, you agree to receive communications from Iron Pulse Fitness.
                </p>
            </form>
        </Modal>
    );
}
