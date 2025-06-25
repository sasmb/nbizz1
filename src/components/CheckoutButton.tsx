import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { GradientButton } from '@/components/ui/gradient-button';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <GradientButton
      onClick={handleCheckout}
      disabled={loading}
      size="md"
      variant="primary"
    >
      {loading ? 'Processing...' : 'Get Started'}
    </GradientButton>
  );
} 