import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { pricingPlans } from '../../data/pricing';

export default function PricingSection({
  categoryFilter = null,
  badge = "Transparent Estimates",
  title = "Clear & Honest Pricing Brackets",
  subtitle = "Granular cost estimates tailored to your square footage and finish requirements. No hidden charges midway."
}) {
  // If a specific categoryFilter is passed (or array of categories), filter down
  const initialCategory = Array.isArray(categoryFilter) ? 'All' : (categoryFilter || 'All');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const availableCategories = ['All', 'Home Interiors', 'Modular Kitchens', 'Office Interiors', 'Paint Services', 'Wall Textures', 'Waterproofing'];

  // Filter plans based on prop or tab
  const plans = pricingPlans.filter((plan) => {
    if (categoryFilter) {
      if (Array.isArray(categoryFilter)) {
        if (!categoryFilter.includes(plan.category)) return false;
      } else {
        return plan.category === categoryFilter;
      }
    }
    if (selectedCategory !== 'All') {
      return plan.category === selectedCategory;
    }
    return true;
  });

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-surface border-t border-border/60">
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)` }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={badge}
          title={title}
          subtitle={subtitle}
        />

        {/* Category Tabs (only shown when not restricted to a single category prop) */}
        {!categoryFilter && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? 'bg-charcoal text-cream shadow-sm'
                    : 'bg-beige/60 text-clay hover:bg-beige border border-border/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-xl border p-6 sm:p-8 transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? 'border-primary bg-primary/5 shadow-soft ring-1 ring-primary/30'
                  : 'border-border bg-cream/40 hover:border-primary/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-[11px] font-semibold tracking-wide shadow-sm">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    {plan.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                  {plan.title}
                </h3>
                <p className="text-xs text-clay leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-border/80">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
                      {plan.priceRange}
                    </span>
                    {plan.unit && (
                      <span className="text-xs text-clay font-medium">
                        {plan.unit}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-clay/70 mt-1 block italic">
                    *Estimated starting baseline
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-semibold text-charcoal uppercase tracking-wider block">
                    What's Included:
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/80">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  to={`/book-consultation?service=${encodeURIComponent(plan.serviceKey || plan.category)}`}
                  className="w-full block"
                >
                  <Button
                    variant={plan.popular ? "primary" : "outline"}
                    size="md"
                    className="w-full flex items-center justify-center gap-2 text-xs"
                  >
                    <span>{plan.ctaText || "Get Detailed Quote"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Indicative Disclaimer Note */}
        <div className="mt-12 text-center text-xs text-clay/80 max-w-2xl mx-auto">
          <p>
            * Prices indicated above are budgetary estimates based on typical floor designs and factory-calibrated specifications. Final quotation is issued post architectural assessment, site measurements, and custom BOQ selection.
          </p>
        </div>
      </div>
    </section>
  );
}
