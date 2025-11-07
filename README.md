# Sigma_city - A Cyberpunk Interface

This is an immersive, static web applet created for the **PromptCraft Hackathon**. It fulfills the "Cyberpunk City Interface" track, designed to be a "tourist" website for the fictional city of **Sigma_city**, but with a hacked, street-level twist.

The entire project was built 100% by an AI assistant (Gemini) as per the hackathon's "AI is Your Only Ally" rule.

## Features

This "digital artifact" is a self-contained static site (HTML/CSS/JS) with no backend.

* **Glitchy Dual-Layer Intro:** The site loads a "clean" corporate page before glitching out to reveal the "real" hacked interface.
* **Single Page Application (SPA) Feel:** The site operates as a multi-page interface without page reloads, using JavaScript to show and hide content sections.
* **High-Distortion Transitions:** Navigating between pages triggers a full-screen, high-distortion glitch effect.
* **Dynamic Data:** The `[PING: ...]` counter updates every 2 seconds with a new random value.
* **Interactive Backgrounds:** Each page (`Dashboard`, `Districts`, `Street_intel`, `Secret_Access_panel`) has its own unique background image.
* **Cursor Distortion Effect:** The background images distort and move based on the user's cursor position, creating an immersive parallax effect.
* **Animated UI:** Headings and warning text feature neon glow and blink animations.
* **Widget Hover Effect:** Hovering over any widget (tile) for more than 1 second triggers a persistent, colored overlay until the cursor leaves.
* **Secret Access Panel:** The "Access Panel" is a fake terminal that can be "bypassed" by clicking the "EXIT" text, revealing hidden content.

## Required Files

To run this project, you will need the three code files (`index.html`, `style.css`, `script.js`) and the following four images in the same folder:

1.  `Dashboard.jpg`
2.  `District.jpg`
3.  `Street_intel.jpg`
4.  `Secret_Access_panel.jpg`

## How to Run

### Method 1: Local (In Browser)

1.  Place all 7 files (`index.html`, `style.css`, `script.js`, and the 4 `.jpg` images) in a single folder.
2.  Open the `index.html` file in any modern web browser.

### Method 2: Deploy to Netlify (Recommended)

1.  Sign up for a free Netlify account.
2.  Drag the *entire folder* containing all 7 files onto the Netlify "Sites" dashboard.
3.  Netlify will deploy the site and give you a public URL to share.
