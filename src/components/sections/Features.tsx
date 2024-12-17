import { Rocket, Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    name: 'Innovation First',
    description: 'Stay ahead with cutting-edge AI and blockchain solutions tailored for your growth.',
    icon: Rocket,
  },
  {
    name: 'Security Focused',
    description: 'Enterprise-grade protection for your digital assets and data.',
    icon: Shield,
  },
  {
    name: 'High Performance',
    description: 'Optimized solutions delivering speed and reliability at scale.',
    icon: Zap,
  },
  {
    name: 'Expert Team',
    description: 'Dedicated specialists committed to your project\'s success.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Better Solutions for Your Business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            We provide comprehensive solutions to help your business grow and succeed in the digital age.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}