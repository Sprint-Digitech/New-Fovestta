interface PremiumBackgroundProps {
  variant?: 'luxury' | 'elegant' | 'vibrant';
}

const VARIANT_GRADIENTS: Record<NonNullable<PremiumBackgroundProps['variant']>, string> = {
  luxury: 'from-purple-100/40 via-transparent to-blue-100/30',
  elegant: 'from-slate-100/50 via-transparent to-purple-50/30',
  vibrant: 'from-pink-100/30 via-transparent to-purple-100/40',
};

/**
 * A lightweight decorative background wash. Deliberately static (no
 * continuous animation, no large-radius blur) -- an earlier version ran
 * 7 separate infinite framer-motion loops with 80-140px blur filters on
 * every page using this component, which cost real CPU/GPU time forever
 * after load for a barely-noticeable effect.
 */
export function PremiumBackground({ variant = 'luxury' }: PremiumBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/30"></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${VARIANT_GRADIENTS[variant]}`}></div>
    </div>
  );
}
