"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title =
      "Talent Discovery Insights | Strength-Based Education & Career Guidance";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Strength-based learning and career guidance consultation helping parents understand child development, education pathways, and career alignment."
      );
    }
  }, []);

  const testimonials = [
    {
      name: "Parent of 8 yrs old",
      text: "We finally understood our child’s natural strengths and stopped forcing the wrong learning path."
    },
    {
      name: "Parent of 16 yrs old",
      text: "It gave us clarity on education decisions and reduced a lot of confusion about future careers."
    },
    {
      name: "Parent of 12 yrs old",
      text: "We now focus on strengths instead of weaknesses. Our child is more confident and motivated."
    }
  ];

  const faqs = [
    {
      q: "Is this a psychological or medical test?",
      a: "No. This is a strength-based educational consultation designed to help parents understand learning behavior and development patterns."
    },
    {
      q: "How does this help in career decisions?",
      a: "It helps identify natural tendencies, which can guide subject selection, skill development, and long-term career direction."
    },
    {
      q: "What do parents typically gain?",
      a: "Clarity on strengths, reduced confusion in parenting decisions, and a structured direction for education planning."
    }
  ];

  const handleLeadSubmit = () => {
    if (!email) return;
    alert(`Guide will be sent to: ${email}`);
    setEmail("");
    setShowPopup(false);
  };

  return (
    <div className="bg-white text-gray-900">

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-2">Free Guide</h2>
            <p className="text-gray-600 mb-4">
              Enter your email to receive: Strength-Based Parenting & Career Direction Guide
            </p>
            <input
              className="w-full border p-2 rounded mb-3"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleLeadSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              Download Guide
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="text-sm text-gray-500 mt-2 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build a Stronger Future for Your Child Through Strength-Based Understanding
            </h1>
            <p className="text-gray-600 mb-6">
              Every child has unique strengths that shape how they learn, make decisions, and grow.
              When parents understand these strengths early, they can guide education and career choices
              with clarity instead of confusion.
            </p>
            <div className="flex gap-4">
              <a href="#booking" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                Book Consultation
              </a>
              <button
                onClick={() => setShowPopup(true)}
                className="border px-6 py-3 rounded-lg"
              >
                Free Guide
              </button>
            </div>
          </div>

          <div>
            <img
			  src="/images/child-learning.jpg"
			  alt="child learning"
			  className="rounded-2xl shadow-lg"
			/>
          </div>
        </div>
      </section>

      {/* LIFE + CAREER CONTEXT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Education is not just about marks — It’s About Life Direction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Most children follow the same education path, but not every child is built the same way.
            Some excel through visual learning, some through logic, some through creativity, and some
            through hands-on experience. When this alignment is missing, children often lose confidence,
            motivation, or clarity about their future.
            <br /><br />
            Strength-based understanding helps parents shift from pressure-based parenting to
            clarity-based guidance — focusing on what works best for the child instead of what works for everyone else.
          </p>
		  <div>
            <img
			  src="/images/career-path.jpg"
			  alt="career path"
			  className="rounded-2xl shadow-lg"
			/>
          </div>
        </div>
      </section>

      {/* HOW DMIT STYLE INSIGHT HELPS (NEUTRAL POSITIONING) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            How Strength-Based Insight Consultation Helps
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Learning Awareness</h3>
              <p className="text-gray-600">
                Understand how your child naturally learns and processes information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Education Alignment</h3>
              <p className="text-gray-600">
                Choose subjects, learning methods, and environments that fit your child.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Career Direction</h3>
              <p className="text-gray-600">
                Connect natural strengths with long-term career possibilities and interests.
              </p>
            </div>
          </div>
		  <div>
            <img
			  src="/images/happy-student.jpg"
			  alt="happy student"
			  className="rounded-2xl shadow-lg"
			/>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">What Parents Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow">
                <p className="text-gray-600 mb-4">"{t.text}"</p>
                <p className="font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
		   <div>
            <img
			  src="/images/parent-guidance.jpg"
			  alt="parent guidance"
			  className="rounded-2xl shadow-lg"
			/>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="text-gray-600 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="booking" className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Help Your Child Discover Their Strengths Early</h2>
        <p className="mb-6">Book a consultation to understand learning patterns and career direction clarity.</p>
        <a
          href="https://calendly.com/parimalg/15min"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          Schedule Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p className="font-semibold">Talent Discovery Insights</p>
        <p className="text-gray-400 text-sm mt-2">
          Strength-based educational consultation service
        </p>
      </footer>

    </div>
  );
}
