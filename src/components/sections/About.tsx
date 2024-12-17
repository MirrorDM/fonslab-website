import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
              About Fonslab
            </h3>
            <p className="mt-3 text-lg text-gray-600">
            At Fonslab, we are pioneering the future of digital transformation through cutting-edge AI and blockchain solutions. Our passion for innovation drives us to push boundaries and create technology that matters.
            </p>

            <dl className="mt-10 space-y-10">
              {[
                {
                  id: 1,
                  stat: 'Future-Ready',
                  label: 'We embrace emerging technologies to shape tomorrow.',
                },
                {
                  id: 2,
                  stat: 'Partnership',
                  label: 'Your success is our success. We are in this together.',
                },
                {
                  id: 3,
                  stat: 'Excellence',
                  label: 'Deep technical knowledge meets creative problem-solving.',
                },
              ].map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <p className="text-3xl font-bold text-brand-600">{item.stat}</p>
                    <p className="mt-2 text-base text-gray-600">{item.label}</p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0">
            <div className="relative h-[400px] mx-auto rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Digital Innovation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}