"use client";

export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700 scroll-mt-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Seep Baby values your privacy. This policy explains how we collect, use,
        and protect your information when you use our app, website, and smart
        feeding device.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal details such as name, email, and account information.</li>
        <li>
          Device and app usage data including Bluetooth and sensor readings.
        </li>
        <li>
          Optional baby feeding data (bottle activity, temperature, etc.).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and improve the Seep Baby app and device experience.</li>
        <li>To personalize insights and notifications about feeding habits.</li>
        <li>To communicate updates, offers, and support information.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Sharing</h2>
      <p className="mb-4">
        We do not sell your personal data. We may share limited information with
        service providers who help us operate our systems, under strict
        confidentiality agreements.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We use encryption and secure storage practices to protect your data.
        However, no digital transmission or storage is 100% secure, and you
        share information at your own risk.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Choices</h2>
      <p className="mb-4">
        You may update or delete your account information at any time through
        the app. You can also contact us to request data removal.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Children’s Privacy</h2>
      <p className="mb-4">
        Seep Baby does not knowingly collect personal information from children
        under 13. The app is intended for parents or guardians managing baby
        feeding data.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Policy Updates</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Updates will be
        posted here with a new effective date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Us</h2>
      <p>
        For privacy questions, email{" "}
        <a
          href="mailto:privacy@seepbaby.com"
          className="text-primary underline"
        >
          privacy@seepbaby.com
        </a>
        .
      </p>
    </section>
  );
}
