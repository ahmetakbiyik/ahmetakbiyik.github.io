import React from 'react';

const Contact = () => {
  return (
    <div className="section">
      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>Get in Touch</h1>

          <div className="card">
            <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-lg)' }}>
              I'm always interested in discussing research collaborations, speaking opportunities,
              or potential projects. Feel free to reach out!
            </p>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                Email
              </h3>
              <a
                href="mailto:ahmetutkuakbiyik@gmail.com"
                style={{ fontSize: '1.1rem', fontWeight: '500' }}
              >
                ahmetutkuakbiyik@gmail.com
              </a>
            </div>



            <div style={{
              padding: 'var(--spacing-md)',
              background: 'var(--color-bg)',
              borderRadius: 'var(--radius-sm)',
              marginTop: 'var(--spacing-lg)'
            }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Location</h3>
              <p style={{ marginBottom: '0' }}>
                Based in Palo Alto, CA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;