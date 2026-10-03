import React, { useCallback, useMemo, useState } from 'react';
import { usePaystackPayment } from 'react-paystack';

const PAYSTACK_TEST_PUBLIC_KEY = 'pk_test_e8057d3599ff1120be588791cc40a43e6b9b086';

/**
 * @param {Object} props
 * @param {string} props.productTitle
 * @param {number} props.amountNgn
 * @param {string} [props.downloadUrl]
 * @param {() => void} [props.onClose]
 */
const PaystackCheckoutButton = ({ productTitle, amountNgn, downloadUrl, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [error, setError] = useState('');

  const publicKey =
    process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || PAYSTACK_TEST_PUBLIC_KEY;

  const reference = useMemo(
    () => `atn-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    []
  );

  const config = useMemo(
    () => ({
      reference,
      email: email.trim(),
      amount: Math.round(amountNgn * 100),
      publicKey,
      metadata: {
        custom_fields: [
          { display_name: 'Customer Name', variable_name: 'customer_name', value: name.trim() },
          { display_name: 'Product', variable_name: 'product', value: productTitle },
        ],
      },
    }),
    [reference, email, amountNgn, publicKey, name, productTitle]
  );

  const initializePayment = usePaystackPayment(config);

  const handlePay = useCallback(() => {
    setError('');
    if (!name.trim() || !email.trim()) {
      setError('Please enter your full name and email to continue.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    initializePayment({
      onSuccess: (response) => {
        setReceipt({
          reference: response.reference,
          amountNgn,
          productTitle,
          downloadUrl: downloadUrl || 'https://example.com/downloads/welcome',
        });
      },
      onClose: () => {
        setError('Payment window closed. You can try again when ready.');
      },
    });
  }, [name, email, initializePayment, amountNgn, productTitle, downloadUrl]);

  if (receipt) {
    return (
      <div className="space-y-4 rounded-2xl border border-brand-gold/30 bg-brand-goldMuted p-5">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">Payment verified</p>
        <h4 className="text-xl font-semibold text-white">Thank you, {name}</h4>
        <p className="text-slate-300 leading-7">
          Your purchase of <span className="text-white">{receipt.productTitle}</span> was successful.
          Reference: <span className="font-mono text-brand-gold">{receipt.reference}</span>
        </p>
        <p className="text-slate-400 text-sm">
          A confirmation has been sent to {email}. Use the link below to access your digital resource
          (mock delivery for development).
        </p>
        <a
          href={receipt.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full justify-center rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-goldLight"
        >
          Download resource
        </a>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full border border-brand-border py-2 text-sm text-slate-300 hover:text-white"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Full name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-xl border border-brand-border bg-brand-dark px-4 py-3 text-white outline-none focus:border-brand-gold/50"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-brand-border bg-brand-dark px-4 py-3 text-white outline-none focus:border-brand-gold/50"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <p className="text-sm text-slate-400">
        Total:{' '}
        <span className="text-lg font-semibold text-brand-gold">
          ₦{amountNgn.toLocaleString('en-NG')}
        </span>
      </p>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button
        type="button"
        onClick={handlePay}
        className="inline-flex w-full justify-center rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-goldLight"
      >
        Pay with Paystack
      </button>
    </div>
  );
};

export default PaystackCheckoutButton;
