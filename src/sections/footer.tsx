import { memo } from 'react';

// Define the type for a social link
type SocialLink = {
    name: string;
    href: string;
};

const socialLinks: SocialLink[] = [
    { name: 'GitHub', href: 'https://github.com/Omerli-Faruk' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/omerfaruk-avci/' },
    { name: 'Twitter', href: 'https://x.com/OmerliFaruk35' },
];

const SocialLinkItem = memo(({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        {children}
    </a>
));
SocialLinkItem.displayName = 'SocialLinkItem';

const FooterComponent = () => {
    return (
        <footer className="w-full border-t border-slate-200 dark:border-slate-800 py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    © {new Date().getFullYear()} Ömer Faruk. Tüm hakları saklıdır.
                </p>
                <div className="flex items-center gap-x-6">
                    {socialLinks.map(link => (
                        <SocialLinkItem key={link.name} href={link.href}>
                            {link.name}
                        </SocialLinkItem>
                    ))}
                </div>
            </div>
        </footer>
    );
};

const Footer = memo(FooterComponent);
Footer.displayName = 'Footer';

export default Footer;