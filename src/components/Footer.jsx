function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-800 text-amber-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo & About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">LuminaCV</h3>
            <p className="text-sm text-amber-200">
              Helping freshers build better resumes with AI-powered insights.
            </p>
          </div>

          {/* Minimal Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white mb-3">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-amber-200 hover:text-white transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-amber-200 hover:text-white transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:text-right">
            <h4 className="text-sm font-medium text-white mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-amber-700 text-center text-xs text-amber-300">
          © 2025 LuminaCV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
