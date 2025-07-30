import { useState } from "react";
import {
  FiUpload,
  FiBriefcase,
  FiFileText,
  FiClock,
  FiDollarSign,
  FiLoader,
  FiCheckCircle,
  FiAlertCircle,
  FiDownload,
} from "react-icons/fi";

function JobEligibilityChecker() {
  const [step, setStep] = useState(1);
  const [resumeFile, setResumeFile] = useState(null);
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    minExperience: "",
    salaryRange: "",
    skills: "",
  });
  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile) return;

    setStep(2);

    setTimeout(() => {
      setResults({
        matchPercentage: 82,
        strengths: [
          "Education matches required qualifications",
          "3+ years of relevant experience",
          "Contains 12/15 key skills",
        ],
        improvements: [
          "Missing certification mentioned in requirements",
          "Could highlight leadership experience more prominently",
          "Only 4/8 keywords from job description found",
        ],
        salaryMatch: "Within range",
        experienceMatch: "Meets requirements",
        overallVerdict: "Strong candidate - recommended for interview",
      });
      setStep(3);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 p-6 sm:p-10">
      <div className="max-w-5xl mx-auto rounded-3xl p-2 sm:p-4 md:py-[6%]">
        {/* Header */}
        <div className="p-6 sm:p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl text-black font-extrabold tracking-tight">
                Job Eligibility Analyzer
              </h1>
              <p className="text-amber-400 mt-2">
                {step === 1
                  ? "See how well your resume aligns with job requirements"
                  : step === 2
                  ? "We’re scanning and comparing your resume..."
                  : "Here’s your personalized match report"}
              </p>
            </div>
            <div className="hidden sm:block bg-white/20 p-3 rounded-full shadow">
              <FiBriefcase className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-10">
          {/* Step 1: Form */}
          {step === 1 && (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
                      placeholder="e.g. Frontend Developer"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Experience Required
                    </label>
                    <div className="relative">
                      <select
                        name="minExperience"
                        value={formData.minExperience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm appearance-none"
                        required
                      >
                        <option value="">Select years</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                      <FiClock className="absolute right-3 top-3 text-amber-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Required Skills
                    </label>
                    <textarea
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
                      rows="3"
                      placeholder="e.g. React, JavaScript, Tailwind"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Job Description
                    </label>
                    <textarea
                      name="jobDescription"
                      value={formData.jobDescription}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
                      rows="6"
                      placeholder="Paste the complete job description here..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Salary Range (optional)
                    </label>
                    <div className="relative">
                      <select
                        name="salaryRange"
                        value={formData.salaryRange}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm appearance-none"
                      >
                        <option value="">Select range</option>
                        <option value="0-5LPA">0-5 LPA</option>
                        <option value="5-10LPA">5-10 LPA</option>
                        <option value="10-15LPA">10-15 LPA</option>
                        <option value="15+LPA">15+ LPA</option>
                      </select>
                      <span className="absolute right-3 top-3 text-amber-400">
                        ₹
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-gray-700 font-medium">
                  Upload Resume
                </label>
                <div className="border-2 border-dashed border-amber-200 rounded-2xl p-6 text-center hover:bg-amber-50 transition-colors relative">
                  <FiUpload className="mx-auto text-amber-400 w-10 h-10 mb-2" />
                  <p className="text-sm text-gray-600">
                    {resumeFile
                      ? resumeFile.name
                      : "Drag & drop or click to upload"}
                  </p>
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept=".pdf,.docx"
                    onChange={(e) => setResumeFile(e.target.files[0])}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                disabled={
                  !resumeFile ||
                  !formData.jobTitle ||
                  !formData.jobDescription ||
                  !formData.minExperience
                }
              >
                <FiFileText className="w-5 h-5" />
                Analyze Eligibility
              </button>
            </form>
          )}

          {/* Step 2 & 3 */}
          {step === 2 && (
            <div className="text-center py-20 animate-pulse">
              <FiLoader className="animate-spin text-amber-500 w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-800">
                Analyzing your resume...
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Comparing against <strong>{formData.jobTitle}</strong>{" "}
                requirements.
              </p>
            </div>
          )}

          {/* Step 3 Results */}
          {step === 3 && results && (
            <div className="space-y-10">
              {/* Match Score */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-amber-100 text-amber-700 px-8 py-5 rounded-2xl border border-amber-300 shadow-inner">
                  <span className="text-4xl font-extrabold mr-2">
                    {results.matchPercentage}%
                  </span>
                  <span className="text-sm">Match Score</span>
                </div>
                <h3 className="text-2xl font-bold mt-4 text-gray-800">
                  {results.matchPercentage > 75
                    ? "Strong Match!"
                    : results.matchPercentage > 50
                    ? "Good Match"
                    : "Needs Work"}
                </h3>
                <p className="text-sm text-gray-600">
                  {results.overallVerdict}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <FiCheckCircle />
                    Strengths
                  </h4>
                  <ul className="text-sm space-y-2 text-gray-700">
                    {results.strengths.map((item, i) => (
                      <li key={i}>✔ {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-amber-700 mb-3 flex items-center gap-2">
                    <FiAlertCircle />
                    Improvements
                  </h4>
                  <ul className="text-sm space-y-2 text-gray-700">
                    {results.improvements.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 text-center">
                <div className="p-4 border rounded-xl bg-white">
                  <p className="text-sm text-gray-500 mb-1">Experience</p>
                  <p className="text-lg font-medium text-amber-600">
                    {results.experienceMatch}
                  </p>
                </div>
                <div className="p-4 border rounded-xl bg-white">
                  <p className="text-sm text-gray-500 mb-1">Salary Match</p>
                  <p className="text-lg font-medium text-amber-600">
                    {results.salaryMatch}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-3 rounded-lg shadow-md flex items-center justify-center gap-2">
                  <FiDownload className="w-5 h-5" />
                  Download Report
                </button>
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-amber-500 text-amber-600 hover:bg-amber-50 py-3 rounded-lg font-medium shadow-sm"
                >
                  Analyze Another Job
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobEligibilityChecker;
