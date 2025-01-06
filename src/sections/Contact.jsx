import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.jsx'
import Alert from '../components/Alert.jsx';

const Contact = () => {

   
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
   //service_n428nmj

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Priya Samanta',
          from_email: form.email,
          to_email: 'samantapriya154@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
<section className="c-space my-20" id="contact">
  {alert.show && <Alert {...alert} />}

  <div className="relative min-h-screen flex items-center justify-center flex-col px-4 sm:px-8 md:px-16 contact-rspnsv ">
    <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen w-full h-full " />

    <div className="contact-container relative z-10 min-h-screen flex flex-col justify-center">
      <h3 className="head-text mt-8 text-center sm:text-left">Let's talk</h3>
      <p className="text-lg text-white-600 mt-3 text-center sm:text-left contact-font">
        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
        life, I’m here to help.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
        <label className="space-y-3">
          <span className="field-label contact-font">Full Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="field-input w-full input-rspnsv"
            placeholder="ex., Priya Samanta"
          />
        </label>

        <label className="space-y-3">
          <span className="field-label contact-font">Email address</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="field-input w-full"
            placeholder="ex., samantapriya154@gmail.com"
          />
        </label>

        <label className="space-y-3">
          <span className="field-label contact-font">Your message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="field-input w-full"
            placeholder="Share your thoughts or inquiries..."
          />
        </label>

        <button className="field-btn button-hover grid-subtext" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
          <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
        </button>
      </form>
    </div>
  </div>
</section>

  );
};

export default Contact;