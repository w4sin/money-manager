export default function Page() {
  return (
    <main className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg border border-gray-100 shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6">Last updated: September 15, 2025</p>
      <section className="mt-6">
        <h2 className="text-lg font-semibold">1. Introduction</h2>
        <p className="mt-2">
          This Privacy Policy explains how Money Manager (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your
          personal information when you use our application.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-lg font-semibold">2. Information We Collect</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Account information (such as email, name) when you sign in via
            Google, Facebook, Line or other providers.
          </li>
          <li>Financial data you enter (such as transactions, budgets).</li>
          <li>Usage data (such as device, browser, and interaction logs).</li>
        </ul>
      </section>
      <section className="mt-6">
        <h2 className="text-lg font-semibold">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>To provide and improve our services.</li>
          <li>To personalize your experience.</li>
          <li>To communicate with you about updates or support.</li>
        </ul>
      </section>
      <section className="mt-6">
        <h2 className="text-lg font-semibold">4. Third-Party Services</h2>
        <p className="mt-2">
          We may use third-party services (such as Google, Facebook, Line authentication and
          database providers) to operate our app. These services may collect
          information as described in their own privacy policies.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-lg font-semibold">5. Data Security</h2>
        <p className="mt-2">
          We implement reasonable security measures to protect your data.
          However, no method of transmission or storage is 100% secure.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-lg font-semibold">6. Your Rights</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            You can access, update, or delete your account information at any
            time.
          </li>
          <li>Contact us for any privacy-related requests or questions.</li>
        </ul>
      </section>
      <section className="mt-6">
        <h2 className="text-lg font-semibold">7. Changes to This Policy</h2>
        <p className="mt-2">
          We may update this Privacy Policy from time to time. We will notify
          you of any significant changes by updating the date above.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-lg font-semibold">8. Contact</h2>
        <p className="mt-2">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:wasin.saetie@gmail.com"
            className="text-blue-600 underline"
          >
            wasin.saetie@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
