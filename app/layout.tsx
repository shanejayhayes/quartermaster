import './globals.css';
export const metadata = { title: 'Quartermaster', description: 'Your characters, builds, and next moves.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html> }
