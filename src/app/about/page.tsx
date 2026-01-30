export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Why We Built Pay Homage
          </h1>
          <p className="text-2xl text-gray-600">
            A Bay Area Initiative to Strengthen the Next Generation
          </p>
        </div>
      </section>

      {/* Story Block */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Wett Entertainment came up in a culture where we all borrow game — from the 
              legends, the mentors, and the scenes that raised us. Pay Homage is our answer 
              to a simple question: what if giving back wasn&apos;t optional — it was built into 
              the model?
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>This is specifically a Bay Area program.</strong> The innovation, creativity, 
              and cultural movements that have emerged from Oakland, San Francisco, and the broader 
              Bay Area have shaped industries worldwide. Now it&apos;s time to ensure that legacy 
              continues by investing directly in the next generation of Bay Area creators.
            </p>
          </div>
        </div>
      </section>

      {/* Bay Area Legacy */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Bay Area Legacy</h2>
          
          <div className="space-y-12">
            {/* Music */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Music & Culture</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The Bay Area revolutionized independent music. Artists like Too $hort, Mac Dre, 
                and E-40 pioneered the independent distribution model, proving artists could own 
                their masters and build empires without major labels. The <strong>Hyphy Movement</strong>—a 
                high-energy hip-hop subculture characterized by &ldquo;go dumb&rdquo; dancing and sideshows—gave 
                the world a new sound and energy, led by icons like Mac Dre, E-40, and Keak da Sneak.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The <strong>Summer of Love</strong> in Haight-Ashbury birthed a global counterculture 
                movement with bands like The Grateful Dead, Jefferson Airplane, and Janis Joplin. The 
                Bay Area was also the epicenter for <strong>Thrash Metal</strong>, launching the &ldquo;Big Four&rdquo; 
                including Metallica and Megadeth. <strong>Turntablism</strong> became a fine art here, with 
                groups like Invisibl Skratch Picklz turning DJing into a lead instrument.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The <strong>&ldquo;Oakland Sound&rdquo;</strong>—a soulful R&B movement championed by Dwayne Wiggins 
                and Tony! Toni! Toné!—blended traditional soul with modern production. Dwayne Wiggins, 
                known as the &ldquo;Godfather of the Oakland Sound,&rdquo; mentored some of the biggest names in music 
                history, including <strong>Destiny&apos;s Child</strong>, <strong>Keyshia Cole</strong>, <strong>Alicia Keys</strong>, 
                and <strong>Beyoncé</strong>, working with them during their formative years in his Oakland studio.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond the music itself, the Bay gave the world its lingo, its swagger, and a 
                free, open creative spirit that&apos;s been duplicated but never replicated. From 
                the jazz clubs of the Fillmore to funk and blues that influenced genres globally, 
                the Bay Area&apos;s contributions to Black music and culture are immeasurable.
              </p>
            </div>

            {/* Tech */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Technology & Innovation</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Silicon Valley, born in the Bay Area, introduced the world to transformative technologies. 
                <strong>Integrated circuits (microchips)</strong> were developed by Fairchild Semiconductor in 
                Mountain View, providing the foundation for all modern electronics. The <strong>Apple I and 
                Apple II</strong> were developed in Cupertino, sparking the home computing revolution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Douglas Engelbart debuted the <strong>computer mouse and graphical user interface (GUI)</strong> at 
                his legendary 1968 demo in San Francisco, introducing the concept of &ldquo;windows&rdquo; that would define 
                personal computing. <strong>Google</strong> was founded in a Menlo Park garage, revolutionizing how 
                the world accesses information.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The region&apos;s spirit of innovation also gave us the <strong>cable car</strong> (1873), the 
                world&apos;s first <strong>jukebox</strong> (1889 at the Palais Royal Saloon), and even everyday 
                items like the <strong>Popsicle</strong> (invented by 11-year-old Frank Epperson in Oakland in 1905). 
                Yet many of the creators and communities who contributed to this legacy have been displaced. 
                Pay Homage ensures Bay Area innovators can continue to thrive here.
              </p>
            </div>

            {/* Film & Arts */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Film, Dance & Performance</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Bay Area directors and actors have broken records and barriers in film and television. 
                Directors like <strong>George Lucas</strong> (Modesto/Marin), <strong>Francis Ford Coppola</strong> 
                (SF-based Zoetrope Studios), <strong>Ryan Coogler</strong> (Oakland), and <strong>Kathryn Bigelow</strong> 
                (San Carlos) have shaped modern cinema.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Actors and actresses including <strong>Tom Hanks</strong> (Concord), <strong>Zendaya</strong> (Oakland), 
                <strong>Bruce Lee</strong> (San Francisco), <strong>Clint Eastwood</strong> (SF), <strong>Mahershala Ali</strong> 
                (Oakland), and <strong>Danny Glover</strong> (SF) have become household names globally.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Oakland&apos;s <strong>Turf Dancing</strong> movement influenced dance culture, sports choreography, 
                and entertainment worldwide. From groundbreaking filmmakers to stage performers who&apos;ve graced 
                Broadway and beyond, the Bay Area continues to produce world-class talent across all performance 
                disciplines.
              </p>
            </div>

            {/* Community & Activism */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Community Building & Social Movement</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The <strong>Black Panther Party</strong>, founded in Oakland in 1966, revolutionized community 
                organizing with their free breakfast programs, health clinics, and emphasis on self-determination. 
                Their model of community care and empowerment influenced social movements globally and 
                demonstrated what&apos;s possible when communities organize for themselves.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Bay Area&apos;s legacy of activism, from the Civil Rights era to contemporary movements 
                for justice and equity, has always centered community power and grassroots innovation. 
                Organizations like <strong>Youth Radio</strong> pioneered community-based digital media training, 
                giving urban youth the tools to own their narrative and technology. Pay Homage continues this 
                tradition by treating community investment as infrastructure, not charity.
              </p>
            </div>

            {/* Digital Innovation & Community */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Digital Innovation & Independent Distribution</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Bay Area continues to lead in independent music distribution and digital innovation. 
                Platforms supporting over 1 million independent artists globally have roots in the region&apos;s 
                commitment to artist ownership and creative independence. This spirit of empowering creators 
                to control their own work\u2014from music to media to technology\u2014remains central to the 
                Bay Area&apos;s identity and influence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Every industry and genre we&apos;ve mentioned has made a profound impact on their 
            respective communities and the world at large. The Bay Area&apos;s contributions—from 
            music to tech, from dance to social movements—have been studied, replicated, and 
            commercialized globally.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Now, those who&apos;ve benefited from Bay Area innovation have an opportunity to pay 
            homage by helping the next generation of creators, inventors, artists, and community 
            builders. This isn&apos;t about looking backward—it&apos;s about ensuring the Bay Area 
            remains a hub of creativity and innovation for decades to come.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            One of our long-term goals is to help rebuild Black Broadway in Oakland, restoring 
            the cultural vitality of the Fillmore and 7th Street corridors that were decimated 
            by urban renewal. The nation needs Oakland and the Bay Area to be strong again—not 
            just economically, but culturally and creatively.
          </p>
          <p className="text-xl font-bold text-white leading-relaxed">
            Pay Homage treats gratitude like infrastructure. Every pledge is a small, steady 
            signal that we&apos;re serious about lifting the next wave and preserving the cultural 
            ecosystem that made so much possible.
          </p>
        </div>
      </section>

      {/* Team Block */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Who We Are</h2>
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              Pay Homage is created and operated by <strong>Wett Entertainment LLC</strong>, 
              a Bay Area entertainment and technology company committed to building sustainable 
              infrastructure for the region&apos;s creative ecosystem. We believe in action over 
              talk, transparency over promises, and community over profit.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Bay Area First</h3>
              <p className="text-gray-600">
                This platform exists to strengthen the Bay Area&apos;s creative community and 
                ensure our cultural legacy continues.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-gray-600">
                Every dollar is tracked, every grant is public, every impact is reported. 
                Community accountability is built in.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Action Over Talk</h3>
              <p className="text-gray-600">
                We&apos;re here to ship, not to promise. Real funds, real creators, real impact 
                in real Bay Area communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
