export interface SolutionDetail {
  slug: string;
  type: "industry" | "audience";
  title: string;
  tagline: string;
  imageUrl: string;
  overview: string;
  highlights: { title: string; description: string }[];
  challenges: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const SOLUTIONS: SolutionDetail[] = [
  // Industries
  {
    slug: "it-software",
    type: "industry",
    title: "HRMS for IT & Software Companies",
    tagline: "Scale a distributed engineering workforce with compliance across every location.",
    imageUrl: "/web_screenshot_employee_details.webp",
    overview:
      "IT and software teams rarely work from a single office anymore. Between hybrid schedules, remote developers, and project-based billing, HR needs to track time and attendance accurately without turning every developer into an admin task. Fovestta™ gives IT and software companies a single system for onboarding, attendance, and compliance that works whether a team is in one office or spread across five cities.",
    highlights: [
      { title: "Remote & hybrid onboarding", description: "Onboard developers and engineers remotely with digital document collection, e-signatures, and automated account provisioning." },
      { title: "Project-based time tracking", description: "Track time against specific projects or clients where billing or utilization reporting depends on it." },
      { title: "Multi-location compliance", description: "Professional Tax and other state-specific rules apply automatically based on where each employee is actually registered to work." },
      { title: "Flexible shift & hybrid policies", description: "Configure attendance rules that match a hybrid work model rather than forcing a fixed-office assumption." },
    ],
    challenges: [
      "End-to-end onboarding and offboarding for distributed teams",
      "Hybrid work model support without manual attendance exceptions",
      "Flexible scheduling across time zones and project teams",
    ],
    faqs: [
      { q: "Can we track attendance for a fully remote engineering team?", a: "Yes. Attendance can be captured through app-based check-in, and geofencing is optional rather than required for remote roles." },
      { q: "Does the platform handle project-based billing data?", a: "Time tracking can be tagged to specific projects, giving you the data needed for utilization or client billing reports." },
    ],
    relatedSlugs: ["remote-distributed-teams", "growing-companies", "data-driven-leaders"],
  },
  {
    slug: "manufacturing",
    type: "industry",
    title: "HRMS for Manufacturing Companies",
    tagline: "Manage complex shift structures and multi-plant coordination without administrative bottlenecks.",
    imageUrl: "/web_screenshot_shift_allocation.webp",
    overview:
      "Manufacturing HR has to handle shift rotations, overtime, and safety compliance across production lines that don't stop when the office does. Fovestta™ automates shift scheduling, overtime calculation, and factory-floor attendance so plant managers get real-time visibility instead of end-of-week reconciliation.",
    highlights: [
      { title: "Shift & rotation management", description: "Configure rotating shift patterns and automatically calculate overtime and shift differentials." },
      { title: "Factory-floor attendance", description: "Biometric and RFID integration captures attendance directly on the shop floor without manual logs." },
      { title: "Multi-plant coordination", description: "Manage workforce data across multiple production facilities from a single dashboard." },
      { title: "Safety & compliance tracking", description: "Keep certification and safety-training records current alongside standard HR compliance." },
    ],
    challenges: [
      "Intricate shift rotations across multiple production lines",
      "Automated overtime calculation without manual timesheet review",
      "Real-time attendance visibility across plants",
    ],
    faqs: [
      { q: "Can shift patterns differ by production line?", a: "Yes, shifts, rotations, and overtime rules can be configured independently for each line or plant." },
      { q: "Does the system integrate with existing biometric hardware on the factory floor?", a: "Fovestta™ integrates with common biometric and RFID devices already installed on the shop floor." },
    ],
    relatedSlugs: ["compliance-teams", "growing-companies", "logistics-ecommerce"],
  },
  {
    slug: "healthcare",
    type: "industry",
    title: "HRMS for Healthcare Organizations",
    tagline: "Keep clinical and support staff scheduled, licensed, and compliant around the clock.",
    imageUrl: "/web_screenshot_team_attendance_list.webp",
    overview:
      "Healthcare staffing runs on rosters that never fully stop, and every shift depends on staff whose licenses and certifications need to stay current. Fovestta™ simplifies 24/7 roster management, automates license and certification tracking, and helps healthcare organizations stay compliant with strict scheduling and staffing regulations — without burning out the people managing the schedule.",
    highlights: [
      { title: "24/7 roster management", description: "Build and manage round-the-clock shift rosters that account for mandatory rest periods and coverage requirements." },
      { title: "License & certification tracking", description: "Track expiry dates for medical licenses and certifications, with alerts before they lapse." },
      { title: "On-call management", description: "Manage on-call rotations and track on-call compensation alongside standard shift pay." },
      { title: "Balanced shift distribution", description: "Distribute shifts more evenly across staff to reduce burnout from concentrated overtime." },
    ],
    challenges: [
      "Complex 24/7 scheduling with mandatory rest and coverage rules",
      "License and certification expiry tracking across clinical staff",
      "On-call rotation management and burnout prevention",
    ],
    faqs: [
      { q: "Can the system alert us before a staff license expires?", a: "Yes, certification and license expiry dates are tracked with configurable advance alerts to relevant managers." },
      { q: "Does it support 24/7 shift coverage requirements?", a: "Rosters can be configured to enforce minimum coverage and rest-period rules across round-the-clock shifts." },
    ],
    relatedSlugs: ["compliance-teams", "growing-companies", "manufacturing"],
  },
  {
    slug: "retail-hospitality",
    type: "industry",
    title: "HRMS for Retail & Hospitality",
    tagline: "Manage a high-volume, multi-location, hourly workforce with agile scheduling.",
    imageUrl: "/app_screenshot_team_dashboard.webp",
    overview:
      "Retail and hospitality workforces fluctuate with demand — seasonal peaks, weekend rushes, and multiple locations that each need accurate attendance tracking. Fovestta™ gives high-volume, multi-location employers precise attendance tracking, flexible hourly scheduling, and fast onboarding for seasonal staff, so managers can focus on staffing the floor instead of reconciling timesheets.",
    highlights: [
      { title: "High-volume attendance tracking", description: "Track attendance accurately across large, high-turnover, multi-location hourly workforces." },
      { title: "Flexible hourly scheduling", description: "Build schedules around fluctuating demand rather than a fixed weekly template." },
      { title: "Fast seasonal onboarding", description: "Onboard seasonal and temporary staff quickly with a streamlined digital process." },
      { title: "Multi-location payroll", description: "Automate payroll for hourly workers across every location from one system." },
    ],
    challenges: [
      "Precise attendance tracking across multiple locations",
      "Flexible hours and fluctuating seasonal staffing demand",
      "Fast, low-friction onboarding for seasonal hires",
    ],
    faqs: [
      { q: "Can we onboard a large batch of seasonal staff quickly?", a: "Yes, the onboarding workflow is designed to process new hires quickly with digital document collection and fast account setup." },
      { q: "Does the system handle payroll for hourly workers across multiple stores?", a: "Payroll automatically applies location-specific rules for every hourly employee, regardless of how many stores or outlets you operate." },
    ],
    relatedSlugs: ["growing-companies", "logistics-ecommerce", "manufacturing"],
  },
  {
    slug: "education",
    type: "industry",
    title: "HRMS for Schools, Colleges & Universities",
    tagline: "Streamline staff scheduling, leave management, and contract tracking for academic institutions.",
    imageUrl: "/web_screenshot_holiday_master.webp",
    overview:
      "Educational institutions manage a mix of full-time faculty, adjunct staff, and administrative teams — each with different contract structures and academic-calendar-driven schedules. Fovestta™ handles staff scheduling around academic terms, contract tracking for full-time and adjunct faculty, and leave management across multiple campus departments, so administrators spend less time on paperwork and more time supporting students.",
    highlights: [
      { title: "Academic calendar scheduling", description: "Build staff schedules around terms, semesters, and academic holidays rather than a generic corporate calendar." },
      { title: "Faculty contract tracking", description: "Track contract terms and renewal dates for both full-time and adjunct faculty in one place." },
      { title: "Multi-department leave management", description: "Manage leave policies and approvals across departments, campuses, or faculties." },
      { title: "Staff self-service", description: "Give faculty and staff self-service access to leave requests, payslips, and contract details." },
    ],
    challenges: [
      "Managing academic-calendar-driven staff schedules",
      "Contract tracking for full-time and adjunct faculty",
      "Complex leave management across multiple departments",
    ],
    faqs: [
      { q: "Can the system track adjunct faculty contracts separately from full-time staff?", a: "Yes, contract types, terms, and renewal tracking can be configured separately for adjunct and full-time faculty." },
      { q: "Does scheduling account for academic terms and holidays?", a: "Schedules and leave calendars can be built around your institution's actual academic calendar." },
    ],
    relatedSlugs: ["growing-companies", "compliance-teams", "data-driven-leaders"],
  },
  {
    slug: "logistics-ecommerce",
    type: "industry",
    title: "HRMS for Logistics & E-Commerce",
    tagline: "Keep a rapidly scaling, location-based workforce agile and compliant.",
    imageUrl: "/app_screenshot_field_tracking.webp",
    overview:
      "Logistics and e-commerce operations scale quickly and depend on drivers and warehouse staff whose locations change constantly. Fovestta™ supports on-demand scheduling, dynamic shift swaps, and precise location-based attendance tracking, with compliance automated for a workforce that's rarely sitting at a desk.",
    highlights: [
      { title: "On-demand scheduling", description: "Build and adjust schedules quickly as demand and staffing needs shift day to day." },
      { title: "Location-based attendance", description: "Track attendance accurately for drivers and warehouse staff working across multiple sites or routes." },
      { title: "Dynamic shift swaps", description: "Let staff swap shifts within approved rules, reducing manager overhead for last-minute changes." },
      { title: "Compliance for a mobile workforce", description: "Apply the right compliance rules automatically even as staff move between locations or shift types." },
    ],
    challenges: [
      "Real-time workforce agility for rapidly scaling teams",
      "On-demand scheduling and last-minute shift changes",
      "Accurate payroll for a fast-moving, location-based workforce",
    ],
    faqs: [
      { q: "Can drivers and warehouse staff check in from different locations?", a: "Yes, location-based attendance tracking works across multiple sites and routes without manual reconciliation." },
      { q: "How are shift swaps managed?", a: "Staff can request shift swaps within rules you configure, with manager approval where required." },
    ],
    relatedSlugs: ["remote-distributed-teams", "retail-hospitality", "growing-companies"],
  },
  // Audience segments
  {
    slug: "growing-companies",
    type: "audience",
    title: "HRMS for Growing Companies",
    tagline: "Scale HR operations without scaling headcount. Built for companies with 50-500 employees.",
    imageUrl: "/web_screenshot_employees_list.webp",
    overview:
      "Growing from 50 to 500 employees usually means HR processes that worked at a smaller scale start to break — onboarding takes longer, multi-location coordination gets messy, and department-level visibility gets harder. Fovestta™ is built for companies in this growth phase: enough structure to keep pace with headcount growth, without the enterprise complexity a smaller company doesn't need yet.",
    highlights: [
      { title: "Easy, scalable onboarding", description: "Onboard new hires quickly with a repeatable digital process that doesn't get slower as headcount grows." },
      { title: "Multi-location support", description: "Add new offices or locations without rebuilding your HR processes from scratch each time." },
      { title: "Department management", description: "Organize and report on headcount, cost, and compliance by department as your org chart gets more complex." },
    ],
    challenges: [
      "Onboarding that stays fast as headcount scales",
      "Multi-location HR without duplicated processes",
      "Department-level visibility as the org chart grows",
    ],
    faqs: [
      { q: "How long does it take to onboard a new office or location?", a: "Adding a new location means configuring its compliance rules once; the same onboarding and payroll processes carry over automatically." },
      { q: "Is this too much system for a 50-person company?", a: "Fovestta™'s Essential Edge plan is built specifically for single-organization companies starting their HRMS journey, scaling up as you grow." },
    ],
    relatedSlugs: ["data-driven-leaders", "compliance-teams", "it-software"],
  },
  {
    slug: "data-driven-leaders",
    type: "audience",
    title: "HRMS for Data-Driven HR Leaders",
    tagline: "Make workforce decisions backed by real-time data, not quarterly guesswork.",
    imageUrl: "/web_screenshot_department_breakdown.webp",
    overview:
      "HR leaders who want to make decisions based on data rather than instinct need more than a payroll system — they need visibility into attrition trends, cost per department, and productivity signals as they happen. Fovestta™'s analytics layer turns the payroll, attendance, and performance data already in the system into dashboards and reports that support real decisions, not just year-end summaries.",
    highlights: [
      { title: "Advanced analytics", description: "Track attrition, cost, and productivity trends across the organization in real time." },
      { title: "Custom reports", description: "Build reports around the specific metrics your leadership team actually tracks." },
      { title: "Predictive insights", description: "Spot patterns — like rising overtime cost or attrition risk in a department — before they become a bigger problem." },
    ],
    challenges: [
      "Real-time visibility into workforce trends",
      "Custom reporting beyond generic templates",
      "Spotting risk signals before they escalate",
    ],
    faqs: [
      { q: "Can we build reports specific to our KPIs?", a: "Yes, the custom report builder lets you combine available data points into reports built around your organization's specific metrics." },
      { q: "Does the data update in real time?", a: "Dashboards reflect current payroll, attendance, and performance data as it's processed, not a periodic batch export." },
    ],
    relatedSlugs: ["growing-companies", "compliance-teams", "it-software"],
  },
  {
    slug: "compliance-teams",
    type: "audience",
    title: "HRMS for Compliance & Legal Teams",
    tagline: "Stay ahead of regulations with automated compliance checks and audit trails.",
    imageUrl: "/app_screenshot_regularization.webp",
    overview:
      "Compliance teams carry the risk when a filing is late or a calculation is wrong, often without visibility into whether HR and payroll processes are actually following current rules. Fovestta™ automates statutory compliance calculations, keeps rules current, and logs every compliance-relevant action, so compliance teams get the audit trail and control they need without manually policing every payroll run.",
    highlights: [
      { title: "Auto-updated compliance rules", description: "Statutory rules for TDS, EPF, ESI, and Professional Tax are maintained centrally and applied automatically." },
      { title: "Audit trails", description: "Every compliance-relevant action is logged with a timestamp, available for review during an internal or external audit." },
      { title: "Policy management", description: "Track policy documentation, including POSH policy acknowledgment, in one centralized system." },
    ],
    challenges: [
      "Staying ahead of statutory rule changes across states",
      "Maintaining an audit trail for every compliance-relevant action",
      "Reducing risk from manual compliance calculations",
    ],
    faqs: [
      { q: "How do we verify a specific payroll run was compliant?", a: "Every calculation and filing is logged with the rule version applied, giving you a traceable record for any pay cycle." },
      { q: "Does the system support POSH policy documentation?", a: "Yes, POSH policy acknowledgment and related documentation can be tracked as part of your compliance records." },
    ],
    relatedSlugs: ["data-driven-leaders", "healthcare", "manufacturing"],
  },
  {
    slug: "remote-distributed-teams",
    type: "audience",
    title: "HRMS for Remote & Distributed Teams",
    tagline: "Manage a workforce spread across cities or states with the same confidence as a single office.",
    imageUrl: "/app_screenshot_field_tracking.webp",
    overview:
      "Managing HR for a distributed team means solving problems a single-office company doesn't face: verifying attendance without a shared physical space, applying the right state-specific compliance rules per employee, and keeping remote staff connected to company processes. Fovestta™ was built for exactly this — geofenced and face-recognition attendance, multi-state payroll rules, and a self-service portal that works the same whether an employee is in the next room or a different state.",
    highlights: [
      { title: "Geofenced attendance", description: "Verify attendance by location for remote and field staff without requiring a shared office." },
      { title: "Face recognition check-in", description: "Confirm identity, not just credentials, for a distributed team checking in from different locations." },
      { title: "Multi-state payroll rules", description: "Apply the correct compliance rules automatically based on each employee's actual work location." },
    ],
    challenges: [
      "Verifying attendance without a shared physical office",
      "Applying correct compliance rules across multiple states",
      "Keeping distributed employees connected to HR processes",
    ],
    faqs: [
      { q: "Can we verify attendance for employees working from home?", a: "Yes, attendance can be captured through app-based check-in with optional geofencing or face recognition, depending on your policy." },
      { q: "How does payroll handle employees registered in different states?", a: "Professional Tax and other state-specific rules apply automatically based on each employee's registered work location." },
    ],
    relatedSlugs: ["it-software", "logistics-ecommerce", "growing-companies"],
  },
];

export function getSolution(slug: string): SolutionDetail | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
