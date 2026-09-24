export interface ArticleData {
  title: string;
  category: string;
  date: string;
  author: string;
  role: string;
  readTime: string;
  image: string;
  content: string;
}

export const articlesData: Record<string, ArticleData> = {
  "top-10-hr-trends-2026-india": {
    title: "Top 10 HR Trends in 2026 for Indian Companies",
    category: "Trends",
    date: "May 11, 2026",
    author: "Elena Rodriguez",
    role: "Head of Product Strategy",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&q=80",
    content: `
      <h2>The Future of Workforce Management in India</h2>
      <p>As we navigate through 2026, the Indian HR landscape is witnessing a massive transformation driven by AI, remote work evolution, and new labor regulations. Here are the top 10 trends every HR leader should watch:</p>
      
      <h3>1. AI-Powered Talent Acquisition</h3>
      <p>Hyper-automation in recruitment is no longer a luxury. AI now handles initial screenings, predicts candidate success rates, and even manages interview scheduling, allowing HR teams to focus on culture fit and strategic hiring.</p>
      
      <h3>2. The Stability of Hybrid Models</h3>
      <p>After years of experimentation, the "Permanent Hybrid" model has stabilized. Companies are investing in better digital infrastructure to ensure seamless collaboration between office and remote workers.</p>
      
      <h3>3. Mental Health as a Core KPI</h3>
      <p>Employee well-being has moved beyond yoga sessions. Modern companies are integrating mental health support directly into their HRMS, tracking burnout signals and providing instant access to counseling.</p>
      
      <h3>4. Hyper-Personalized Employee Experience</h3>
      <p>From benefits to learning paths, everything is becoming personalized. AI analyzes individual performance and preferences to suggest tailored growth opportunities.</p>
      
      <h3>5. Skills-First Hiring</h3>
      <p>The emphasis is shifting from degrees to demonstrated skills. Organizations are using skills-gap analysis tools to identify and develop internal talent rather than always hiring externally.</p>
      
      <h3>6. Gig Economy Integration</h3>
      <p>Managing a mix of full-time and freelance workers is the new norm. HR systems are evolving to handle diverse contract types and payment structures in a single dashboard.</p>
      
      <h3>7. Real-Time Compliance Monitoring</h3>
      <p>With India's complex labor laws, reactive compliance is risky. Automation engines now provide real-time alerts for TDS, PF, and ESI deviations before they become liabilities.</p>
      
      <h3>8. Sustainable HR Practices</h3>
      <p>"Green HR" is gaining traction. Digital-only onboarding, paperless payroll, and tracking the environmental impact of commute patterns are becoming standard practices.</p>
      
      <h3>9. Diversity, Equity, and Inclusion (DEI) 2.0</h3>
      <p>Data-driven DEI is replacing generic initiatives. Companies are using analytics to identify hidden biases in promotions and compensation across the board.</p>
      
      <h3>10. High-Touch Employee Relations</h3>
      <p>As tasks get automated, the "human" in Human Resources is becoming more important. HR leaders are focusing more on conflict resolution, coaching, and long-term career planning.</p>
    `
  },
  "reduce-payroll-processing-time-80": {
    title: "How to Reduce Payroll Processing Time by 80%",
    category: "Efficiency",
    date: "May 10, 2026",
    author: "Rahul Sharma",
    role: "Chief Compliance Officer",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop&q=80",
    content: `
      <h2>Transforming Payroll from a Headache to a Breeze</h2>
      <p>Payroll processing in India is notoriously complex due to multi-state regulations, statutory deductions, and varying attendance rules. However, leading organizations have found ways to reduce their payroll time by up to 80%. Here's how:</p>
      
      <h3>1. Automated Attendance Integration</h3>
      <p>The biggest time-sink in payroll is manual attendance verification. By integrating biometric and GPS-based tracking directly with your payroll system, you eliminate the "attendance cleanup" phase entirely.</p>
      
      <h3>2. Self-Service Investment Declarations</h3>
      <p>Collecting Form 12BB and investment proofs manually is a logistical nightmare. Modern HRMS platforms allow employees to upload documents directly, which are then auto-verified or queued for quick approval, saving weeks of manual work.</p>
      
      <h3>3. Automated Statutory Calculations</h3>
      <p>Manual calculation of TDS, EPF, ESI, and LWF is prone to error and incredibly slow. A centralized rule engine that updates automatically with every government notification ensures that calculations are both instant and accurate.</p>
      
      <h3>4. One-Click Compliance Challans</h3>
      <p>Generating challans for PF and ESI should not take hours. Advanced systems generate these files in the exact format required by government portals, making the filing process a matter of minutes.</p>
      
      <blockquote>"Efficiency in payroll isn't about working faster; it's about making the system work for you."</blockquote>
      
      <p>By implementing these strategies, HR teams can shift their focus from verifying spreadsheets to strategic workforce development, all while ensuring employees are paid accurately and on time.</p>
    `
  },
  "dpdp-act-hr-guide": {
    title: "DPDP Act: What HR Teams Need to Know",
    category: "Compliance",
    date: "May 09, 2026",
    author: "Sarah Chen",
    role: "VP of People Operations",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=600&fit=crop&q=80",
    content: `
      <h2>Navigating India's New Data Privacy Era</h2>
      <p>The Digital Personal Data Protection (DPDP) Act has fundamental implications for how HR departments in India collect, store, and process employee information. Understanding these changes is critical for legal compliance and building employee trust.</p>
      
      <h3>Key Responsibilities for HR</h3>
      <ul>
        <li><strong>Notice and Consent:</strong> You must provide clear notice to employees about what data is being collected and obtain explicit consent for each specific use case.</li>
        <li><strong>Purpose Limitation:</strong> Data collected for payroll purposes cannot be used for unrelated marketing or external research without additional consent.</li>
        <li><strong>Data Accuracy:</strong> Employees now have the right to request corrections to their personal data, and organizations are obligated to ensure data accuracy.</li>
        <li><strong>Right to Erasure:</strong> Establishing clear data retention and deletion policies is now a legal requirement once the purpose of data collection is fulfilled (e.g., after an employee leaves).</li>
      </ul>
      
      <h3>Security Obligations</h3>
      <p>Organizations must implement "reasonable security safeguards" to prevent data breaches. This includes encrypted storage, strict access controls, and regular security audits of your HRMS platform.</p>
      
      <h3>The Role of Data Fiduciaries</h3>
      <p>Under the DPDP Act, the employer is a "Data Fiduciary" and bears the ultimate responsibility for compliance, even if they use third-party HR software providers (Data Processors).</p>
      
      <p>Fovestta™ is built with DPDP compliance at its core, providing tools for consent management, secure data handling, and easy fulfillment of employee data rights. Staying ahead of these regulations is the only way to future-proof your HR operations.</p>
    `
  },
  "india-labour-codes-2025-explained": {
    title: "India's New Labour Codes: What Changed for Employers",
    category: "Compliance",
    date: "Aug 15, 2026",
    author: "Priya Nair",
    role: "Head of Compliance Strategy",
    readTime: "8 min read",
    image: "/compliance_engine.webp",
    content: `
      <h2>Four Codes, 29 Laws, One Effective Date</h2>
      <p>India's four Labour Codes — the Code on Wages 2019, the Industrial Relations Code 2020, the Occupational Safety, Health and Working Conditions Code 2020, and the Code on Social Security 2020 — became effective on November 21, 2025, consolidating 29 existing central labour laws into a single framework. Central rules under the Wages, Industrial Relations, and Social Security Codes followed on May 8, 2026, with OSH Code rules notified a day later.</p>

      <h3>What's Actually in Force Right Now</h3>
      <p>All four codes are technically effective, but that doesn't mean every provision applies uniformly yet. Labour is a concurrent subject under India's constitution, so individual states are still notifying their own rules on top of the central framework. In practice, this means compliance obligations can currently differ by state even under the "same" code, and HR teams operating across multiple states need to track both central and state-level notifications.</p>

      <h3>Mandatory Appointment Letters</h3>
      <p>One of the most immediate changes for employers: every worker must now receive a formal appointment letter, regardless of employment type. This closes a long-standing gap where a large share of India's workforce, particularly contract and informal workers, had no written proof of employment.</p>

      <h3>Gig and Platform Workers Get Social Security</h3>
      <p>The Code on Social Security extends formal social security coverage to gig and platform workers for the first time — a category that previously sat outside EPF, ESI, and similar protections entirely. Companies that engage gig or platform workers, even indirectly through aggregators, should expect new registration and contribution obligations tied to this provision as state rules finalize.</p>

      <h3>Minimum Wage Applies to Everyone</h3>
      <p>The Code on Wages establishes a statutory floor wage that applies across all employment categories, replacing the previous patchwork where minimum wage protection didn't extend uniformly to every sector and worker classification.</p>

      <h3>What HR Teams Should Do Now</h3>
      <ul>
        <li><strong>Audit appointment letter coverage:</strong> Confirm every worker on payroll, including contract staff, has a compliant appointment letter on file.</li>
        <li><strong>Track state rule notifications:</strong> Since states are notifying rules separately, compliance requirements may shift by location even after the central framework is settled.</li>
        <li><strong>Review gig/platform worker engagements:</strong> If your organization uses gig or platform labour in any capacity, map out where new social security obligations may apply.</li>
        <li><strong>Update wage structures:</strong> Confirm every pay band meets the new statutory floor wage requirements under the Code on Wages.</li>
      </ul>

      <p>The shift from 29 fragmented laws to four consolidated codes is meant to simplify compliance over time, but the transition period — with central rules only recently notified and state rules still rolling out — is exactly when compliance gaps tend to open. Fovestta™'s compliance engine is updated as new rules are notified, so your payroll and HR processes stay aligned with the current requirement, not last year's.</p>
    `
  },
  "posh-act-compliance-guide": {
    title: "POSH Act Compliance: What Every Employer Needs in Place",
    category: "Compliance",
    date: "Jul 22, 2026",
    author: "Ananya Desai",
    role: "Head of HR Policy",
    readTime: "6 min read",
    image: "/support_human_connection_1777973130573.webp",
    content: `
      <h2>A Legal Requirement, Not an Optional Policy</h2>
      <p>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 — commonly called the POSH Act — is India's primary law governing workplace sexual harassment. It applies to every workplace employing more than ten people, and the obligations it creates are frequently misunderstood or only partially implemented.</p>

      <h3>The Internal Committee Requirement</h3>
      <p>Every organization with more than ten employees must constitute an Internal Committee (IC) to receive and address complaints. The composition is specific: a Presiding Officer who is a senior woman employee, at least two internal members with a demonstrated commitment to women's issues or relevant legal background, and one external member from an NGO or with subject-matter expertise. At least half of the IC's total members must be women.</p>

      <h3>Beyond the Committee: Full Compliance Checklist</h3>
      <ul>
        <li><strong>Written POSH policy:</strong> A documented policy must exist and be communicated to all employees, not just filed away.</li>
        <li><strong>Prominent display of consequences:</strong> The penal consequences of sexual harassment must be displayed visibly at the workplace.</li>
        <li><strong>Regular awareness training:</strong> Employees and IC members need ongoing training, not a one-time onboarding session.</li>
        <li><strong>90-day resolution timeline:</strong> Complaints must be resolved by the Internal Committee within 90 days of being filed.</li>
        <li><strong>Annual report to the District Officer:</strong> Every organization must file an annual report on the number of complaints received and resolved.</li>
      </ul>

      <h3>The Cost of Getting This Wrong</h3>
      <p>Failing to constitute an IC, failing to file the annual report, or otherwise failing to comply carries a fine of up to ₹50,000. A repeat offence can double the penalty and put the company's business licenses, registrations, or approvals at risk of cancellation or non-renewal.</p>

      <blockquote>"POSH compliance is one of the few areas of HR law where the penalty for inaction is often more expensive than the policy itself."</blockquote>

      <h3>Where Companies Commonly Fall Short</h3>
      <p>In practice, most compliance gaps aren't about the policy document — they're about follow-through. Companies set up an IC once and never revisit its composition as people leave the organization. Awareness training happens during onboarding and never again. The annual filing gets missed because no one owns the deadline. None of these are complex fixes, but they require someone to actually track them.</p>

      <p>Fovestta™ helps HR teams track POSH policy acknowledgment, IC composition, and filing deadlines as part of standard compliance documentation, so this doesn't depend on one person remembering a date on a calendar.</p>
    `
  },
  "professional-tax-state-guide": {
    title: "Professional Tax in India: A State-by-State Guide for Employers",
    category: "Compliance",
    date: "Jun 18, 2026",
    author: "Rahul Sharma",
    role: "Chief Compliance Officer",
    readTime: "6 min read",
    image: "/smart_payroll.webp",
    content: `
      <h2>A Tax That Changes by State</h2>
      <p>Professional Tax (PT) is a state-level direct tax on income from employment, profession, trade, or calling, authorised under Article 276(2) of the Constitution of India. Unlike TDS or EPF, which follow a single central framework, PT rules, slabs, and even collection frequency vary by state — which makes it one of the easiest compliance items to get wrong for any company operating across multiple locations.</p>

      <h3>The Constitutional Ceiling</h3>
      <p>Whatever a state's specific slab structure, PT is capped at ₹2,500 per person per financial year by constitutional ceiling. No state can exceed this regardless of income level.</p>

      <h3>Which States Actually Levy Professional Tax</h3>
      <p>As of 2026, Professional Tax is levied in Maharashtra, Karnataka, West Bengal, Andhra Pradesh, Telangana, Tamil Nadu, Gujarat, Madhya Pradesh, Kerala, Assam, Meghalaya, Tripura, Jharkhand, Bihar, Sikkim, Manipur, and Mizoram. Odisha's Professional Tax Act is repealed effective April 1, 2026.</p>
      <p>States that do <strong>not</strong> levy Professional Tax include Delhi, Uttar Pradesh, Haryana, Rajasthan, Punjab, Uttarakhand, Himachal Pradesh, and Jammu & Kashmir. For a company with employees in both categories of state, this means payroll needs to apply PT selectively by employee location, not uniformly.</p>

      <h3>Slabs and Collection Frequency Differ Too</h3>
      <p>Maharashtra applies gender-specific slabs: women earning up to ₹25,000 per month are fully exempt from PT, while men are taxed on a tiered structure above ₹7,501/month. Karnataka revised its slabs effective April 1, 2025, and those remain the applicable rates through 2026. Some states, including Tamil Nadu and Kerala, collect PT half-yearly rather than monthly, which changes how the deduction shows up on a payslip.</p>

      <h3>Why This Trips Up Multi-State Employers</h3>
      <p>The most common PT compliance failure isn't miscalculating a slab — it's applying the wrong state's rule entirely, usually because an employee's registered work location isn't kept current in the payroll system after a transfer or a move to remote work. A company with offices in both a PT state and a non-PT state needs payroll logic that checks location per employee, per pay cycle, not a single blanket rule.</p>

      <ul>
        <li><strong>Verify registered work location</strong> is current for every employee, especially after transfers or relocations.</li>
        <li><strong>Confirm collection frequency</strong> matches your state's requirement — monthly deduction in a half-yearly state creates a reconciliation headache.</li>
        <li><strong>Re-check slabs annually</strong> since states revise them periodically and rarely on a predictable schedule.</li>
      </ul>

      <p>Fovestta™'s payroll engine applies the correct Professional Tax rule automatically based on each employee's registered work location, so a multi-state workforce doesn't require multiple manual payroll processes.</p>
    `
  },
  "epf-withdrawal-rules-2026": {
    title: "EPF Withdrawal Rules Just Changed: What HR Teams Need to Know",
    category: "Compliance",
    date: "Jul 05, 2026",
    author: "Vikram Mehta",
    role: "Payroll Operations Lead",
    readTime: "5 min read",
    image: "/analytics_reports.webp",
    content: `
      <h2>EPFO Simplifies Withdrawal Categories</h2>
      <p>The EPF Scheme, 2026 reorganizes advance withdrawal rules that had grown into a confusing patchwork of categories over the years. Instead of the old system with numerous narrow withdrawal reasons, each with its own eligibility rules, EPFO has consolidated everything into three broad heads.</p>

      <h3>The Three New Categories</h3>
      <ul>
        <li><strong>Essential Needs:</strong> Illness, education, and marriage-related expenses.</li>
        <li><strong>Housing Needs:</strong> Purchase or construction of a house, purchase of a residential plot, home loan repayment, or renovation.</li>
        <li><strong>Special Circumstances:</strong> Emergencies and other cases notified by the Central Board of Trustees.</li>
      </ul>

      <h3>A Uniform 12-Month Eligibility Window</h3>
      <p>Previously, different withdrawal categories required different lengths of EPF membership before an employee became eligible — in some cases, several years. Under the new scheme, that's replaced with a single uniform requirement: 12 months of EPF membership, regardless of the withdrawal category.</p>

      <h3>The 25% Retention Rule</h3>
      <p>Members can withdraw up to 75% of their eligible balance as an advance, but must retain at least 25% untouched to protect long-term retirement savings. This applies across all three withdrawal categories.</p>

      <h3>Longer Wait for Full Settlement After Job Loss</h3>
      <p>One change that runs in the opposite direction of simplification: employees now generally need to remain unemployed for 12 months before qualifying for premature final settlement of their EPF account, a substantially longer waiting period than before.</p>

      <h3>Faster Processing on the Way</h3>
      <p>EPFO is rolling out a dedicated mobile app using Aadhaar OTP authentication, aimed at enabling same-day or next-day processing for eligible claims — a significant improvement over the 7–15 day timeline that's been standard for most partial withdrawals.</p>

      <h3>What This Means for HR and Payroll Teams</h3>
      <p>Employees will increasingly come to HR with questions about which of the three new categories their situation falls under, and whether they've hit the 12-month eligibility mark. Having accurate, up-to-date EPF membership records — not just contribution records — becomes more important under the new framework, since eligibility is now tied directly to a clean membership timeline.</p>

      <p>Fovestta™ tracks EPF membership duration and contribution history as part of standard payroll records, so HR can answer eligibility questions without a manual lookup through historical data.</p>
    `
  }
};

export function getArticle(slug: string): ArticleData | undefined {
  return articlesData[slug];
}
