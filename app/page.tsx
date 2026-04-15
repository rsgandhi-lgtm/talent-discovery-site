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
              Discover 10 signs that reveal your child’s natural learning style and strengths.
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
              Download Free Guide
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Is Your Child Underperforming — Or Just Misunderstood?
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
              Most children are not lacking ability — they are simply not learning in a way that matches their natural strengths.
              When you understand how your child thinks and learns, everything changes — from confidence to career direction.
            </p>

            <div className="bg-blue-50 p-4 rounded-xl mb-6 text-sm text-gray-700">
              ✔ 15+ years experience<br/>
              ✔ 5000+ children & adults guided<br/>
              ✔ Practical, parent-focused recommendations
            </div>

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

      {/* PROBLEM SECTION */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            If You’re Feeling Confused About Your Child’s Future — You’re Not Alone
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>• "My child is smart but not performing well"</p>
            <p>• "They lose focus or get frustrated easily"</p>
            <p>• "I don’t know which path or career suits them"</p>
            <p className="font-semibold text-gray-800 mt-4">
              The issue is not ability — it’s lack of clarity.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Education Should Be Aligned to the Child — Not the System
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Every child learns differently — some visually, some analytically, some creatively.
            When learning style and education path are misaligned, children lose confidence and direction.
            <br /><br />
            Strength-based understanding helps you guide your child with clarity instead of pressure.
          </p>
          <img
            src="/images/career-path.jpg"
            alt="career path"
            className="rounded-2xl shadow-lg mt-8"
          />
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            How This Consultation Helps You
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Understand Learning Style</h3>
              <p className="text-gray-600">
                Know how your child naturally absorbs and processes information.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Make Better Education Decisions</h3>
              <p className="text-gray-600">
                Align subjects, activities, and learning methods correctly.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Get Career Direction Clarity</h3>
              <p className="text-gray-600">
                Connect strengths with long-term career possibilities.
              </p>
            </div>
          </div>

          <img
            src="/images/happy-student.jpg"
            alt="happy student"
            className="rounded-2xl shadow-lg mt-10"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About us</h2>

          <div className="bg-white p-8 rounded-2xl shadow text-gray-700 leading-relaxed">
            <p className="mb-4">
              With over <span className="font-semibold">15 years of experience</span> and more than <span className="font-semibold">5000+ children and parents guided</span>, this consultation approach is built on practical insights gained from working closely with families.
            </p>

            <p className="mb-4">
              Having worked extensively with parents, children, teens, the approach understands the unique challenges parents face — balancing academics, extracurriculars, and long-term career expectations, especially in a competitive environment.
            </p>

            <p className="mb-4">
              Now bringing this experience to families in the U.S., especially in the DFW area, the focus is on helping parents move from confusion and pressure to clarity and confidence in guiding their child.
            </p>

            <p>
              The goal is simple: <span className="font-semibold">help every child grow in a way that aligns with their natural strengths</span>, while giving parents a clear and structured direction.
            </p>
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

          <img
            src="/images/parent-guidance.jpg"
            alt="parent guidance"
            className="rounded-2xl shadow-lg mt-10"
          />
        </div>
      </section>

      {/* CTA */}
      <section id="booking" className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Give Your Child the Right Direction Early
        </h2>
        <p className="mb-6">
          Book a consultation and gain clarity on learning, education, and career direction.
        </p>
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
