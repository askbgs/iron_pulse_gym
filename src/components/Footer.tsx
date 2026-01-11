import Link from 'next/link';
import styles from './Footer.module.css';

const quickLinks = [
    { href: '/plans', label: 'Membership Plans' },
    { href: '/classes', label: 'Classes' },
    { href: '/trainers', label: 'Our Trainers' },
    { href: '/schedule', label: 'Class Schedule' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
];

const socialLinks = [
    { href: 'https://facebook.com', icon: '📘', label: 'Facebook' },
    { href: 'https://instagram.com', icon: '📸', label: 'Instagram' },
    { href: 'https://tiktok.com', icon: '🎵', label: 'TikTok' },
    { href: 'https://youtube.com', icon: '▶️', label: 'YouTube' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Section */}
                    <div className={styles.brandSection}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoIcon}>⚡</span>
                            <div className={styles.logoText}>
                                <span className={styles.logoMain}>IRON PULSE</span>
                                <span className={styles.logoSub}>FITNESS</span>
                            </div>
                        </Link>
                        <p className={styles.tagline}>Train Hard. Live Strong.</p>
                        <p className={styles.description}>
                            Transform your body and mind at Sri Lanka&apos;s premier fitness destination.
                            State-of-the-art equipment, expert trainers, and a community that pushes you to be your best.
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksSection}>
                        <h4 className={styles.sectionTitle}>Quick Links</h4>
                        <ul className={styles.linksList}>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.footerLink}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contactSection}>
                        <h4 className={styles.sectionTitle}>Contact Us</h4>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <span className={styles.contactIcon}>📍</span>
                                <span>No. 120, Main Street,<br />Trincomalee, Sri Lanka</span>
                            </li>
                            <li className={styles.contactItem}>
                                <span className={styles.contactIcon}>📞</span>
                                <a href="tel:+94741234567">+94 74 123 4567</a>
                            </li>
                            <li className={styles.contactItem}>
                                <span className={styles.contactIcon}>✉️</span>
                                <a href="mailto:info@ironpulsefit.lk">info@ironpulsefit.lk</a>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div className={styles.hoursSection}>
                        <h4 className={styles.sectionTitle}>Opening Hours</h4>
                        <ul className={styles.hoursList}>
                            <li className={styles.hoursItem}>
                                <span>Monday – Sunday</span>
                                <span className={styles.hoursTime}>6:00 AM – 10:00 PM</span>
                            </li>
                        </ul>
                        <p className={styles.hoursNote}>Open 7 days a week for your convenience</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Iron Pulse Fitness. All rights reserved.
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
