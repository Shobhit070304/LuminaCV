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
  FiX,
} from "react-icons/fi";
import { analyzeResume } from "../services/ai-service";
import { toast } from "react-toastify";
import { supabase } from "../services/supabase";

function ResumeScore() {
  const [step, setStep] = useState(1);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeURL, setResumeURL] = useState(null);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [breakdown, setBreakdown] = useState(null);
  const [isResumeVisible, setIsResumeVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      toast.error("Please upload a resume first.");
      return;
    }

    setStep(2);

    try {
      // 1. Analyze text content from the file
      const text = await resumeFile.text();
      const result = await analyzeResume(text);
      console.log("Analysis result:", result);
      setScore(result.score);
      setFeedback(result.feedback);
      setBreakdown(result.breakdown);

      // 2. Upload file to Supabase
      const filePath = `resumes/${Date.now()}-${resumeFile.name}`;
      console.log("File path", filePath);

      const { data, error } = await supabase.storage
        .from("resumes")
        .upload(filePath, resumeFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.error("Upload error:", error.message);
        toast.error("Upload failed.");
        return;
      }

      // 3. Get public download URL
      setStep(3);
      const { data: urlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(filePath);

      setResumeURL(urlData.publicUrl);
      toast.success("Resume uploaded & analyzed!");
    } catch (error) {
      console.error("Resume analysis error:", error);
      toast.error("Error analyzing resume.");
      setStep(1);
    }
  };

  // Function to determine feedback type based on content
  const getFeedbackType = (text) => {
    if (text.includes("Excellent") || text.includes("highly relevant"))
      return "good";
    if (text.includes("consider") || text.includes("ensure"))
      return "improvement";
    return "critical";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 px-4 py-10 sm:px-6 pt-[10%]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl text-black font-bold tracking-tight mb-2">
            Resume Excellence Analyzer
          </h1>
          <p className="text-amber-600">
            {step === 1
              ? "Upload your resume for AI-powered analysis"
              : step === 2
              ? "Analyzing your resume..."
              : "Your personalized optimization report"}
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Resume Preview Section - Only visible in step 3 */}
          {step === 3 && isResumeVisible && (
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-lg p-4 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Resume Preview
                  </h2>
                  <button
                    onClick={() => setIsResumeVisible(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-[70vh] flex items-center justify-center">
                  <div className="text-center p-6">
                    <FiFileText className="mx-auto text-amber-400 w-12 h-12 mb-4" />
                    <p className="text-gray-600">
                      Resume preview would appear here
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      PDF/DOCX viewer integration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analysis Section */}
          <div
            className={`${
              step === 3 && isResumeVisible ? "lg:w-1/2" : "w-full"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
                      Evaluating your resume against 12 key career success
                      factors...
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
                    {!isResumeVisible && (
                      <button
                        onClick={() => setIsResumeVisible(true)}
                        className="mb-4 flex items-center text-amber-600 hover:text-amber-800 text-sm font-medium"
                      >
                        <FiFileText className="mr-2" /> Show Resume Preview
                      </button>
                    )}

                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50 text-amber-700 rounded-full px-8 py-4 mb-4 border border-amber-200 shadow-inner">
                        <span className="text-3xl font-bold mr-2">{score}</span>
                        <span className="text-sm font-medium">/100</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {score > 75 ? "Strong Foundation!" : "Good Potential!"}
                      </h3>
                      <p className="text-gray-600">
                        {score > 75
                          ? "Your resume is already impressive. Let's refine it further."
                          : "Promising start! Let's polish the key areas."}
                      </p>
                    </div>

                    {/* Score Breakdown */}
                    {breakdown && (
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">
                          Score Breakdown
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(breakdown).map(
                            ([category, value]) => (
                              <div
                                key={category}
                                className="bg-amber-50 p-4 rounded-xl"
                              >
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm font-medium text-gray-700 capitalize">
                                    {category}
                                  </span>
                                  <span className="text-sm font-bold text-amber-700">
                                    {value}/20
                                  </span>
                                </div>
                                <div className="w-full bg-amber-100 rounded-full h-2">
                                  <div
                                    className="bg-amber-500 h-2 rounded-full"
                                    style={{ width: `${(value / 20) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* Key Findings */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                        <FiCheckCircle className="text-green-500" />
                        <span>AI Feedback Summary</span>
                      </h4>
                      <div className="space-y-4">
                        {feedback.map((item, index) => {
                          const type = getFeedbackType(item);
                          return (
                            <div
                              key={index}
                              className={`p-4 rounded-xl border transition ${
                                type === "good"
                                  ? "bg-green-50 border-green-200"
                                  : type === "improvement"
                                  ? "bg-amber-50 border-amber-200"
                                  : "bg-red-50 border-red-200"
                              }`}
                            >
                              <div className="flex items-start">
                                {type === "good" ? (
                                  <FiCheckCircle className="text-green-500 mt-0.5 mr-3 w-5 h-5" />
                                ) : (
                                  <FiAlertCircle
                                    className={`${
                                      type === "critical"
                                        ? "text-red-500"
                                        : "text-amber-500"
                                    } mt-0.5 mr-3 w-5 h-5`}
                                  />
                                )}
                                <div>
                                  <p className="text-gray-700">{item}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Next Steps */}
                    <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-8">
                      <h4 className="text-lg font-semibold text-gray-700 mb-4">
                        Your Next Steps
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-700">
                        {[
                          "Implement the suggestions above to improve your resume",
                          "Use our keyword optimizer to target specific job descriptions",
                          "Check our interview preparation guides for your next steps",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center bg-amber-100 text-amber-700 rounded-full w-6 h-6 text-xs font-bold shrink-0">
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
        </div>
      </div>
    </div>
  );
}

export default ResumeScore;
