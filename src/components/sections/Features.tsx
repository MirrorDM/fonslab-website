// import { Rocket, Shield, Zap, Users } from 'lucide-react';

export default function Features() {
  return (
    <div id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for real-world impact
          </p>
          <p className="mt-4 text-xl text-gray-600 lg:mx-auto">
            We partner with you in two lanes: enterprise LLM software services and Zentient, our AI companion.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* AI Software Services */}
          <div className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">AI Software Services</h3>
            <p className="mt-2 text-gray-600">
              End-to-end support for companies adopting frontier language models.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-gray-700">
              <li>AI Model Training & Evaluation (LLMs)</li>
              <li>Dataset Curation, Updates & Maintenance</li>
              <li>Model Optimization & Fine-Tuning for Domain-Specific Applications</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Delivery on your cloud, on-prem, or hybrid.
            </p>
          </div>

          {/* Zentient AI Companion */}
          <div id="zentient" className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Zentient — AI Companion Toy</h3>
            <p className="mt-2 text-gray-600">
              A friendly, child-focused companion that supports emotional growth through stories, play, and daily check-ins.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-gray-700">
              <li>Empathetic dialogue engine with child-tuned voice</li>
              <li>Soft, safety-minded hardware with responsive sensors</li>
              <li>Optional parent dashboard with privacy-preserving insights</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}