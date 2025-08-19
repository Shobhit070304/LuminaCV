import {
  FiUpload,
  FiCheckCircle,
  FiBarChart2,
  FiTarget,
  FiAward,
  FiUsers,
  FiHelpCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Home() {
  // Key Data
  const stats = [
    { value: "85%", label: "Interview success rate" },
    { value: "3.5x", label: "More callbacks" },
    { value: "40+", label: "ATS checks" },
  ];

  const features = [
    {
      icon: <FiAward className="w-6 h-6 text-amber-500" />,
      title: "Academic Excellence",
      description: "Transform your education into professional credentials",
      highlight: "Perfect for fresh graduates",
    },
    {
      icon: <FiBarChart2 className="w-6 h-6 text-amber-500" />,
      title: "ATS Optimization",
      description: "Navigate through automated screening systems",
      highlight: "Keyword intelligence",
    },
    {
      icon: <FiTarget className="w-6 h-6 text-amber-500" />,
      title: "Role-Specific Tailoring",
      description: "Custom feedback for your dream job",
      highlight: "Precision matching",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Computer Science Graduate",
      content:
        "ResumeAI transformed my academic projects into compelling professional experience that landed me interviews at top tech firms.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      company: "Hired at Google",
    },
    {
      name: "Priya Patel",
      role: "Marketing Graduate",
      content:
        "From zero responses to multiple offers, ResumeAI helped me present my internship experience in the most impactful way possible.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      company: "Hired at Amazon",
    },
  ];

  const steps = [
    {
      icon: <FiUpload className="w-7 h-7 text-amber-500" />,
      title: "Upload Resume",
      desc: "Start by uploading your current resume—no formatting required.",
    },
    {
      icon: <FiBarChart2 className="w-7 h-7 text-amber-500" />,
      title: "Instant AI Review",
      desc: "Get a comprehensive, in-depth analysis using the latest recruiting metrics.",
    },
    {
      icon: <FiCheckCircle className="w-7 h-7 text-amber-500" />,
      title: "Personalized Plan",
      desc: "Receive actionable feedback and optimization tips for your target roles.",
    },
    {
      icon: <FiAward className="w-7 h-7 text-amber-500" />,
      title: "Stand Out & Succeed",
      desc: "Apply with confidence and track your improved interview rates.",
    },
  ];

  const faqs = [
    {
      q: "Is it really free to analyze my resume?",
      a: "Yes, your first resume analysis is completely free with no hidden charges.",
    },
    {
      q: "How secure is my data?",
      a: "We use enterprise-grade encryption for uploads. Your information is never shared or sold.",
    },
    {
      q: "What makes ResumeAI different from other tools?",
      a: "We specialize in helping students and early-career professionals—our AI understands academic and project work, not just professional jobs.",
    },
    {
      q: "Can I get human feedback too?",
      a: "Yes! Premium plans include tailored reviews and unlimited consultations with our career experts.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50/80 to-orange-50/90 overflow-hidden">
        <div className="absolute inset-0">
          {/* Soft grain or noise pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/5f6bc60e665f54545a1e52a5/615d3c5b255e6a0a9c0b4d6e_noise-pattern.png')] opacity-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-orange-50/90 to-white/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/80 text-amber-700 shadow-sm mb-8 border border-amber-100/80">
                <span className="w-2.5 h-2.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></span>
                Trusted by 10,000+ university graduates
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  Elevate Your
                </span>{" "}
                Career Prospects
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl leading-snug">
                AI-powered resume optimization crafted for recent graduates and
                early-career professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/resume-score"
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl font-semibold flex items-center gap-3 shadow-md hover:shadow-xl transition"
                >
                  <FiUpload className="w-5 h-5" />
                  <span>Analyze My Resume</span>
                </Link>
                <button className="px-8 py-4 border border-amber-200 text-amber-700 hover:border-amber-400 hover:text-orange-600 rounded-xl font-semibold bg-white/80 backdrop-blur transition-colors hover:bg-amber-50 shadow-md">
                  See Platform Demo
                </button>
              </div>
            </div>
            {/* Right Column (Dashboard Visual) */}
            <div className="relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-100/50 bg-white/50 backdrop-blur-lg max-w-md w-full mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Resume analysis dashboard"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle highlight overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              {/* Glow effect behind card */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-300/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -top-5 -right-8 w-24 h-24 bg-orange-200/20 rounded-full blur-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className="px-8 py-6 text-center">
                <p className="text-5xl font-bold text-amber-600 mb-3 font-serif">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-200/50">
              Precision Engineering for Your Career
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Academic Excellence,{" "}
              <span className="text-amber-600">Professional Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We transform your academic journey into compelling professional
              narratives that resonate with employers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-amber-200/50 transition-all hover:shadow-xl overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-100/10 rounded-full group-hover:bg-amber-100/20 transition-all"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors border border-amber-100/30">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <span className="inline-block text-sm text-amber-600 font-medium">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - New */}
      <section className="py-28 bg-gradient-to-b from-white/95 to-amber-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-amber-200/50">
              Seamless Onboarding
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In just four simple steps, unlock your potential and land your
              dream interview.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white rounded-2xl shadow-xl px-7 py-12 relative border border-gray-100/70"
              >
                <span className="mb-4">{s.icon}</span>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {s.title}
                </h4>
                <p className="text-gray-600 text-center">{s.desc}</p>
                <span className="absolute top-6 left-6 text-xs text-amber-400 font-bold opacity-70">
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-200/50">
              Our Methodology
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Sophisticated Analysis,{" "}
              <span className="text-amber-600">Simple Process</span>
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Academic Assessment",
                "Industry Alignment",
                "Strategic Optimization",
              ].map((step, index) => (
                <div key={index} className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg border-2 border-white">
                    {index + 1}
                  </div>
                  <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100/70 hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                      {step}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step === "Academic Assessment" &&
                        "We evaluate your education and projects for professional potential"}
                      {step === "Industry Alignment" &&
                        "Match your skills with current industry demands"}
                      {step === "Strategic Optimization" &&
                        "Enhance your resume with data-driven improvements"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-200/50">
              Graduate Success
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              From <span className="text-amber-600">Classroom</span> to{" "}
              <span className="text-amber-600">Boardroom</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100/70 hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-amber-100/10 rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-5 border-2 border-amber-100/50"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-amber-600">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - New */}
      <section className="py-24 bg-white border-t border-amber-100/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-5 border border-amber-200/50">
              Need Help?
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Answers to your most common concerns—transparent and to the point.
            </p>
          </div>
          <dl className="space-y-8">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="bg-amber-50/30 rounded-xl p-6 border border-amber-100/60 shadow-sm"
              >
                <dt className="flex items-center font-semibold text-gray-800 text-lg mb-2">
                  <FiHelpCircle className="w-5 h-5 mr-2 text-amber-500" />
                  {item.q}
                </dt>
                <dd className="text-gray-600 pl-7">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

    </div>
  );
}

export default Home;
