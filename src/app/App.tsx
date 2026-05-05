import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/fovestta/ScrollToTop";
import { PremiumNav } from "./components/fovestta/PremiumNav";
import { PremiumHero } from "./components/fovestta/PremiumHero";
import { PremiumFeatures } from "./components/fovestta/PremiumFeatures";
import { DashboardShowcase } from "./components/fovestta/DashboardShowcase";
import { SecuritySection } from "./components/fovestta/SecuritySection";
import { SuccessStoriesSection } from "./components/fovestta/SuccessStoriesSection";
import { TeamCultureSection } from "./components/fovestta/TeamCultureSection";
import { IndustriesSection } from "./components/fovestta/IndustriesSection";
import { ROICalculator } from "./components/fovestta/ROICalculator";
import { FAQSection } from "./components/fovestta/FAQSection";
import { HRChallengesSection } from "./components/fovestta/HRChallengesSection";
import { CustomerResultsSection } from "./components/fovestta/CustomerResultsSection";
import { TestimonialsSection } from "./components/fovestta/TestimonialsSection";
import { ResourcesSection } from "./components/fovestta/ResourcesSection";
import { PricingSection } from "./components/fovestta/PricingSection";
import { SupportSection } from "./components/fovestta/SupportSection";
import { PayrollChecklistSection } from "./components/fovestta/PayrollChecklistSection";
import { PayrollCostCalculatorSection } from "./components/fovestta/PayrollCostCalculatorSection";
import { ComplianceScorecardSection } from "./components/fovestta/ComplianceScorecardSection";
import { RequestDemoSection } from "./components/fovestta/RequestDemoSection";
import { AdminAuthSection } from "./components/fovestta/AdminAuthSection";
import { Footer } from "./components/fovestta/Footer";

function LandingPage() {
  return (
    <>
      <PremiumHero />
      <PremiumFeatures />
      <DashboardShowcase />
      <SecuritySection />
      <SuccessStoriesSection />
      <TeamCultureSection />
      <IndustriesSection />
      <ROICalculator />
      <FAQSection />
      <HRChallengesSection />
      <CustomerResultsSection />
      <TestimonialsSection />
      <ResourcesSection />
      <PricingSection />
      <SupportSection />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <PremiumNav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/payroll-checklist" element={<PayrollChecklistSection />} />
          <Route path="/payroll-calculator" element={<PayrollCostCalculatorSection />} />
          <Route path="/compliance-scorecard" element={<ComplianceScorecardSection />} />
          <Route path="/request-demo" element={<RequestDemoSection />} />
          <Route path="/admin-auth" element={<AdminAuthSection />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}