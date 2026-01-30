import Button from '@/components/Button';

export default function CreatorFund() {
  return (
    <div className="min-h-screen pt-24">
      {/* Top Block */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Pay Homage Creator Fund
          </h1>
          <p className="text-2xl text-gray-600">
            Grants from the community, for the community.
          </p>
        </div>
      </section>

      {/* What We Fund */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What We Fund</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold mb-4">Music</h3>
              <p className="text-gray-600">
                Recording, mixing/mastering, visuals, marketing, touring prep.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-4">Film</h3>
              <p className="text-gray-600">
                Development, production, post, festival fees, equipment rental.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4">Tech</h3>
              <p className="text-gray-600">
                Tooling, hosting, design support, hardware, learning resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Types */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Grant Types</h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-3">Micro-Grants</h3>
              <p className="text-lg text-gray-600 mb-3">
                <strong>$500–$2,000</strong> for focused needs
              </p>
              <p className="text-gray-600">
                Studio time, plugins, festival submissions, hosting, etc.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-3">Project Grants</h3>
              <p className="text-lg text-gray-600 mb-3">
                <strong>$5,000–$10,000</strong> for complete projects
              </p>
              <p className="text-gray-600">
                EPs, short films, or software releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Eligibility */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Basic Eligibility</h2>

          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex gap-4">
                <span className="text-2xl">✓</span>
                <span>You&apos;re an artist, filmmaker, or developer actively working on a project.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">✓</span>
                <span>18+ and able to receive funds in the U.S. (global expansion coming later).</span>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">✓</span>
                <span>You agree to credit &apos;Pay Homage / Wett Entertainment&apos; in your final project (album notes, film credits, README, etc.).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">How to Apply</h2>

          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 mb-12">
            <div className="space-y-6 text-lg text-gray-700">
              <p className="flex gap-4">
                <span className="font-bold">1.</span>
                <span>Submit your project, budget, and links to your work.</span>
              </p>
              <p className="flex gap-4">
                <span className="font-bold">2.</span>
                <span>Our panel reviews based on artistic quality, impact, need, and fit with the Pay Homage mission.</span>
              </p>
              <p className="flex gap-4">
                <span className="font-bold">3.</span>
                <span>Winners are announced publicly, and we share select projects on our channels.</span>
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button href="#apply" variant="primary">
              Apply for a Grant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
