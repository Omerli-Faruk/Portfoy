import { memo, useState } from 'react';
import emailjs from '@emailjs/browser';

// --- Icon Component ---
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

// --- Form Structure ---
type FormState = { name: string; email: string; message: string; };

const FormField = memo(({ id, label, type = 'text', value, onChange }: { id: keyof FormState; label: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; }) => {
    const InputComponent = type === 'textarea' ? 'textarea' : 'input';
    const commonClasses = "w-full p-3 rounded-md bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors";

    return (
        <div>
            <label htmlFor={id} className="block text-left font-medium mb-2 text-slate-800 dark:text-slate-200">{label}</label>
            <InputComponent id={id} name={id} type={type} value={value} onChange={onChange} className={commonClasses} rows={type === 'textarea' ? 4 : undefined} required />
        </div>
    );
});
FormField.displayName = 'FormField';

// --- Main Component ---
const ContactComponent = () => {
    // --- State Management ---
    const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // --- Handlers ---
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            console.error('EmailJS ortam değişkenleri tanımlanmamış! Lütfen .env dosyanızı kontrol edin.');
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000); // Hata durumunu bir süre gösterip sıfırla
            return;
        }

        emailjs.send(serviceID, templateID, {
            name: formState.name,
            email: formState.email,
            message: formState.message,
        }, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success');
                setFormState({ name: '', email: '', message: '' });
                // 3 saniye sonra durumu sıfırla
                setTimeout(() => setStatus('idle'), 3000);
            }, (err) => {
                console.error('FAILED...', err);
                setStatus('error');
                // 3 saniye sonra durumu sıfırla
                setTimeout(() => setStatus('idle'), 3000);
            });
    };

    return (
        <section id="contact" className="relative w-full py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_50%_at_50%_80%,#dbeafe_0%,transparent_100%)] dark:bg-[radial-gradient(40%_50%_at_50%_80%,rgba(30,58,138,0.3)_0%,transparent_100%)]"></div>

            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">İletişime Geçelim</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0">
                        Bir projeniz mi var veya sadece merhaba mı demek istiyorsunuz? Aşağıdaki formu doldurarak veya doğrudan e-posta göndererek bana ulaşabilirsiniz.
                    </p>
                    <a href="mailto:avciakin35@gmail.com" className="inline-flex items-center gap-3 text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                        <MailIcon className="w-6 h-6" />
                        <span>avciakin35@gmail.com</span>
                    </a>
                </div>
                <div className="w-full bg-white/50 dark:bg-slate-800/50 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <FormField id="name" label="Adınız" value={formState.name} onChange={handleChange} />
                            <FormField id="email" label="E-posta Adresiniz" type="email" value={formState.email} onChange={handleChange} />
                        </div>
                        <div className="mb-6">
                            <FormField id="message" label="Mesajınız" type="textarea" value={formState.message} onChange={handleChange} />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' && 'Gönderiliyor...'}
                            {status === 'idle' && 'Mesajı Gönder'}
                            {status === 'success' && 'Başarıyla Gönderildi!'}
                            {status === 'error' && 'Hata Oluştu, Tekrar Dene'}
                        </button>
                        {status === 'success' && <p className="text-green-600 dark:text-green-400 mt-4 text-center">Mesajınız için teşekkürler!</p>}
                        {status === 'error' && <p className="text-red-600 dark:text-red-400 mt-4 text-center">Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

const Contact = memo(ContactComponent);
Contact.displayName = 'Contact';

export default Contact;