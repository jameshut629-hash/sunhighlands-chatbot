'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Load the embed script dynamically
    const s = document.createElement('script');
    s.src = '/api/embed';
    document.body.appendChild(s);
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, background: '#fffbeb', fontFamily: 'Poppins, sans-serif', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '420px', margin: '0 auto', padding: '24px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #f59e0b, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 10px 15px -3px rgba(245,158,11,.2)', overflow: 'hidden' }}>
          <img src="https://www.sunhighlands.com.au/cdn/shop/files/logo.png" alt="SH" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
        </div>
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#78350f', marginBottom: '8px' }}>Sunhighlands Chatbot</h1>
        <p style={{ color: '#92400e', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
          Click the gold button in the bottom-right corner to start chatting about our premium Manuka Honey.
        </p>
        <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #fde68a', padding: '20px', textAlign: 'left' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Try asking:</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px', color: '#78350f' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b', flexShrink: 0 }} />
              What MGO ratings do you have?
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px', color: '#78350f' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b', flexShrink: 0 }} />
              What are your bundle deals?
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px', color: '#78350f' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b', flexShrink: 0 }} />
              What is Manuka honey used for?
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#78350f' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b', flexShrink: 0 }} />
              What is your shipping policy?
            </li>
          </ul>
        </div>
        <p style={{ fontSize: '11px', color: '#92400e', marginTop: '24px' }}>
          This chatbot widget can be embedded into any website.
        </p>
        <div style={{ marginTop: '32px', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #fde68a', textAlign: 'left' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Embed Script:</p>
          <code style={{ display: 'block', padding: '12px', background: '#fffbeb', borderRadius: '8px', fontSize: '12px', color: '#78350f', wordBreak: 'break-all', lineHeight: '1.5' }}>
            {'<script src="https://sunhighlands-chatbot.vercel.app/api/embed?t="+Date.now()></script>'}
          </code>
        </div>
      </div>
    </div>
  );
}
