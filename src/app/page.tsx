'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import ClassCard from '@/components/ClassCard';
import TrainerCard from '@/components/TrainerCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import FreeTrialModal from '@/components/FreeTrialModal';
import styles from './page.module.css';

// Data
const pricingPlans = [
  {
    name: 'Basic',
    price: 29,
    annualPrice: 24,
    period: 'mo',
    features: [
      'Full gym access',
      'Locker room access',
      'Basic fitness assessment',
      '2 group classes/week',
      'Mobile app access',
    ],
  },
  {
    name: 'Pro',
    price: 59,
    annualPrice: 49,
    period: 'mo',
    isPopular: true,
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      '2 personal training sessions/mo',
      'Nutrition guidance',
      'InBody composition analysis',
      'Guest passes (2/month)',
    ],
  },
  {
    name: 'Elite',
    price: 99,
    annualPrice: 84,
    period: 'mo',
    features: [
      'Everything in Pro',
      'Unlimited personal training',
      'Custom meal plans',
      'Recovery zone access',
      'Priority class booking',
      'Exclusive member events',
      'Free merchandise',
    ],
  },
];

const classes = [
  {
    name: 'HIIT',
    description: 'High-intensity interval training that torches calories and builds endurance in just 45 minutes.',
    duration: '45 min',
    level: 'Intermediate' as const,
    calories: '500-700 cal',
    icon: '🔥',
  },
  {
    name: 'Strength & Conditioning',
    description: 'Build lean muscle and functional strength with our signature resistance training program.',
    duration: '60 min',
    level: 'All Levels' as const,
    calories: '400-600 cal',
    icon: '💪',
  },
  {
    name: 'Yoga Flow',
    description: 'Find your balance with mindful movement, deep stretches, and breathing techniques.',
    duration: '60 min',
    level: 'Beginner' as const,
    calories: '200-300 cal',
    icon: '🧘',
  },
  {
    name: 'Zumba',
    description: 'Dance your way to fitness with high-energy Latin rhythms and easy-to-follow moves.',
    duration: '50 min',
    level: 'All Levels' as const,
    calories: '400-600 cal',
    icon: '💃',
  },
  {
    name: 'Cross Training',
    description: 'Functional fitness combining cardio, weightlifting, and bodyweight exercises.',
    duration: '55 min',
    level: 'Advanced' as const,
    calories: '600-800 cal',
    icon: '🏋️',
  },
  {
    name: 'Boxing Fitness',
    description: 'Learn boxing fundamentals while getting an incredible full-body workout.',
    duration: '50 min',
    level: 'Intermediate' as const,
    calories: '500-700 cal',
    icon: '🥊',
  },
];

const trainers = [
  {
    name: 'Marcus Chen',
    title: 'Head Strength Coach',
    specialties: ['Powerlifting', 'Bodybuilding', 'Nutrition'],
    experience: '12+ Years',
    image: '/images/trainer-1.jpg',
  },
  {
    name: 'Sarah Williams',
    title: 'HIIT & Cardio Specialist',
    specialties: ['HIIT', 'Weight Loss', 'Endurance'],
    experience: '8+ Years',
    image: '/images/trainer-2.jpg',
  },
  {
    name: 'David Kumar',
    title: 'Yoga & Wellness Expert',
    specialties: ['Yoga', 'Meditation', 'Flexibility'],
    experience: '10+ Years',
    image: '/images/trainer-3.jpg',
  },
  {
    name: 'Emma Rodriguez',
    title: 'Functional Fitness Coach',
    specialties: ['CrossFit', 'Mobility', 'Rehabilitation'],
    experience: '6+ Years',
    image: '/images/trainer-4.jpg',
  },
];

const testimonials = [
  {
    name: 'Priya M.',
    duration: '2 years',
    rating: 5,
    text: 'I lost 25kg in 8 months! The trainers here genuinely care about your progress. The HIIT classes are challenging but so rewarding.',
    achievement: 'Lost 25kg in 8 months',
  },
  {
    name: 'Ashan K.',
    duration: '1 year',
    rating: 5,
    text: 'Best gym I\'ve ever been to. The equipment is top-notch and the community is incredibly supportive. Worth every rupee!',
    achievement: 'Built 10kg lean muscle',
  },
  {
    name: 'Dilani S.',
    duration: '6 months',
    rating: 5,
    text: 'As a beginner, I was nervous, but the trainers made me feel welcome from day one. Now I can\'t imagine my life without Iron Pulse!',
  },
  {
    name: 'Rohan P.',
    duration: '3 years',
    rating: 5,
    text: 'The personal training here is exceptional. Marcus helped me prepare for my first powerlifting competition and I placed 2nd!',
    achievement: '2nd place in competition',
  },
  {
    name: 'Kavitha J.',
    duration: '1.5 years',
    rating: 4,
    text: 'Love the yoga classes! Sarah\'s sessions are the perfect blend of challenging and relaxing. Great for stress relief after work.',
  },
  {
    name: 'Nuwan T.',
    duration: '8 months',
    rating: 5,
    text: 'The boxing fitness classes are incredible. I\'ve never been in better shape and actually look forward to working out every day.',
    achievement: 'Dropped 4 pant sizes',
  },
];

const faqItems = [
  {
    question: 'How does the free trial work?',
    answer: 'Our free trial gives you full gym access for one day, including one group class of your choice. Simply fill out the form, and our team will contact you to schedule your visit. No credit card required!',
  },
  {
    question: 'Can I cancel my membership anytime?',
    answer: 'Yes! We offer flexible month-to-month memberships with no long-term contracts. You can cancel with 30 days notice, no questions asked.',
  },
  {
    question: 'How much does personal training cost?',
    answer: 'Personal training is included in our Pro (2 sessions/month) and Elite (unlimited) plans. For Basic members, individual sessions start at $35/session or packages of 10 for $300.',
  },
  {
    question: 'How do I book classes?',
    answer: 'You can book classes through our mobile app or at the front desk. Pro and Elite members get priority booking 48 hours in advance, while Basic members can book 24 hours ahead.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we have free parking for all members. Our lot accommodates 50+ vehicles, and we also have secure bike storage available.',
  },
  {
    question: 'I\'m a complete beginner. Will I fit in?',
    answer: 'Absolutely! Over 40% of our members started as beginners. Our trainers are experts at modifying exercises for all fitness levels, and our community is incredibly welcoming.',
  },
];

const trustBadges = [
  { icon: '🏆', label: 'Certified Coaches' },
  { icon: '🎯', label: 'Modern Equipment' },
  { icon: '📋', label: 'Flexible Plans' },
  { icon: '🥗', label: 'Nutrition Guidance' },
  { icon: '⏰', label: 'Open 6AM–10PM' },
];

const facilities = [
  { name: 'Weights Area', image: '/images/facility-weights.jpg' },
  { name: 'Cardio Zone', image: '/images/facility-cardio.jpg' },
  { name: 'Fitness Studio', image: '/images/facility-studio.jpg' },
  { name: 'Locker Rooms', image: '/images/facility-lockers.jpg' },
  { name: 'Reception', image: '/images/facility-reception.jpg' },
  { name: 'Stretching Zone', image: '/images/facility-stretch.jpg' },
];

const schedule = [
  { time: '6:00 AM', mon: 'HIIT', tue: 'Yoga', wed: 'HIIT', thu: 'Yoga', fri: 'HIIT', sat: 'CrossFit', sun: '-' },
  { time: '8:00 AM', mon: 'Strength', tue: 'Zumba', wed: 'Strength', thu: 'Zumba', fri: 'Strength', sat: 'Boxing', sun: 'Yoga' },
  { time: '10:00 AM', mon: 'Yoga', tue: 'HIIT', wed: 'Yoga', thu: 'HIIT', fri: 'Yoga', sat: 'HIIT', sun: 'Zumba' },
  { time: '5:00 PM', mon: 'Boxing', tue: 'Strength', wed: 'Boxing', thu: 'Strength', fri: 'Boxing', sat: '-', sun: '-' },
  { time: '7:00 PM', mon: 'CrossFit', tue: 'Yoga', wed: 'CrossFit', thu: 'Boxing', fri: 'Zumba', sat: '-', sun: '-' },
];

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);

  return (
    <>
      <Navbar onJoinClick={() => setIsFreeTrialOpen(true)} />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>🔥 #1 Gym in Trincomalee</span>
            <h1 className={styles.heroTitle}>
              Build Your Best Body at <span>Iron Pulse Fitness</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Results-driven training with certified coaches,modern equipment, and personalized programs for strength, cardio, and functional fitness.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.heroPrimary} onClick={() => setIsFreeTrialOpen(true)}>
                Start Free Trial
              </button>
              <a href="#plans" className={styles.heroSecondary}>
                View Plans
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>2,500+</span>
                <span className={styles.statLabel}>Active Members</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Expert Trainers</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Weekly Classes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className={styles.trustBar}>
          <div className={styles.container}>
            <div className={styles.trustGrid}>
              {trustBadges.map((badge, index) => (
                <div key={index} className={styles.trustItem}>
                  <span className={styles.trustIcon}>{badge.icon}</span>
                  <span className={styles.trustLabel}>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section id="plans" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Choose Your <span>Membership</span></h2>
              <p className={styles.sectionSubtitle}>
                Flexible plans designed to fit your lifestyle and fitness goals. No hidden fees, cancel anytime.
              </p>
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

        {/* Classes Section */}
        <section className={`${styles.section} ${styles.bgDark}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our <span>Classes</span></h2>
              <p className={styles.sectionSubtitle}>
                From high-intensity workouts to mindful yoga, find the perfect class to match your mood and goals.
              </p>
            </div>
            <div className={styles.classesGrid}>
              {classes.map((classInfo, index) => (
                <ClassCard key={index} classInfo={classInfo} />
              ))}
            </div>
          </div>
        </section>

        {/* Trainers Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Meet Our <span>Trainers</span></h2>
              <p className={styles.sectionSubtitle}>
                Certified experts dedicated to helping you achieve your fitness goals with personalized guidance.
              </p>
            </div>
            <div className={styles.trainersGrid}>
              {trainers.map((trainer, index) => (
                <TrainerCard key={index} trainer={trainer} />
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className={`${styles.section} ${styles.bgDark}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Weekly <span>Schedule</span></h2>
              <p className={styles.sectionSubtitle}>
                Plan your week with our diverse class offerings. Something for everyone, every day.
              </p>
            </div>
            <div className={styles.scheduleWrapper}>
              <table className={styles.scheduleTable}>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, index) => (
                    <tr key={index}>
                      <td className={styles.timeCell}>{row.time}</td>
                      <td className={row.mon !== '-' ? styles.classCell : ''}>{row.mon}</td>
                      <td className={row.tue !== '-' ? styles.classCell : ''}>{row.tue}</td>
                      <td className={row.wed !== '-' ? styles.classCell : ''}>{row.wed}</td>
                      <td className={row.thu !== '-' ? styles.classCell : ''}>{row.thu}</td>
                      <td className={row.fri !== '-' ? styles.classCell : ''}>{row.fri}</td>
                      <td className={row.sat !== '-' ? styles.classCell : ''}>{row.sat}</td>
                      <td className={row.sun !== '-' ? styles.classCell : ''}>{row.sun}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.scheduleNote}>
              <a href="/schedule" className={styles.viewFullSchedule}>View Full Schedule →</a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Success <span>Stories</span></h2>
              <p className={styles.sectionSubtitle}>
                Real transformations from real members. Join our community of achievers.
              </p>
            </div>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Gallery */}
        <section className={`${styles.section} ${styles.bgDark}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our <span>Facilities</span></h2>
              <p className={styles.sectionSubtitle}>
                State-of-the-art equipment and premium amenities for the ultimate workout experience.
              </p>
            </div>
            <div className={styles.facilitiesGrid}>
              {facilities.map((facility, index) => (
                <div key={index} className={styles.facilityCard}>
                  <div className={styles.facilityPlaceholder}>
                    <span className={styles.facilityIcon}>🏋️</span>
                  </div>
                  <span className={styles.facilityName}>{facility.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Frequently Asked <span>Questions</span></h2>
              <p className={styles.sectionSubtitle}>
                Got questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, contact us!
              </p>
            </div>
            <FAQAccordion items={faqItems} />
          </div>
        </section>

        {/* Final CTA */}
        <CTABanner
          title="Ready to Transform?"
          subtitle="Start your fitness journey today with a free trial session. No commitment, just results."
          buttonText="Claim Your Free Trial"
          onButtonClick={() => setIsFreeTrialOpen(true)}
          variant="gradient"
        />
      </main>

      <Footer />

      {/* Modals */}
      <FreeTrialModal
        isOpen={isFreeTrialOpen}
        onClose={() => setIsFreeTrialOpen(false)}
      />
    </>
  );
}
