import { PolicyLayout } from "@/components/PolicyLayout";

const RefundPolicy = () => {
  return (
    <PolicyLayout
      title="Refund & Cancellation Policy"
      subtitle="How refunds and cancellations work on Easy Advising."
      updated="April 2026"
    >
      <h2>Easy Advising – Refund and Cancellation Policy</h2>

      <h3>No Refund after Consultant Is Assigned</h3>
      <p>Once your order reaches “processing” status, no refund is issued as consultant time has been committed.</p>

      <h3>Pre-Execution Cancellations</h3>
      <p>Cancellations made within 1 hour before service initiation may be considered, at our sole discretion.</p>

      <h3>Incorrect Information by User</h3>
      <p>If you provide incorrect data (wrong phone number, issue description), no refund will be issued.</p>

      <h3>Product Damages (Physical Items Only)</h3>
      <p>We do not accept returns of damaged products unless it was damaged during shipment. Verification is required within 72 hours.</p>

      <h3>Subscription Delays</h3>
      <p>If activation of a subscription is delayed without user fault, a partial refund may apply.</p>

      <h3>Missed Calls or Wrong Contact Info</h3>
      <p>Missed sessions due to unreachable phone number or poor network from the user’s side will not qualify for a refund.</p>

      <h3>Payment Gateway Deductions</h3>
      <p>Refunds (if granted) will be subject to deductions for transaction charges, bank fees, and gateway commissions.</p>

      <h3>Server Errors</h3>
      <p>If payment is deducted multiple times due to technical issues, the extra amount will be refunded within 72 hours.</p>

      <h3>Platform-Initiated Cancellations</h3>
      <p>If Easy Advising cancels a booking due to consultant unavailability or pricing error, a full refund will be processed.</p>

      <h3>Quality Complaints</h3>
      <p>If the session was disrupted (e.g., poor network) we will audit the session and may issue a refund to your Easy Advising wallet.</p>

      <h3>Valid Refund Situations Include</h3>
      <p>Consultant delays session.</p>

      <h3>No Refund for Subjective Dissatisfaction</h3>
      <p>No refunds for reasons such as: you did not like the advice, you disagreed with the opinion given, or you expected guaranteed results.</p>

      <h2>Refund Policy for Live Sessions & Webinars</h2>
      <p>
        Refunds for Live Sessions and Webinars are subject to the following conditions:
      </p>

      <h3>Non-Refundable Scenarios</h3>
      <p>
        Entry fees for Live Sessions are generally non-refundable once the session has started.
        No refund will be issued if the user joins late, leaves early, or is unable to attend due to personal reasons.
        Failure to get a chance to ask a question in a group session does not qualify for a refund.
      </p>

      <h3>Eligible Refund Scenarios</h3>
      <p>
        If a Live Session is canceled by the platform or the consultant before it begins → Full refund to the user’s wallet.
        If a technical issue from the platform side prevents access to the session → Full or partial refund (after review).
        If the consultant fails to start or significantly delays the session → Full or partial refund, based on the situation.
      </p>

      <h3>Co-host / Question Slot Refunds</h3>
      <p>
        If a user pays for a co-host or question opportunity and:
        The session ends before their turn → Eligible for partial or full refund.
        The consultant does not respond to the question → Eligible for review-based refund.
      </p>

      <h3>Processing of Refunds</h3>
      <p>
        All approved refunds will be credited to the Easy Advising wallet within 72 hours.
        Refunds may be adjusted for payment gateway charges where applicable.
      </p>
      <p>
        Easy Advising offers interactive features including live audio rooms, video webinars, and group sessions hosted by consultants (“Live Sessions”). These are designed for real-time learning, discussion, and general advisory purposes.
      </p>

      <h3>Refund Timeline</h3>
      <p>All approved refunds will be processed to your Easy Advising wallet within 72 hours.</p>
    </PolicyLayout>
  );
};

export default RefundPolicy;
