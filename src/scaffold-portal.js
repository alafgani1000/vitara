const fs = require('fs');
const path = require('path');

const pages = [
    { filename: 'patient-dashboard.html', title: 'Dashboard', icon: 'layout-dashboard' },
    { filename: 'patient-appointments.html', title: 'Appointments', icon: 'calendar-days' },
    { filename: 'patient-records.html', title: 'Health Records', icon: 'file-text' },
    { filename: 'patient-telemedicine.html', title: 'Messages & Telehealth', icon: 'video' },
    { filename: 'patient-settings.html', title: 'Settings', icon: 'settings' }
];

const generatePortalTemplate = (pageTitle, filename) => {
    let sidebarLinks = pages.map(p => {
        const isActive = p.filename === filename;
        const activeClasses = isActive 
            ? 'bg-brand-primary text-text-inverse shadow-md' 
            : 'text-text-secondary hover:bg-brand-light hover:text-brand-primary';
        
        return `
                <li>
                    <a href="${p.filename}" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeClasses}">
                        <i data-lucide="${p.icon}" class="w-5 h-5"></i>
                        ${p.title}
                    </a>
                </li>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle} | VITARA Patient Portal</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS (compiled) -->
    <link rel="stylesheet" href="../dist/assets/css/vitara.min.css">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-bg-canvas text-text-primary antialiased selection:bg-brand-light selection:text-brand-primary overflow-x-hidden">

    <div class="flex h-screen overflow-hidden">
        
        <!-- SIDEBAR -->
        <aside class="w-72 bg-bg-surface border-r border-border-light flex-shrink-0 hidden md:flex flex-col">
            <div class="p-6 md:p-8 flex items-center gap-3">
                <div class="w-8 h-8 rounded bg-brand-primary text-text-inverse flex items-center justify-center font-display text-xl">
                    <i data-lucide="plus" class="w-5 h-5"></i>
                </div>
                <span class="font-display font-semibold text-2xl tracking-tight text-text-primary">VITARA</span>
            </div>
            
            <div class="px-6 mb-4">
                <div class="px-4 py-2 rounded-lg bg-brand-light/30 border border-brand-primary/10 flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-status-success animate-pulse"></div>
                    <span class="text-xs font-medium text-brand-primary uppercase tracking-wider">Portal Online</span>
                </div>
            </div>

            <nav class="flex-1 px-4 overflow-y-auto py-4">
                <ul class="space-y-2">
                    ${sidebarLinks}
                </ul>
            </nav>

            <div class="p-6 border-t border-border-light">
                <a href="index.html" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-status-error hover:bg-status-error/10 transition-all">
                    <i data-lucide="log-out" class="w-5 h-5"></i>
                    Sign Out
                </a>
            </div>
        </aside>

        <!-- MAIN CONTENT AREA -->
        <div class="flex-1 flex flex-col relative overflow-hidden">
            
            <!-- TOPBAR -->
            <header class="h-20 bg-bg-canvas/80 backdrop-blur-md border-b border-border-light flex items-center justify-between px-6 md:px-10 z-10 sticky top-0">
                <div class="flex items-center gap-4">
                    <button class="md:hidden text-text-secondary hover:text-brand-primary transition-colors">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                    <h2 class="font-display text-2xl font-medium text-text-primary hidden sm:block">${pageTitle}</h2>
                </div>

                <div class="flex items-center gap-4 sm:gap-6">
                    <button class="relative text-text-secondary hover:text-brand-primary transition-colors">
                        <i data-lucide="bell" class="w-6 h-6"></i>
                        <span class="absolute top-0 right-0 w-2.5 h-2.5 bg-status-warning rounded-full border-2 border-bg-canvas"></span>
                    </button>
                    
                    <div class="h-8 w-px bg-border-light"></div>
                    
                    <div class="flex items-center gap-3 cursor-pointer group">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="Patient" class="w-10 h-10 rounded-full object-cover border-2 border-transparent group-hover:border-brand-primary transition-colors">
                        <div class="hidden md:block text-right">
                            <p class="text-sm font-semibold text-text-primary leading-none mb-1">Sophia Lee</p>
                            <p class="text-xs text-text-muted leading-none">ID: VTR-4829</p>
                        </div>
                        <i data-lucide="chevron-down" class="w-4 h-4 text-text-muted group-hover:text-brand-primary transition-colors"></i>
                    </div>
                </div>
            </header>

            <!-- PAGE CONTENT -->
            <main class="flex-1 overflow-y-auto p-6 md:p-10 pb-24">
                <!-- CONTENT GOES HERE -->
                <div class="max-w-6xl mx-auto">
                    <h1 class="text-4xl font-display font-medium text-text-primary mb-8">${pageTitle} Content</h1>
                    <div class="h-96 rounded-2xl border border-dashed border-border-default flex items-center justify-center text-text-muted">
                        Page under construction
                    </div>
                </div>
            </main>

        </div>
    </div>

    <!-- Initialize Icons -->
    <script>
        lucide.createIcons();
    </script>
</body>
</html>`;
};

const srcDir = path.join(__dirname);

pages.forEach(p => {
    const filePath = path.join(srcDir, p.filename);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, generatePortalTemplate(p.title, p.filename));
        console.log(`Created: ${p.filename}`);
    } else {
        console.log(`Skipped (already exists): ${p.filename}`);
    }
});

console.log('Portal scaffolding complete.');
