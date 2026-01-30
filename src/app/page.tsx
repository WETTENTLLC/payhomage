import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Turn Your Wins<br />Into Homage.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Pay a small slice of your quarterly earnings forward to the artists, filmmakers, 
            and developers who built the path you&apos;re walking.
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            A Bay Area initiative supporting the next generation of creators in the region 
            that gave the world independent music, Silicon Valley, and countless cultural movements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#pledge" variant="primary">
              Start Your Pledge
            </Button>
            <Button href="/creator-fund" variant="secondary">
              Explore the Creator Fund
            </Button>
          </div>
        </div>
      </section>

      {/* Built for Music, Film, and Tech */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for Music, Film, and Tech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Pay Homage is a Bay Area platform where working creatives commit a percentage 
              of their earnings to fund the next wave of music, film, and tech talent.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Your pledges don&apos;t go to one person—they support community funds that award 
              grants to emerging creators across the Bay Area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold mb-4">Music</h3>
              <p className="text-gray-600 mb-4">
                Fund studio time, mixing, and releases for the next generation.
              </p>
              <p className="text-sm text-gray-500">
                The Bay gave the world Too $hort, Mac Dre, E-40, the Hyphy Movement, and 
                independent music distribution. Now help the next wave.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-4">Film</h3>
              <p className="text-gray-600 mb-4">
                Back short films, pilots, and post-production.
              </p>
              <p className="text-sm text-gray-500">
                From George Lucas to Ryan Coogler, Bay Area directors changed cinema. 
                Support the filmmakers coming up now.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4">Tech</h3>
              <p className="text-gray-600 mb-4">
                Support open-source projects and emerging developers.
              </p>
              <p className="text-sm text-gray-500">
                Silicon Valley, the mouse, the GUI, personal computing—all Bay Area. 
                Help the next generation of innovators thrive here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bay Area Legacy */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Bay Area Built Your Blueprint
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From music to tech, film to social movements—the innovations you use and the culture 
              you love trace back to the Bay Area. Now it&apos;s time to pay it forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="font-bold mb-2">Independent Music</h3>
              <p className="text-sm text-gray-300">
                Too $hort, Mac Dre, E-40 proved artists could own their masters and build empires independently.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="font-bold mb-2">The Computer Mouse</h3>
              <p className="text-sm text-gray-300">
                Douglas Engelbart&apos;s 1968 SF demo introduced the mouse and GUI—changing computing forever.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="font-bold mb-2">Hyphy & Turf Dancing</h3>
              <p className="text-sm text-gray-300">
                Oakland gave the world &quot;go dumb&quot; culture and Turf Dancing—influencing sports and entertainment globally.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="font-bold mb-2">The Mentors</h3>
              <p className="text-sm text-gray-300">
                Dwayne Wiggins mentored Destiny&apos;s Child, Alicia Keys, and Beyoncé in Oakland studios.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="font-bold mb-2">Silicon Valley</h3>
              <p className="text-sm text-gray-300">
                Apple, Google, microchips—the foundation of modern tech was built in Bay Area garages.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="font-bold mb-2">Community Power</h3>
              <p className="text-sm text-gray-300">
                The Black Panther Party&apos;s free breakfast programs and community organizing model influenced movements worldwide.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="font-bold mb-2">Cinema Legends</h3>
              <p className="text-sm text-gray-300">
                George Lucas, Ryan Coogler, Francis Ford Coppola—Bay Area directors shaped modern film.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="font-bold mb-2">Cultural Movements</h3>
              <p className="text-sm text-gray-300">
                The Summer of Love, thrash metal, turntablism—Bay Area culture echoes globally.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">
              These contributions didn&apos;t come from one person. They came from a <strong>community</strong>. 
              Your pledge supports that same community ecosystem.
            </p>
            <Button href="/about" variant="secondary">
              See the Full Legacy
            </Button>
          </div>
        </div>
      </section>

      {/* How Paying Homage Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How Paying Homage Works
          </h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Pledge</h3>
                <p className="text-lg text-gray-600">
                  Choose a small percentage of your quarterly earnings or a fixed amount.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Assign</h3>
                <p className="text-lg text-gray-600">
                  Aim your pledge at Music, Film, or Tech &apos;Homage Funds&apos; that match your story.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Impact</h3>
                <p className="text-lg text-gray-600">
                  Each cycle, our Creator Fund pays out grants to current and up-and-coming creators 
                  — with public impact reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Creators Join */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Creators Join
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-2xl">✓</div>
              <p className="text-xl text-gray-700">
                Transform success into opportunity for an entire community, not just one person.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">✓</div>
              <p className="text-xl text-gray-700">
                Show your community you&apos;re giving back in a real, trackable way.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">✓</div>
              <p className="text-xl text-gray-700">
                Support Bay Area creators who are keeping the region&apos;s cultural legacy alive.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">✓</div>
              <p className="text-xl text-gray-700">
                Get a shareable Homage Badge for your site, socials, credits, and README files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Wett Entertainment */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by Wett Entertainment
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            Pay Homage is created and operated by Wett Entertainment LLC, a Bay Area 
            entertainment and technology company. We&apos;re building a culture where giving 
            back is built in, not bolted on.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our long-term goal: help rebuild Black Broadway in Oakland and ensure the nation&apos;s 
            cultural engine stays strong. This isn&apos;t charity—it&apos;s infrastructure.
          </p>
          <Button href="/about" variant="primary">
            Read Our Story
          </Button>
        </div>
      </section>
    </div>
  );
}

