import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ── 1. NAVIGATION ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="/" className={styles.logo}>
            <Image src="/images/logo.png" alt="Taskiya" width={32} height={32} className={styles.logoIcon} />
            Taskiya
          </a>
          <div className={styles.navLinks}>
            <a href="#features" className={styles.navLink}>Features</a>
            <a href="#how-it-works" className={styles.navLink}>How It Works</a>
            <a href="#roadmap" className={styles.navLink}>Roadmap</a>
          </div>
          <button className={styles.navCta}>Download</button>
          <button className={styles.menuBtn} aria-label="Menu">☰</button>
        </div>
      </nav>

      {/* ── 2. HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Project-First Task Management</span>
            <h1 className={styles.heroTitle}>
              Your tasks, notes, and projects — finally in one place.
            </h1>
            <p className={styles.heroSub}>
              Taskiya keeps it simple. Organize by project, add tasks in one tap, 
              track progress at a glance. Free, offline-first, no account needed.
            </p>
            <div className={styles.heroBtns}>
              <button className={styles.btnPrimary}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Download for iOS
              </button>
              <button className={styles.btnSecondary}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 2.236l-3.568 6.174h8.04L12.476 21.764l3.568-6.174H8.005L17.523 2.236z"/></svg>
                Get on Android
              </button>
            </div>
            <p className={styles.heroSmall}>Available on iOS &amp; Android · Free forever</p>
          </div>
          <div className={styles.heroPhone}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <Image
                  src="/images/mockup-hero.png"
                  alt="Taskiya app home screen showing today's tasks, due dates, and project quick-access"
                  width={560}
                  height={1120}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SOCIAL PROOF ── */}
      <div className={styles.socialProof}>
        <div className={styles.socialInner}>
          <span className={styles.socialItem}>📱 iOS &amp; Android</span>
          <span className={`${styles.socialDot} ${styles.hideMobile}`} />
          <span className={styles.socialItem}>🔒 No Account Required</span>
          <span className={`${styles.socialDot} ${styles.hideMobile}`} />
          <span className={styles.socialItem}>📴 100% Offline</span>
          <span className={`${styles.socialDot} ${styles.hideMobile}`} />
          <span className={styles.socialItem}>💸 Completely Free</span>
        </div>
      </div>

      {/* ── 4. PROBLEM + SOLUTION ── */}
      <section className={styles.problemSolution}>
        <div className={styles.psGrid}>
          {/* Problem */}
          <div className={`${styles.psCard} ${styles.psProblem}`}>
            <h3 className={styles.psTitle}>Sound familiar?</h3>
            <ul className={styles.psList}>
              <li className={styles.psItem}>
                <svg className={`${styles.psIcon} ${styles.psIconProblem}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                <p className={styles.psText}>Tasks scattered across random notes and paper scraps.</p>
              </li>
              <li className={styles.psItem}>
                <svg className={`${styles.psIcon} ${styles.psIconProblem}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                <p className={styles.psText}>Buried to-dos you forgot existed until it was too late.</p>
              </li>
              <li className={styles.psItem}>
                <svg className={`${styles.psIcon} ${styles.psIconProblem}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                <p className={styles.psText}>That guilty feeling of being busy but not productive.</p>
              </li>
            </ul>
            <div className={styles.psIllustration}>
              <Image src="/images/illustration-problem.png" alt="Overwhelmed person with scattered tasks and notifications" width={600} height={375} />
            </div>
          </div>

          {/* Solution */}
          <div className={`${styles.psCard} ${styles.psSolution}`}>
            <h3 className={styles.psTitle}>There&apos;s a better way.</h3>
            <ul className={styles.psList}>
              <li className={styles.psItem}>
                <svg className={`${styles.psIcon} ${styles.psIconSolution}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <p className={styles.psText}>One calm home for every single thing you need to get done.</p>
              </li>
              <li className={styles.psItem}>
                <svg className={`${styles.psIcon} ${styles.psIconSolution}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <p className={styles.psText}>Organized projects that mirror how your brain actually works.</p>
              </li>
              <li className={styles.psItem}>
                <svg className={`${styles.psIcon} ${styles.psIconSolution}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <p className={styles.psText}>See real progress and feel the weight lift off your shoulders.</p>
              </li>
            </ul>
            <div className={styles.psIllustration}>
              <Image src="/images/illustration-solution.png" alt="Calm organized workspace with Taskiya managing everything" width={600} height={375} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FEATURES BENTO ── */}
      <section id="features" className={styles.features}>
        <div className={styles.featuresInner}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>Built for clarity, not complexity.</h2>
            <p className={styles.featuresSub}>Focus on what matters. Our features are designed to get out of your way and let you work.</p>
          </div>
          <div className={styles.bentoGrid}>
            {/* Large card */}
            <div className={`${styles.bentoCard} ${styles.bentoLarge}`}>
              <div>
                <h4 className={styles.bentoCardTitle}>See Everything at a Glance</h4>
                <p className={styles.bentoCardDesc}>The Manager View gives you a birds-eye perspective of every active project.</p>
              </div>
              <div className={styles.bentoScreenshot}>
                <Image src="/images/mockup-dashboard.png" alt="Manager View dashboard showing project overview with stats and progress" width={560} height={560} />
              </div>
            </div>
            {/* Small cards */}
            <div className={`${styles.bentoCard} ${styles.bentoSmall1}`}>
              <div>
                <h4 className={styles.bentoCardTitle}>One Tap to Create</h4>
                <p className={styles.bentoCardDesc}>Capture ideas instantly before they vanish.</p>
              </div>
              <div className={`${styles.bentoScreenshot} ${styles.bentoSmallScreenshot}`}>
                <Image src="/images/mockup-quickadd.png" alt="Quick add task interface with inline input" width={560} height={560} />
              </div>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoSmall2}`}>
              <div>
                <h4 className={styles.bentoCardTitle}>Projects That Make Sense</h4>
                <p className={styles.bentoCardDesc}>Group tasks naturally by life category or work stream.</p>
              </div>
              <div className={`${styles.bentoScreenshot} ${styles.bentoSmallScreenshot}`}>
                <Image src="/images/mockup-projects.png" alt="Project list with colored categories and progress bars" width={560} height={560} />
              </div>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoSmall3}`}>
              <div>
                <h4 className={styles.bentoCardTitle}>Know Where You Stand</h4>
                <p className={styles.bentoCardDesc}>Progress tracking that actually motivates you to finish.</p>
              </div>
              <div className={`${styles.bentoScreenshot} ${styles.bentoSmallScreenshot}`}>
                <Image src="/images/mockup-progress.png" alt="Task detail view with priority, labels, and due date" width={560} height={560} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ── */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className={styles.hiwInner}>
          <h2 className={styles.hiwTitle}>Get organized in 3 steps.</h2>
          <div className={styles.hiwSteps}>
            <div className={styles.hiwLine} />
            <div className={styles.hiwStep}>
              <div className={`${styles.hiwCircle} ${styles.hiwCircle1}`}>1</div>
              <h4 className={styles.hiwStepTitle}>Create a Project</h4>
              <p className={styles.hiwStepDesc}>Give your goal a name and a color that fits its vibe.</p>
            </div>
            <div className={styles.hiwStep}>
              <div className={`${styles.hiwCircle} ${styles.hiwCircle2}`}>2</div>
              <h4 className={styles.hiwStepTitle}>Add Your Tasks</h4>
              <p className={styles.hiwStepDesc}>Dump every detail. Notes, dates, or just a simple title.</p>
            </div>
            <div className={styles.hiwStep}>
              <div className={`${styles.hiwCircle} ${styles.hiwCircle3}`}>3</div>
              <h4 className={styles.hiwStepTitle}>Watch Progress Grow</h4>
              <p className={styles.hiwStepDesc}>Check items off and see your project bar reach 100%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. ROADMAP ── */}
      <section id="roadmap" className={styles.roadmap}>
        <div className={styles.roadmapInner}>
          <div className={styles.roadmapHeader}>
            <h2 className={styles.roadmapTitle}>And we&apos;re just getting started.</h2>
            <div className={styles.roadmapLine} />
          </div>
          <div className={styles.roadmapPills}>
            {["Cloud Sync", "Calendar View", "Home Widgets", "Recurring Tasks", "Smart Reminders", "Shared Projects", "Custom Themes"].map((item) => (
              <span key={item} className={styles.roadmapPill}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner}>
          <div>
            <h2 className={styles.ctaTitle}>Ready to feel organized?</h2>
            <p className={styles.ctaSub}>Download free. No account needed. Just start.</p>
          </div>
          <div className={styles.ctaBtns}>
            <button className={styles.ctaBtn}>Download for iOS</button>
            <button className={styles.ctaBtn}>Get on Android</button>
          </div>
        </div>
      </section>

      {/* ── 9. FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>Taskiya</span>
            <p className={styles.footerTagline}>
              Stay Clear. Stay Focused. Stay Done. The project-first task manager for your daily flow.
            </p>
          </div>
          <div>
            <h5 className={styles.footerColTitle}>Product</h5>
            <div className={styles.footerLinks}>
              <a href="#features" className={styles.footerLink}>Features</a>
              <a href="#" className={styles.footerLink}>Download</a>
              <a href="#roadmap" className={styles.footerLink}>Roadmap</a>
            </div>
          </div>
          <div>
            <h5 className={styles.footerColTitle}>Legal</h5>
            <div className={styles.footerLinks}>
              <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
              <a href="/terms" className={styles.footerLink}>Terms of Service</a>
            </div>
          </div>
          <div>
            <h5 className={styles.footerColTitle}>Contact</h5>
            <div className={styles.footerLinks}>
              <a href="mailto:support@taskiya.in" className={styles.footerLink}>Support</a>
              <a href="#" className={styles.footerLink}>Twitter</a>
              <a href="mailto:hello@taskiya.in" className={styles.footerLink}>Email</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>© 2026 Taskiya. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
