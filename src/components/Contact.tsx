import { type ChangeEvent, type FormEvent, useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const CONTACT_EMAIL = 'aj6305897005@gmail.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type FormState = {
  name: string;
  email: string;
  message: string;
};

type StatusState =
  | {
      type: 'success' | 'error';
      message: string;
    }
  | null;

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<StatusState>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `Portfolio message from ${formData.name}`,
          _template: 'table',
          _honey: '',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Message could not be sent right now.');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully. It has been delivered to my inbox.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong while sending your message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="transition-colors hover:text-cyan-400"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>Real-time inbox contact enabled</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-4">Response time: Usually within 24 hours</p>
                <p className="text-sm text-gray-400">Location: Hyderabad, India</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-100 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-100 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-100 resize-none transition-colors"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {status && (
                  <div
                    aria-live="polite"
                    className={`text-sm ${
                      status.type === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:scale-100 disabled:opacity-70"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
