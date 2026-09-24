export interface FeatureDetail {
  slug: string;
  title: string;
  shortDescription: string;
  gradient: string;
  glowColor: string;
  imageUrl?: string;
  overview: string;
  capabilities: { title: string; description: string }[];
  howItWorks: { step: string; description: string }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const FEATURES: FeatureDetail[] = [
  {
    slug: "smart-payroll",
    title: "Smart Payroll",
    shortDescription: "End-to-end payroll with automatic TDS, EPF, ESI, PT, and LWF calculations for every pay cycle.",
    gradient: "from-[#7C3AED] to-purple-600",
    glowColor: "rgba(124,58,237,0.4)",
    imageUrl: "/web_screenshot_salary_breakup.webp",
    overview:
      "Running payroll in India means juggling multiple statutory deductions that change by state, salary slab, and employee type. Smart Payroll replaces the spreadsheet-and-challan routine with a rule engine that recalculates every component automatically whenever a salary, location, or regulation changes — so payroll stops being a monthly fire drill and becomes a same-day task.",
    capabilities: [
      { title: "Automatic statutory deductions", description: "TDS, EPF (12% employee + employer contribution), ESI (for employees under the ₹21,000 wage ceiling), Professional Tax by state, and LWF are calculated automatically for every employee, every cycle." },
      { title: "Salary revision handling", description: "Mid-cycle increments, promotions, and structure changes are prorated automatically, so a raise on the 15th doesn't mean a manual recalculation." },
      { title: "Challan-ready compliance filing", description: "PF and ESI challans are generated in the exact format required by the government portals, cutting the filing step down from hours to minutes." },
      { title: "Multi-state payroll rules", description: "Professional Tax slabs and other state-specific rules are applied automatically based on each employee's work location, so a multi-state workforce doesn't mean multiple manual processes." },
      { title: "Payslip generation", description: "Detailed, itemized payslips are generated automatically each cycle and made available to employees through the self-service portal." },
    ],
    howItWorks: [
      { step: "1. Attendance and leave sync", description: "Approved attendance and leave data flows in automatically, so payroll is always calculated against accurate, up-to-date records." },
      { step: "2. Rules apply automatically", description: "The compliance engine applies the correct TDS, EPF, ESI, PT, and LWF rules per employee based on salary, location, and employment type." },
      { step: "3. Review and approve", description: "HR reviews a summarized payroll run — flagged exceptions, revisions, and reimbursements included — before final approval." },
      { step: "4. Disburse and file", description: "Payslips go out to employees, and PF/ESI challans are ready to file in the exact government-required format." },
    ],
    faqs: [
      { q: "Does Smart Payroll handle Professional Tax for every state?", a: "Yes. Professional Tax slabs differ by state, and Fovestta™ applies the correct slab automatically based on each employee's registered work location." },
      { q: "What happens if an employee's salary changes mid-month?", a: "Mid-cycle salary revisions are prorated automatically across the days worked at each rate, so no manual recalculation is needed." },
    ],
    relatedSlugs: ["compliance-engine", "attendance-leave", "employee-portal"],
  },
  {
    slug: "attendance-leave",
    title: "Attendance & Leave",
    shortDescription: "Biometric, RFID, and GPS-based attendance tracking tied directly to leave policy and payroll.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.4)",
    imageUrl: "/app_screenshot_attendance.webp",
    overview:
      "Attendance data is only useful if it's accurate and connected to everything downstream — leave balances, shift rules, and payroll. Fovestta™ integrates with biometric devices, RFID readers, and GPS-based geofencing to capture attendance at the source, then applies your company's leave policy automatically so approvals, balances, and payroll deductions stay in sync without manual reconciliation.",
    capabilities: [
      { title: "Biometric & RFID integration", description: "Connect existing biometric or RFID hardware, or use the app-based check-in, to capture attendance without manual entry." },
      { title: "Geofenced GPS attendance", description: "Restrict check-ins to approved locations for field teams and remote staff, so attendance reflects where work actually happened." },
      { title: "Configurable leave policies", description: "Set up leave types, accrual rules, carry-forward limits, and approval chains that match your company's actual policy, not a generic default." },
      { title: "Shift and roster management", description: "Assign shifts, rotate rosters, and handle overtime rules automatically for teams that don't work a standard 9-to-6." },
      { title: "Loss of Pay (LOP) handling", description: "Unapproved absences flow into payroll as LOP deductions automatically, and reversed once a leave record is corrected." },
    ],
    howItWorks: [
      { step: "1. Capture attendance", description: "Employees check in via biometric device, RFID card, GPS-verified mobile app, or face recognition." },
      { step: "2. Apply leave policy", description: "Leave requests are matched against configured accrual rules, balances, and approval chains automatically." },
      { step: "3. Reconcile exceptions", description: "Managers review flagged exceptions — late check-ins, missed punches, pending approvals — in one dashboard." },
      { step: "4. Flow into payroll", description: "Final attendance and leave data feeds directly into Smart Payroll, so LOP, overtime, and shift differentials are calculated automatically." },
    ],
    faqs: [
      { q: "Can attendance rules differ by team or location?", a: "Yes. Shift patterns, geofence boundaries, and leave policies can all be configured per team, department, or location rather than applied uniformly." },
      { q: "What happens if a leave request is approved after payroll has already run?", a: "The system reverses the associated Loss of Pay deduction and reflects the correction in the next payroll cycle." },
    ],
    relatedSlugs: ["face-recognition", "smart-payroll", "employee-portal"],
  },
  {
    slug: "face-recognition",
    title: "Face Recognition",
    shortDescription: "Touchless, AI-powered facial attendance that verifies identity in seconds and eliminates buddy punching.",
    gradient: "from-fuchsia-500 to-purple-600",
    glowColor: "rgba(217,70,239,0.4)",
    imageUrl: "/app_screenshot_field_tracking.webp",
    overview:
      "Buddy punching and shared-badge check-ins are a recurring problem with card and PIN-based attendance systems. Face recognition attendance solves this at the source: each check-in is matched against a verified facial profile in real time, so the attendance record reflects who was actually present, not just whose credentials were used. It requires no dedicated hardware beyond a camera-enabled device, and the check-in itself takes seconds.",
    capabilities: [
      { title: "Real-time identity verification", description: "Each check-in is matched against the employee's enrolled facial profile in seconds, confirming presence rather than just credential possession." },
      { title: "No dedicated hardware required", description: "Works from any camera-enabled device — a tablet at reception, or a phone for field staff — without a proprietary biometric scanner." },
      { title: "Eliminates buddy punching", description: "Because verification is identity-based rather than credential-based, one employee can no longer check in on another's behalf." },
      { title: "Instant payroll and shift sync", description: "Verified check-ins flow directly into attendance records, shift rules, and payroll — no separate export or reconciliation step." },
      { title: "Works with geofencing", description: "Combine facial verification with GPS geofencing so check-ins are confirmed for both identity and location." },
    ],
    howItWorks: [
      { step: "1. Enroll once", description: "Each employee's facial profile is enrolled a single time during onboarding." },
      { step: "2. Check in daily", description: "Employees check in with a quick face scan from any approved device — no card, PIN, or fingerprint needed." },
      { step: "3. Verify in seconds", description: "The system matches the scan against the enrolled profile and confirms identity in real time." },
      { step: "4. Sync automatically", description: "Verified attendance flows straight into the attendance dashboard, leave calculations, and payroll." },
    ],
    faqs: [
      { q: "What happens if the system doesn't recognize an employee?", a: "The employee can retry the scan or use a fallback check-in method configured by their administrator; every fallback event is logged for manager review." },
      { q: "Is facial data stored securely?", a: "Enrolled facial data is encrypted and used only for attendance verification within your organization's account." },
    ],
    relatedSlugs: ["attendance-leave", "smart-payroll", "compliance-engine"],
  },
  {
    slug: "performance-insights",
    title: "Performance Insights",
    shortDescription: "Comprehensive appraisal cycles with KPI tracking for quarterly and annual performance reviews.",
    gradient: "from-purple-600 to-pink-600",
    glowColor: "rgba(147,51,234,0.4)",
    imageUrl: "/web_screenshot_team_attendance_charts.webp",
    overview:
      "Performance reviews that live in shared documents and scattered feedback emails are hard to track and even harder to make fair. Performance Insights gives HR and managers a structured system for setting KPIs, running appraisal cycles, and capturing feedback — so quarterly and annual reviews are backed by consistent data instead of memory and gut feel.",
    capabilities: [
      { title: "Configurable KPI frameworks", description: "Define the KPIs and weightings that actually matter for each role or department, rather than a one-size-fits-all scorecard." },
      { title: "Quarterly and annual review cycles", description: "Run structured appraisal cycles on the schedule your organization already follows, with automated reminders for managers and employees." },
      { title: "360-degree feedback", description: "Collect input from managers, peers, and direct reports as part of a single review, giving a fuller picture than a single manager's assessment." },
      { title: "Goal tracking", description: "Set and track individual and team goals throughout the review period, not just at appraisal time." },
      { title: "Review history", description: "Every past review is stored and searchable, so promotion and compensation decisions can be backed by a documented performance record." },
    ],
    howItWorks: [
      { step: "1. Set KPIs and goals", description: "Managers and HR define the KPIs and goals for each role at the start of the review cycle." },
      { step: "2. Track through the cycle", description: "Progress updates and feedback are logged continuously rather than reconstructed at review time." },
      { step: "3. Run the review", description: "Self-assessments, manager reviews, and optional peer feedback are collected in one structured workflow." },
      { step: "4. Finalize and archive", description: "Completed reviews are finalized, shared with the employee, and archived in their permanent performance record." },
    ],
    faqs: [
      { q: "Can we use our own KPI framework instead of a template?", a: "Yes. KPIs, weightings, and rating scales are fully configurable per role or department." },
      { q: "Does this connect to compensation decisions?", a: "Review history and ratings are available alongside payroll data, so compensation and promotion decisions can reference documented performance." },
    ],
    relatedSlugs: ["employee-portal", "analytics-reports", "smart-payroll"],
  },
  {
    slug: "employee-portal",
    title: "Employee Portal",
    shortDescription: "A self-service hub for leave requests, payslips, reimbursements, and everyday HR tasks.",
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6,182,212,0.4)",
    imageUrl: "/app_screenshot_leave_form.webp",
    overview:
      "Most HR tickets are routine — a payslip request, a leave balance check, a reimbursement submission. The Employee Portal puts these tasks directly in employees' hands through self-service, reducing repetitive HR requests and giving employees a single place to manage their own HR interactions instead of emailing HR for information that should be a click away.",
    capabilities: [
      { title: "Leave requests and balances", description: "Employees can view their leave balance and submit requests directly, with automatic routing to the right approver." },
      { title: "Payslip access", description: "Past and current payslips are available on demand, without a request to HR." },
      { title: "Reimbursement submissions", description: "Employees upload receipts and submit reimbursement claims directly, with status tracking through approval." },
      { title: "Investment declarations", description: "Form 12BB and investment proof submissions happen through the portal, with documents auto-verified or queued for review." },
      { title: "Company announcements and documents", description: "Policies, announcements, and shared documents live in one place employees already check regularly." },
    ],
    howItWorks: [
      { step: "1. Employee logs in", description: "Each employee gets their own secure portal account during onboarding." },
      { step: "2. Self-serve routine tasks", description: "Leave requests, payslip downloads, and reimbursement submissions happen without contacting HR." },
      { step: "3. Automatic routing", description: "Requests that need approval are routed to the correct manager automatically, with status visible to the employee." },
      { step: "4. HR sees less repetitive work", description: "HR teams spend less time on routine requests and more time on work that actually requires their judgment." },
    ],
    faqs: [
      { q: "Can employees access the portal from their phone?", a: "Yes, the portal is fully accessible on mobile, so employees can submit requests or check balances without a desktop." },
      { q: "Who can see an employee's portal data?", a: "Access is role-based — employees see their own records, and managers/HR see only what their role permits." },
    ],
    relatedSlugs: ["attendance-leave", "smart-payroll", "performance-insights"],
  },
  {
    slug: "compliance-engine",
    title: "Compliance Engine",
    shortDescription: "Auto-updated multi-state compliance for IT, labour laws, and Professional Tax with government portal integration.",
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.4)",
    imageUrl: "/web_screenshot_pf_breakdown.webp",
    overview:
      "India's HR compliance landscape spans central rules (like EPF and ESI), state-specific rules (like Professional Tax and Shops & Establishments Acts), and periodic regulatory changes. Reactive compliance — finding out about a change after a filing deadline — carries real financial risk. The Compliance Engine keeps rules updated centrally and applies them automatically across every applicable employee and location, so compliance shifts from a manual chase to a background process.",
    capabilities: [
      { title: "Multi-state Professional Tax", description: "Professional Tax rules and slabs, which vary by state, are applied automatically based on each employee's work location." },
      { title: "Labour law updates", description: "Changes to labour regulations are reflected in the platform's rule engine, reducing the risk of applying outdated calculations." },
      { title: "Government portal-ready filings", description: "Compliance data is formatted for direct filing with government portals, cutting down manual data entry and formatting errors." },
      { title: "Audit trails", description: "Every compliance-relevant action — a rate change, a filing, an approval — is logged and available for audit review." },
      { title: "POSH policy support", description: "Track POSH (Prevention of Sexual Harassment) policy acknowledgment and committee records as part of your compliance documentation." },
    ],
    howItWorks: [
      { step: "1. Rules stay current", description: "The compliance rule engine is maintained centrally and reflects current statutory requirements." },
      { step: "2. Rules apply automatically", description: "Each employee's applicable rules are determined by their salary, location, and employment type — no manual lookup needed." },
      { step: "3. Exceptions are flagged", description: "Anything that needs human review — an edge case, a missing document — is surfaced before it becomes a compliance gap." },
      { step: "4. Filing-ready output", description: "Compliance reports and filings are generated in the format required by the relevant government portal." },
    ],
    faqs: [
      { q: "Does the Compliance Engine cover every Indian state?", a: "Professional Tax and other state-specific rules are applied based on each employee's registered work location across the states where your organization operates." },
      { q: "How are audit trails maintained?", a: "Every compliance-relevant change and filing is logged with a timestamp and responsible user, available for review during an audit." },
    ],
    relatedSlugs: ["smart-payroll", "analytics-reports", "attendance-leave"],
  },
  {
    slug: "analytics-reports",
    title: "Analytics & Reports",
    shortDescription: "Pre-built HR reports and real-time analytics for payroll, staffing, and productivity decisions.",
    gradient: "from-indigo-500 to-purple-600",
    glowColor: "rgba(99,102,241,0.4)",
    imageUrl: "/web_screenshot_salary_dashboard.webp",
    overview:
      "HR decisions are only as good as the data behind them. Analytics & Reports turns payroll, attendance, and performance data that's already in the system into pre-built reports and real-time dashboards, so leaders can answer questions about headcount, cost, and productivity without waiting on a manual spreadsheet pull.",
    capabilities: [
      { title: "Pre-built HR reports", description: "Standard reports for payroll cost, staff strength, attrition, and attendance trends are available without custom setup." },
      { title: "Real-time dashboards", description: "Key metrics update as underlying data changes, rather than requiring a periodic manual refresh." },
      { title: "Custom report builder", description: "Build reports around the specific metrics your organization tracks, beyond the standard templates." },
      { title: "Export-ready formats", description: "Reports export in formats ready for board decks, audits, or further analysis in other tools." },
      { title: "Trend analysis", description: "Track metrics like attrition, overtime cost, or compliance status over time to spot patterns before they become problems." },
    ],
    howItWorks: [
      { step: "1. Data flows in automatically", description: "Payroll, attendance, and performance data already in the system feeds analytics without a separate import step." },
      { step: "2. Reports generate automatically", description: "Standard reports refresh continuously, so they reflect current data rather than a snapshot from last month." },
      { step: "3. Customize as needed", description: "Build additional reports or dashboard views around metrics specific to your organization." },
      { step: "4. Share and export", description: "Distribute reports to stakeholders in the format they need, from PDF summaries to raw data exports." },
    ],
    faqs: [
      { q: "Do reports update automatically as new payroll runs happen?", a: "Yes, dashboards and reports reflect current data as it's processed, rather than requiring a manual refresh." },
      { q: "Can we build a report that isn't in the standard template set?", a: "Yes, the custom report builder lets you combine available data points into reports specific to your organization's needs." },
    ],
    relatedSlugs: ["performance-insights", "compliance-engine", "smart-payroll"],
  },
];

export function getFeature(slug: string): FeatureDetail | undefined {
  return FEATURES.find((f) => f.slug === slug);
}
