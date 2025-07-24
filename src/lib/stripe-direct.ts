import { loadStripe } from '@stripe/stripe-js';

// Get Stripe publishable key
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '';

export const stripePromise = loadStripe(stripePublishableKey);

/**
 * Direct Stripe Checkout - No Supabase Edge Functions Required
 * This works with the free Supabase tier
 */
export async function createDirectCheckoutSession(
  priceId: string,
  successUrl?: string,
  cancelUrl?: string
) {
  try {
    // Create checkout session directly with Stripe
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${stripePublishableKey}`,
      },
      body: new URLSearchParams({
        'payment_method_types[]': 'card',
        'line_items[0][price]': priceId,
        'line_items[0][quantity]': '1',
        'mode': 'subscription',
        'success_url': successUrl || `${window.location.origin}/#success?session_id={CHECKOUT_SESSION_ID}`,
        'cancel_url': cancelUrl || `${window.location.origin}/#dashboard`,
        'allow_promotion_codes': 'true',
        'billing_address_collection': 'required',
        'customer_creation': 'always',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const session = await response.json();
    
    if (session.url) {
      window.location.href = session.url;
    } else {
      throw new Error('No checkout URL received');
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}

/**
 * Alternative: Use Stripe Checkout with client-side redirect
 */
export async function redirectToStripeCheckout(priceId: string) {
  try {
    const stripe = await stripePromise;
    
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      successUrl: `${window.location.origin}/#success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/#dashboard`,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    throw error;
  }
}

/**
 * Check if Stripe is configured
 */
export function isStripeConfigured(): boolean {
  return stripePublishableKey.length > 0 && stripePublishableKey.startsWith('pk_');
}

/**
 * Get Stripe configuration status
 */
export function getStripeConfigStatus() {
  return {
    isConfigured: isStripeConfigured(),
    hasKey: stripePublishableKey.length > 0,
    keyType: stripePublishableKey.startsWith('pk_test_') ? 'test' : 
             stripePublishableKey.startsWith('pk_live_') ? 'live' : 'invalid'
  };
} 