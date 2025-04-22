import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full bg-white px-8 py-8 md:px-40">
        <h1 className="mb-8 text-4xl font-bold md:text-[4rem]">QuikFixs Privacy Policy</h1>
        <div className="mb-8 h-1 w-full bg-black" />
        <div className="text-xl text-black">
          <p className="mb-8">
            QuikFixs is a platform that connects clients seeking home services with contractors offering such services
            in various categories including plumbing, painting, mechanics, pest control, electrical work, glass
            installation, and beauty services. This privacy policy applies to both clients and contractors using the
            QuikFixs app.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">1. GENERAL INFORMATION</h2>
          <p className="mb-8">
            By using QuikFixs, you agree to the collection and use of your personal information as outlined in this
            policy. The app is intended for adult users only. Minors under 18 are not permitted to use the app.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">2. INFORMATION WE COLLECT</h2>
          <ul className="mb-8 list-inside list-disc">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Physical Address (clients only, to locate the service area)</li>
            <li>Service Categories (contractors only)</li>
          </ul>
          <p className="mb-8">
            We only collect your current location at the moment you specify where the service should be performed. We do
            not collect location data in the background or automatically.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">3. HOW WE USE YOUR INFORMATION</h2>
          <ul className="mb-8 list-inside list-disc">
            <li>Create and manage user accounts</li>
            <li>Match clients with nearby contractors</li>
            <li>Provide support and communication between users</li>
            <li>Send service updates and notifications</li>
            <li>Ensure app functionality and security</li>
          </ul>

          <h2 className="mb-8 text-4xl font-semibold">4. DATA SHARING</h2>
          <p className="mb-8">
            We do not sell your data. Information is only shared with relevant parties (clients or contractors)
            necessary for completing the requested services.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">5. DATA SECURITY</h2>
          <p className="mb-8">
            We use secure technologies provided by Google to protect your data, including encryption and secure
            authentication.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">6. DATA RETENTION</h2>
          <p className="mb-8">
            We retain personal information only as long as necessary to provide our services or as required by law. You
            can request deletion of your data at any time.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">7. USER RIGHTS</h2>
          <ul className="mb-8 list-inside list-disc">
            <li>Access the data we hold about you</li>
            <li>Request corrections to your data</li>
            <li>Request deletion of your account and data</li>
          </ul>
          <p className="mb-8">
            Contact us at <strong>[support@quikfixs.com]</strong> to exercise any of these rights.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">8. CHANGES TO THIS POLICY</h2>
          <p className="mb-8">
            This policy may be updated from time to time. We will notify you of significant changes through the app or
            by email.
          </p>

          <h2 className="mb-8 text-4xl font-semibold">9. CONTACT INFORMATION</h2>
          <p className="mb-8">
            If you have any questions or concerns about this policy or your personal data, contact us at:
          </p>
          <p className="mb-8">QuikFixs Inc.</p>
          <p className="mb-8">support@quikfixs.com</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
