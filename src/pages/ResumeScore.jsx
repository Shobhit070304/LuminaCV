import { useState } from "react";
import {
  FiUpload,
  FiLoader,
  FiCheckCircle,
  FiAlertCircle,
  FiEdit2,
  FiDownload,
  FiAward,
  FiBarChart2,
  FiFileText,
} from "react-icons/fi";
import { uploadResume } from "../services/supabase";
import { analyzeResume } from "../services/ai-service";
import { toast } from "react-toastify";

function ResumeScore() {
  const [step, setStep] = useState(1);
  const [resumeFile, setResumeFile] = useState(null);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [analysisTime, setAnalysisTime] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStep(2);

    try {
      const text = await resumeFile.text();
      await uploadResume("user123", resumeFile);

      const res = await analyzeResume(text);
      console.log(res);

      setTimeout(() => {
        setScore(78);
        setFeedback([
          {
            type: "good",
            text: "Strong education section with relevant coursework",
            detail:
              "Your B.Tech in Computer Science is well-presented with key projects highlighted.",
          },
          {
            type: "improvement",
            text: "Add quantifiable achievements",
            detail:
              "Include metrics like 'Improved system performance by 30%' or 'Led team of 5 members'",
          },
          {
            type: "critical",
            text: "Missing keywords from job description",
            detail:
              "Add terms like 'React', 'Node.js', and 'REST APIs' that appear in your target job postings",
          },
          {
            type: "good",
            text: "Professional formatting and structure",
            detail:
              "Clean layout with clear sections makes your resume easy to scan",
          },
        ]);
        setStep(3);
      }, 2000);
    } catch (error) {
      toast.error("Error scoring resume");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 px-4 py-10 sm:px-6 pt-[8%]">
      <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl text-black font-bold tracking-tight">
                Resume Excellence Analyzer
              </h1>
              <p className="text-amber-400 mt-1">
                {step === 1
                  ? "Upload your resume for AI-powered analysis"
                  : step === 2
                  ? "Analyzing your resume..."
                  : "Your personalized optimization report"}
              </p>
            </div>
            <div className="hidden sm:block bg-white/20 p-2 rounded-lg">
              <FiFileText className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {/* Step 1: Upload */}
          {step === 1 && (
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Upload Your Resume (PDF or DOCX)
                </label>
                <div className="border-2 border-dashed border-amber-200 rounded-2xl p-8 text-center hover:bg-amber-50 transition">
                  <FiUpload className="mx-auto text-amber-400 w-10 h-10 mb-4" />
                  <p className="text-sm text-gray-600 mb-2">
                    {resumeFile
                      ? resumeFile.name
                      : "Drag & drop file or click to browse"}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    We support PDF, DOCX, and TXT formats (max 5MB)
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    id="resume-upload"
                    accept=".pdf,.docx,.txt"
                    onChange={(e) => setResumeFile(e.target.files[0])}
                  />
                  <label
                    htmlFor="resume-upload"
                    className="inline-block bg-amber-100 text-amber-700 px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer hover:bg-amber-200 transition"
                  >
                    Select Resume File
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-3.5 px-6 rounded-xl shadow-md transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                disabled={!resumeFile}
              >
                <FiBarChart2 className="w-5 h-5" />
                Analyze My Resume
              </button>
            </form>
          )}

          {/* Step 2: Loading */}
          {step === 2 && (
            <div className="text-center py-16">
              <div className="relative inline-block mb-6">
                <FiLoader className="animate-spin text-amber-500 w-14 h-14" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiAward className="text-amber-300 w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                AI Analysis in Progress
              </h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Evaluating your resume against 12 key career success factors...
              </p>
              <div className="mt-6 w-full bg-gray-100 rounded-full h-2.5 max-w-sm mx-auto">
                <div
                  className="bg-amber-500 h-2.5 rounded-full animate-pulse"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          )}

          {/* Step 3: Results */}
          {step === 3 && (
            <>
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50 text-amber-700 rounded-full px-8 py-4 mb-4 border border-amber-200 shadow-inner">
                  <span className="text-3xl font-bold mr-2">{score}</span>
                  <span className="text-sm font-medium">/100</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {score > 75 ? "Strong Foundation!" : "Good Potential!"}
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto">
                  {score > 75
                    ? "Your resume is already impressive. Let’s refine it further."
                    : "Promising start! Let’s polish the key areas."}
                </p>
              </div>

              {/* Key Findings */}
              <div className="mb-10">
                <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <FiCheckCircle className="text-green-500" />
                  <span>AI Feedback Summary</span>
                </h4>
                <div className="space-y-4">
                  {feedback.map((item, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-xl border transition ${
                        item.type === "good"
                          ? "bg-green-50 border-green-200"
                          : item.type === "critical"
                          ? "bg-red-50 border-red-200"
                          : "bg-amber-50 border-amber-200"
                      }`}
                    >
                      <div className="flex items-start">
                        {item.type === "good" ? (
                          <FiCheckCircle className="text-green-500 mt-0.5 mr-3 w-5 h-5" />
                        ) : (
                          <FiAlertCircle
                            className={`${
                              item.type === "critical"
                                ? "text-red-500"
                                : "text-amber-500"
                            } mt-0.5 mr-3 w-5 h-5`}
                          />
                        )}
                        <div>
                          <h5
                            className={`font-medium ${
                              item.type === "good"
                                ? "text-green-700"
                                : item.type === "critical"
                                ? "text-red-700"
                                : "text-amber-700"
                            }`}
                          >
                            {item.text}
                          </h5>
                          <p className="text-sm text-gray-600 mt-1.5">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-10">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  Your Next Steps
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  {[
                    "Implement the suggestions",
                    "Use keyword optimizer",
                    "Check interview prep guides",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center bg-amber-100 text-amber-700 rounded-full w-5 h-5 text-xs font-bold">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-3.5 px-6 rounded-xl shadow-md transition-all">
                  <FiEdit2 className="w-5 h-5" />
                  Edit Resume
                </button>
                <button className="flex-1 flex items-center justify-center gap-3 border border-amber-600 text-amber-600 hover:bg-amber-50 py-3.5 px-6 rounded-xl font-medium transition shadow-sm">
                  <FiDownload className="w-5 h-5" />
                  Download Report
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeScore;
