import React from 'react';

const CookiesPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full bg-white px-8 py-8 md:px-40">
        <h1 className="mb-8 text-4xl font-bold md:text-[4rem]">QuikFixs Cookies Policy</h1>
        <div className="mb-8 h-1 w-full bg-black" />
        <div className="text-xl text-black">
          <p className="mb-8">
            This Cookies Policy explains how QuikFixs Inc. (&quot;QuikFixs&quot;, &quot;we&quot;, &quot;us&quot;) uses
            cookies and similar technologies on our website and within the QuikFixs mobile application
            (&quot;Platform&quot;). By using the Platform, you agree to our use of cookies as described in this policy.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">1. What are cookies?</h2>
          <p className="mb-8">
            Cookies are small text files placed on your device when you visit a website or use an app. They help us
            enhance your user experience by remembering your preferences and visits.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">2. How we use cookies</h2>
          <p className="mb-8">We use cookies to:</p>
          <ul className="mb-8 list-inside list-disc">
            <li>Understand and improve the functionality of our platform</li>
            <li>Recognize repeat visitors</li>
            <li>Enhance user experience by remembering preferences</li>
            <li>Analyze platform usage for performance and troubleshooting</li>
            <li>Support basic authentication and security features</li>
          </ul>

          <h2 className="mb-8 text-4xl font-semibold">3. Types of cookies we use</h2>
          <ul className="mb-8 list-inside list-disc">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the basic functionality of the platform.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand how users interact with the platform.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember user preferences to provide enhanced features.
            </li>
          </ul>

          <h2 className="mb-8 text-4xl font-semibold">4. Third-party cookies</h2>
          <p className="mb-8">
            We may allow third-party services, such as analytics providers or payment processors, to place cookies on
            your device to perform services on our behalf.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">5. Managing your cookie preferences</h2>
          <p className="mb-8">
            You can control or disable cookies through your browser or device settings. However, disabling cookies may
            affect the functionality and user experience of the platform.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">6. Updates to this policy</h2>
          <p className="mb-8">
            We may update this Cookies Policy from time to time. We will notify you of significant changes by posting a
            notice on our platform.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">7. Contact us</h2>
          <p className="mb-8">
            If you have any questions about this Cookies Policy or your personal data, please contact us at:
          </p>
          <p className="mb-8">QuikFixs Inc.</p>
          <p className="mb-8">support@quikfixs.com</p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
