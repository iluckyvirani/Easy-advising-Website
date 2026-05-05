import { PolicyLayout } from "@/components/PolicyLayout";

const PrivacyPolicy = () => {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How Easy Advising collects, uses, and protects your information."
      updated="April 2026"
    >
      <h2>Introduction</h2>
      <p>
        Welcome to Easy Advising. Your privacy is of utmost importance to us. This Privacy Policy
        outlines how we collect, use, and protect your personal information when you use our
        consultancy services. By accessing or using Easy Advising, you agree to the terms of this
        Privacy Policy.
      </p>

      <h2>Information We Collect</h2>
      <h3>Personal Information</h3>
      <p>
        When you register on Easy Advising, we collect personal information such as your name,
        email address, phone number, and other contact details. This information is necessary to
        create your account and provide you with our services.
      </p>
      <h3>Payment Information</h3>
      <p>
        To facilitate transactions, we collect payment information, including credit/debit card
        details or other financial account information. This information is processed securely
        through our third-party payment processors.
      </p>
      <h3>Consultation Data</h3>
      <p>
        We collect information related to your consultations, including the content of chats,
        voice calls, and video calls. This information is used solely to provide and improve our
        services.
      </p>
      <h3>Usage Data</h3>
      <p>
        We collect information about your interactions with Easy Advising, such as the pages you
        visit, the features you use, and the time and duration of your sessions. This helps us
        understand how you use our platform and improve your experience.
      </p>
      <h3>Device Information</h3>
      <p>
        We may collect information about the device you use to access Easy Advising, including the
        device type, operating system, and browser type.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li><strong>To Provide Services:</strong> create your account, process transactions, and connect you with consultants.</li>
        <li><strong>To Improve Services:</strong> analyze usage data and feedback to enhance our platform and develop new features.</li>
        <li><strong>To Communicate:</strong> send updates, notifications, and promotional materials. You can opt-out at any time.</li>
        <li><strong>To Ensure Security:</strong> protect against fraud, unauthorized access, and other security issues.</li>
        <li><strong>To Comply with Legal Obligations:</strong> comply with applicable laws, regulations, and legal processes.</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <ul>
        <li><strong>With Consultants:</strong> we share your consultation data with the consultants you connect with to provide the requested services.</li>
        <li><strong>With Third-Party Service Providers:</strong> we may share your information with payment processors and IT service providers under confidentiality agreements.</li>
        <li><strong>For Legal Reasons:</strong> we may disclose your information if required by law or in response to legal processes such as court orders or subpoenas.</li>
        <li><strong>With Your Consent:</strong> we may share your information with third parties if you give us explicit consent to do so.</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement robust security measures to protect your personal information from
        unauthorized access, alteration, disclosure, or destruction. These measures include
        encryption, firewalls, and secure server environments. However, please note that no
        method of transmission over the internet or electronic storage is completely secure.
      </p>

      <h2>Your Rights</h2>
      <ul>
        <li><strong>Access:</strong> Request access to your personal information and obtain a copy of the data we hold about you.</li>
        <li><strong>Rectify:</strong> Correct any inaccuracies in your personal information.</li>
        <li><strong>Delete:</strong> Request the deletion of your personal information, subject to certain legal obligations.</li>
        <li><strong>Object:</strong> Object to the processing of your personal information in certain circumstances.</li>
        <li><strong>Withdraw Consent:</strong> Withdraw your consent to the processing of your personal information at any time.</li>
      </ul>

      <h2>Live Sessions & Recording Data</h2>
      <p>
        Easy Advising offers live audio rooms, video sessions, and webinars.
      </p>
      <p>
        These sessions may be recorded for quality, training, dispute resolution, and promotional purposes.
        By joining any live session, you consent to the recording of your voice, video, and interactions.
        Your username, questions, and participation may be visible to other participants.
        Users are strongly advised not to share sensitive personal or financial information during live sessions.
      </p>

    </PolicyLayout>
  );
};

export default PrivacyPolicy;
