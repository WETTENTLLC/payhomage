import Button from '@/components/Button';

export default function HowItWorks() {
  return (
    <div className="min-h-screen pt-24">
      {/* Top Block */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How Pay Homage Works
          </h1>
          <p className="text-2xl text-gray-600">
            Simple pledges in. Transparent grants out.
          </p>
        </div>
      </section>

      {/* Creator Flow */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Creator Flow</h2>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Create your account</h3>
                  <p className="text-lg text-gray-600">
                    Sign up with email and connect your brand or project.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Set your pledge</h3>
                  <p className="text-lg text-gray-600">
                    Pick a percentage (for example 1–5%) of your quarterly profit or set a flat recurring amount.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Choose your Homage Funds</h3>
                  <p className="text-lg text-gray-600">
                    Allocate to Music, Film, and Tech funds, or split across all three.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Track your impact</h3>
                  <p className="text-lg text-gray-600">
                    See how much you&apos;ve contributed and which projects were funded from your pools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Flow */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Grant Flow</h2>
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-xl text-gray-700 leading-relaxed">
              Quarterly, the Pay Homage Creator Fund reviews applications from artists, 
              film workers, and developers and awards grants for concrete projects — from 
              EPs and short films to tools and open-source builds.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#pledge" variant="primary">
              Start Your Pledge
            </Button>
            <Button href="/creator-fund" variant="secondary">
              Learn about the Creator Fund
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
