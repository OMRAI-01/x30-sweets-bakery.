# X30 Sweets & Bakery: Written Answers (Roll No. 30, Bootstrap 5)
Client: Sweets and bakery shop. Problem: one static HTTP page, unreadable on mobile, not on Google.

## Q1. Static or dynamic, domain, hosting, HTTPS
**Choice: static site now, with a small JavaScript feature.** The shop needs a home page, price list and order enquiry. Content changes only when prices or festival specials change, so a static site is cheap, fast and has no database to hack. The current site is already static, so the real fixes are responsiveness, SEO and security, not a backend. If online payments or stock tracking are needed later, move to a dynamic site (for example PHP/MySQL or a CMS).

**Domain:** x30sweetsbakery.in (short, brand-matching, .in builds local trust).
**Hosting:** free static hosting (GitHub Pages or Netlify) for the demo. For the real shop, low-cost shared hosting from an Indian provider, which includes a free SSL certificate, email and support.

**Why HTTPS matters here:** The current page uses HTTP, so browsers label it "Not secure", which scares customers off. Order enquiries carry names, phone numbers and emails, and HTTPS encrypts them so nobody on shared Wi-Fi can read or alter them. Google also ranks HTTPS sites higher, which directly helps the "not on Google" problem. Payment apps and trust badges also need HTTPS.

## Q2. Design
**Wireframes (Home)**
```
MOBILE (360px)            DESKTOP (1200px)
[ Logo        ☰ ]         [ Logo        Home  Menu ]
[ Hero title    ]         [ Hero text + button | SVG cake ]
[ Button        ]         [ Card ][ Card ][ Card ]
[ SVG cake      ]         [ Privacy note          ]
[ Card ]                  [ Footer                ]
[ Card ]
[ Card ]
[ Footer ]
```
**Colour palette:** Cream #FFF6E9 (background), Chocolate #3B2218 (text/nav), Strawberry #C2255C (buttons), Caramel #B7761F (borders), Mint #E6F2EA (hero). Chocolate on cream passes WCAG AA contrast.
**Font pairing:** Playfair Display (headings, warm and bakery-like) + Poppins (body, clear on small screens).
**UI/UX principles:**
1. *Visual hierarchy:* one big headline and one berry button per screen, so mobile visitors know the next step.
2. *Consistency and feedback:* same nav, colours and buttons on both pages, and the form shows inline errors and a live total.

## Q3. Build
See index.html, menu.html, style.css. Bootstrap 5 grid and navbar, semantic tags (header, nav, main, section, article, footer), a table with caption, a form with text, email, tel, date, select, number, range, checkbox and textarea, an inline SVG cake, 2 media queries and 1 transition (button hover).

## Q4. JavaScript feature
script.js: an order estimator that validates the form (Bootstrap validation + HTML5 rules), updates the total live in the DOM, and saves the customer's order list in Local Storage with Remove and Clear.

## Q5. GitHub (do this yourself)
```
git init
git add style.css && git commit -m "Add base styles and colour tokens"
git add index.html && git commit -m "Add responsive home page"
git add menu.html && git commit -m "Add menu table and order form"
git add script.js && git commit -m "Add order estimator with validation and localStorage"
git add answers.md && git commit -m "Add SEO, accessibility and documentation"
git branch -M main
git remote add origin https://github.com/YOURNAME/x30-sweets-bakery.git
git push -u origin main
```
Then GitHub: Settings > Pages > Deploy from branch main. Write your repo and live links in the PDF.

## Q6. AI, SEO, accessibility, ethics
**AI prompt used (edit to match what you really did):** "Build a Bootstrap 5 responsive home page and menu page for a sweets and bakery shop with a price table, a form with 5+ input types, and a JS order estimator with localStorage."
**Output:** a first draft of the HTML, CSS and JS in this repo.
**3 fixes I made (replace with your own real fixes):** (1) changed the colours and fonts to my palette; (2) fixed form labels and error messages so each input has a matching label; (3) added reduced-motion support and a skip link.

**Page title:** X30 Sweets & Bakery | Fresh Mithai, Cakes & Bakes in Faridabad
**Meta description:** Order fresh mithai, eggless cakes and baked goods from X30 Sweets & Bakery. Mobile-friendly menu, prices and online order enquiry.
**Keywords:** sweet shop, bakery, eggless cakes
**Alt text:** The cake is an inline SVG with role="img" and the title "Illustration of a strawberry cake". Any real photo would use e.g. alt="Box of golden gulab jamun in sugar syrup".
**3 accessibility checks:** (1) Contrast: chocolate on cream passes AA; (2) keyboard: skip link and visible focus outline work with Tab; (3) every form field has a label and errors are written in text, not colour alone.
**Ethics (4 lines):** Privacy: only name, email and phone are collected, used for the order, and stored in the user's browser, not sent anywhere; a privacy note is shown. Copyright: no copied images; fonts and Bootstrap are open licence; use only own or licensed photos. AI disclosure: AI helped draft the code and text, and I reviewed, edited and tested it. Honesty: shop details and prices are fictional sample data.
