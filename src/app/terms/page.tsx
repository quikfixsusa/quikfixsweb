import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full bg-white px-8 py-8 md:px-40">
        <h1 className="mb-8 text-4xl font-bold md:text-[4rem]">QuikFixs Terms and Conditions</h1>
        <div className="mb-8 h-1 w-full bg-black" />
        <div className="text-xl text-black">
          <p className="mb-8">
            These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the QuikFixs mobile
            application (the &quot;App&quot;) provided by QuikFixs Inc. By downloading, accessing, or using the App, you
            agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">1. Use of the App</h2>
          <p className="mb-8">
            The App connects clients seeking services with independent contractors who offer services in various
            categories such as plumbing, electrical work, painting, beauty, etc. Clients may request services through
            the App, and contractors may accept those requests.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">2. Eligibility</h2>
          <p className="mb-8">
            You must be at least 18 years old to use QuikFixs. By using the App, you represent and warrant that you meet
            this age requirement.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">3. Account Registration</h2>
          <p className="mb-8">
            To use the App, you must create an account and provide accurate and complete information. You are
            responsible for maintaining the confidentiality of your account credentials and for all activities that
            occur under your account.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">4. User Responsibilities</h2>
          <ul className="mb-8 list-inside list-disc">
            <li>Clients must provide accurate details about the service location and requirements.</li>
            <li>
              Contractors must provide honest and complete service descriptions and maintain professional conduct.
            </li>
            <li>All users must comply with local laws and respect other users’ rights.</li>
          </ul>

          <h2 className="mb-8 text-4xl font-semibold">5. Payments</h2>
          <p className="mb-8">
            All payments for services are processed through third-party payment providers. QuikFixs is not responsible
            for issues related to third-party payment processing.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">6. Service Disputes</h2>
          <p className="mb-8">
            QuikFixs provides a platform for connecting users and is not a party to service agreements. Disputes between
            clients and contractors must be resolved between the parties involved. QuikFixs may assist at its
            discretion.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">7. Prohibited Conduct</h2>
          <ul className="mb-8 list-inside list-disc">
            <li>Using the App for illegal or fraudulent activities</li>
            <li>Harassing or threatening other users</li>
            <li>Impersonating another person or misrepresenting your identity</li>
            <li>Posting false or misleading information</li>
          </ul>

          <h2 className="mb-8 text-4xl font-semibold">8. Termination</h2>
          <p className="mb-8">
            QuikFixs reserves the right to suspend or terminate your access to the App at any time and for any reason,
            including violation of these Terms.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">9. Intellectual Property</h2>
          <p className="mb-8">
            All content in the App, including trademarks, logos, and text, is the property of QuikFixs Inc. or its
            licensors and is protected by intellectual property laws. You may not copy, modify, or distribute any
            content from the App without permission.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">10. Changes to Terms</h2>
          <p className="mb-8">
            We may update these Terms from time to time. Continued use of the App after changes have been posted
            constitutes acceptance of the updated Terms.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">11. Contact</h2>
          <p className="mb-8">For any questions about these Terms, please contact us at:</p>
          <p className="mb-8">QuikFixs Inc.</p>
          <p className="mb-8">support@quikfixs.com</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
