// Single source of truth for plan billing figures, shared by the pricing
// calculator (PricingSection) and the checkout flow (CheckoutPage) so the
// two pages can't quote different numbers for the same plan.
export const PLAN_RATES: Record<
  string,
  { name: string; baseRate: number; beyondRate: number; setupFee: number; employeeCap?: number }
> = {
  "essential-edge": { name: "Essential Edge", baseRate: 140, beyondRate: 80, setupFee: 10000 },
  "growth-catalyst": { name: "Growth Catalyst", baseRate: 200, beyondRate: 120, setupFee: 10000 },
  "enterprise-infinity": { name: "Enterprise Infinity", baseRate: 250, beyondRate: 180, setupFee: 10000 },
  "startup-elevate": { name: "Startup Elevate", baseRate: 100, beyondRate: 100, setupFee: 0, employeeCap: 24 },
};

// First 50 employees are billed at baseRate, anything beyond that at beyondRate.
export function calculateMonthlyCost(baseRate: number, beyondRate: number, employees: number): number {
  if (employees <= 50 || baseRate === beyondRate) return employees * baseRate;
  return 50 * baseRate + (employees - 50) * beyondRate;
}
