// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Get all the elements we need to interact with ---
    
    // Navigation Links
    const navDashboard = document.getElementById('nav-dashboard');
    const navDistricts = document.getElementById('nav-districts');
    const navIntel = document.getElementById('nav-intel');
    const navAccessPanel = document.getElementById('nav-access-panel');

    // Content "Pages"
    const pageDashboard = document.getElementById('page-dashboard');
    const pageDistricts = document.getElementById('page-districts');
    const pageIntel = document.getElementById('page-intel');
    const allPages = [pageDashboard, pageDistricts, pageIntel];

    // Access Panel
    const accessPanel = document.getElementById('access-panel');
    const panelClose = document.getElementById('panel-close');
    const panelLocked = document.getElementById('panel-locked');
    const panelUnlocked = document.getElementById('panel-unlocked');
    const panelBypass = document.getElementById('panel-bypass');

    // Dynamic Ping
    const pingValue = document.getElementById('ping-value');

    // NEW: Background Layers
    const bgDashboard = document.getElementById('bg-dashboard');
    const bgDistricts = document.getElementById('bg-districts');
    const bgIntel = document.getElementById('bg-intel');
    const bgAccessPanel = document.getElementById('bg-access-panel');
    const allBackgrounds = [bgDashboard, bgDistricts, bgIntel, bgAccessPanel];

    
    // --- 2. Define our functions ---

    /**
     * Hides all main content pages and shows only the one with the specified ID.
     * @param {string} pageId - The ID of the page section to show.
     */
    function showPage(pageId) {
        // Trigger screen glitch effect
        document.body.classList.add('screen-glitch');
        setTimeout(() => {
            document.body.classList.remove('screen-glitch');
        }, 400); // 400ms matches the CSS animation

        // Hide all pages
        allPages.forEach(page => {
            if(page) page.classList.remove('active');
        });

        // Show the requested page
        const pageToShow = document.getElementById(pageId);
        if (pageToShow) {
            pageToShow.classList.add('active');
        }

        // NEW: Show the corresponding background
        // We link 'page-dashboard' to 'bg-dashboard', etc.
        const bgId = 'bg-' + pageId.split('-')[1];
        showBackground(bgId);
    }

    /**
     * NEW: Activates a specific background layer and hides the others.
     * @param {string} bgId - The ID of the background layer to show.
     */
    function showBackground(bgId) {
        allBackgrounds.forEach(bg => {
            if (bg) {
                if (bg.id === bgId) {
                    bg.classList.add('active');
                } else {
                    bg.classList.remove('active');
                }
            }
        });
    }

    /**
     * Updates the ping value to a random number between 39 and 153.
     */
    function updatePing() {
        const min = 39;
        const max = 153;
        const randomPing = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if (pingValue) {
            pingValue.textContent = randomPing + 'ms';
            
            // Optional: Add color based on ping
            if (randomPing > 120) {
                pingValue.style.color = 'var(--color-warning)';
            } else {
                pingValue.style.color = 'var(--color-text)';
            }
        }
    }

    
    // --- 3. Set up event listeners ---

    // Page navigation
    if (navDashboard) {
        navDashboard.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent page reload
            showPage('page-dashboard');
        });
    }

    if (navDistricts) {
        navDistricts.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('page-districts');
        });
    }

    if (navIntel) {
        navIntel.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('page-intel');
        });
    }

    // Access panel
    if (navAccessPanel) {
        navAccessPanel.addEventListener('click', (e) => {
            e.preventDefault();
            if (accessPanel) {
                accessPanel.style.display = 'flex';
                showBackground('bg-access-panel'); // Show panel background
                
                // Reset panel to locked state every time it's opened
                if (panelLocked) panelLocked.style.display = 'block';
                if (panelUnlocked) panelUnlocked.style.display = 'none';
            }
        });
    }

    if (panelClose) {
        panelClose.addEventListener('click', (e) => {
            e.preventDefault();
            if (accessPanel) accessPanel.style.display = 'none';
            
            // NEW: Find the currently active *page* and show its background
            const activePage = document.querySelector('.page-section.active');
            if (activePage) {
                const bgId = 'bg-' + activePage.id.split('-')[1];
                showBackground(bgId);
            } else {
                showBackground('bg-dashboard'); // Fallback to dashboard
            }
        });
    }

    // Event listener for the secret bypass trigger
    if (panelBypass) {
        panelBypass.addEventListener('click', (e) => {
            e.preventDefault();
            // Swap the panel content
            if (panelLocked) panelLocked.style.display = 'none';
            if (panelUnlocked) panelUnlocked.style.display = 'block';
        });
    }


    // --- 4. Persistent hover effect for widgets ---

    const widgets = document.querySelectorAll('.widget');
    const widgetData = new Map();

    widgets.forEach(widget => {
        widgetData.set(widget, { timer: null });

        widget.addEventListener('mouseenter', (e) => {
            const data = widgetData.get(widget);
            data.timer = setTimeout(() => {
                widget.classList.add('widget-hover-active');
            }, 1000); // 1 second delay
        });

        widget.addEventListener('mouseleave', () => {
            const data = widgetData.get(widget);
            clearTimeout(data.timer);
            widget.classList.remove('widget-hover-active');
        });
    });


    
    // --- 5. Initialize the page ---

    // Show the dashboard by default, which also handles its background
    showPage('page-dashboard');

    // Update the ping immediately, then set it to update every 2 seconds
    updatePing();
    setInterval(updatePing, 2000);


    // --- 6. Background Distortion Effect ---
    // This listener is on the whole document
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate movement percentage from center (-0.5 to 0.5)
        const percentX = (clientX / innerWidth) - 0.5;
        const percentY = (clientY / innerHeight) - 0.5;

        // Define the max movement in pixels
        const maxMove = 20; 

        const moveX = percentX * maxMove;
        const moveY = percentY * maxMove;

        // NEW: Find the currently active background layer and apply the transform
        const activeBG = document.querySelector('.background-layer.active');
        if (activeBG) {
            activeBG.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });

});