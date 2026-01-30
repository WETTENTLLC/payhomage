export default function FAQ() {
  const faqs = [
    {
      question: "Is this a charity?",
      answer: "No. Pay Homage is a program of Wett Entertainment LLC, a for-profit company. Grants are discretionary business/community investments, not tax-deductible donations."
    },
    {
      question: "Where does the money go?",
      answer: "Creator pledges flow into Music, Film, and Tech funds, and a defined portion of those funds is paid out as grants each cycle. We publish stats and selected stories each round."
    },
    {
      question: "Can I choose specific people to receive grants?",
      answer: "You support categories (Music/Film/Tech). Individual grantees are chosen through an application and review process to keep it fair and transparent."
    },
    {
      question: "How often are grants awarded?",
      answer: "We run grant cycles quarterly. Applications are reviewed by our panel, and winners are announced publicly with detailed impact reports."
    },
    {
      question: "What percentage should I pledge?",
      answer: "Most creators pledge 1-5% of their quarterly earnings. You can also set a flat recurring amount that fits your budget and values."
    },
    {
      question: "How do I track my impact?",
      answer: "Your dashboard shows your total contributions, which funds you've supported, and highlights from projects that received grants from your pools."
    },
    {
      question: "Can I apply for a grant if I'm also pledging?",
      answer: "Yes! Pledging and applying for grants are independent. We encourage creators at all stages to participate in both sides of the platform."
    },
    {
      question: "What if I need to pause or cancel my pledge?",
      answer: "You have full control over your pledge and can adjust or pause it anytime from your dashboard. We understand creative income fluctuates."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about Pay Homage
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">{faq.question}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Reach out to our team and we&apos;ll get back to you within 24 hours.
          </p>
          <a href="mailto:hello@payhomage.com" className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
