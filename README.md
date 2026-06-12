# Giftly — Help to Make the Right Gift

A gift inspiration website with rich filtering and Montfort-inspired design. Built with React, Vite, Tailwind CSS, and [React Bits](https://reactbits.dev) background effects (Grainient + Ballpit).

## Features

- Filter by **buy / make**, gender, age, hobbies, topics, price range, and event
- 24 curated gift ideas with tips for handmade options
- Animated **Grainient** background across the page
- Interactive **Ballpit** section at the bottom

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `gift-inspire`).
2. Push this project to the `main` branch.
3. In the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`.

Your site will be live at:

**https://susannescholarbook.github.io/Giftly---make-the-right-gift/**

## Contact form setup

The contact form uses [Web3Forms](https://web3forms.com) (free, no backend needed).

1. Go to [web3forms.com](https://web3forms.com) and enter **your email address**
2. Copy the **Access Key** you receive
3. **Locally:** create a `.env` file (see `.env.example`) and paste the key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
4. **On GitHub Pages:** in your repo go to **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: your access key
5. Push to `main` — the form will then send emails to your inbox

## Color palette

| Name        | Hex       |
| ----------- | --------- |
| Light green | `#D4EDB8` |
| Soft pink   | `#F5C6D6` |
| Light yellow| `#FFF4C4` |
| White       | `#FFFFFF` |
| Gray        | `#E8ECF0` / `#4A5568` |
