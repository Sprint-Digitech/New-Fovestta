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
import { FAQSection } from "./components/fovestta/FAQSection";
import { HRChallengesSection } from "./components/fovestta/HRChallengesSection";
import { CustomerResultsSection } from "./components/fovestta/CustomerResultsSection";
import { ResourcesSection } from "./components/fovestta/ResourcesSection";
import { PricingSection } from "./components/fovestta/PricingSection";
import { SupportSection } from "./components/fovestta/SupportSection";
import { PayrollChecklistSection } from "./components/fovestta/PayrollChecklistSection";
import { PayrollCostCalculatorSection } from "./components/fovestta/PayrollCostCalculatorSection";
import { ComplianceScorecardSection } from "./components/fovestta/ComplianceScorecardSection";
import { RequestDemoSection } from "./components/fovestta/RequestDemoSection";
import { AdminAuthSection } from "./components/fovestta/AdminAuthSection";
import { UserAuthSection } from "./components/fovestta/UserAuthSection";
import { BlogPage } from "./components/fovestta/BlogPage";
import { PrivacyPolicyPage } from "./components/fovestta/PrivacyPolicyPage";
import { TermsOfServicePage } from "./components/fovestta/TermsOfServicePage";
import { CookiePolicyPage } from "./components/fovestta/CookiePolicyPage";
import { ComplianceSecurityPage } from "./components/fovestta/ComplianceSecurityPage";
import { ArticlePage } from "./components/fovestta/ArticlePage";
import { CheckoutPage } from "./components/fovestta/CheckoutPage";
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
      <HRChallengesSection />
      <CustomerResultsSection />
      <ResourcesSection />
      <PricingSection />
      <SupportSection />
      <FAQSection />
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
          <Route path="/user-auth" element={<UserAuthSection />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/compliance" element={<ComplianceSecurityPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}