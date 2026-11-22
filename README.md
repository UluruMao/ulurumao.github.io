# Mao Tianchen Game Engineering Portfolio

Personal portfolio website for my game engineering work, developed in **November 2026** and published at **[ulurumao.github.io](https://ulurumao.github.io/)**. The site presents five game projects through gameplay captures, design decisions, implementation excerpts and measured engineering results.

## Explore

| Page | Purpose |
|---|---|
| [Home](https://ulurumao.github.io/) | Introduction and selected projects |
| [Portfolio](https://ulurumao.github.io/portfolio.html) | Five project cards with category filters |
| [About me](https://ulurumao.github.io/about.html) | Background and game engineering interests |
| [Snake Duel](https://ulurumao.github.io/snake-duel.html) | Visible survival-first AI, CRT art direction, scheduling improvements and live C++ GDExtension |
| [ZombieHunter](https://ulurumao.github.io/zombiehunter.html) | Unreal gameplay migration from Blueprints to C++, lifecycle rules and level design |
| [Mu Torere Plus](https://ulurumao.github.io/mu-torere-plus.html) | Board variation, legal moves and adversarial search |
| [Autonomous shooter](https://ulurumao.github.io/autonomous-shooter.html) | Godot control architecture, native A* and predictive movement |
| [Monsterfront](https://ulurumao.github.io/monsterfront.html) | Turn-based combat balance, consistent resolution and visual feedback |

## Technology and structure

The deployed website uses **static HTML5, CSS and vanilla JavaScript**. There is no framework, package installation, build step, server-side application or API key needed to serve this repository. The HTML retains project text and navigation without JavaScript. JavaScript adds category filtering, image enlargement and the home-page interaction. Google Fonts are requested when online, with system-font fallbacks.

```text
index.html                  Home
portfolio.html              Project collection
about.html                  Background and interests
snake-duel.html              Snake Duel case study
zombiehunter.html            Unreal FPS case study
mu-torere-plus.html          Java board-game case study
autonomous-shooter.html      Godot shooter case study
monsterfront.html            Combat-system case study
assets/style.css            Shared layout and typography
assets/portfolio.css        Cards, project pages, tables and code excerpts
assets/app.js               Filters, dialogs and interactive behaviour
assets/projects/            Gameplay images and annotated captures
```

## Preview locally

From the repository root, run:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open [localhost:4173](http://127.0.0.1:4173/). Opening `index.html` directly also works for the static content; an HTTP preview best matches hosting.

## Maintain the site

Edit the relevant root HTML page for a case study. When changing a project's summary or technology tags, update its card in `portfolio.html` and, when featured there, `index.html`. Keep asset paths relative so they work in local previews and GitHub Pages. Add new media under `assets/projects`, with descriptive alternative text and a caption that matches what the capture actually shows.

This repository contains the exported website. The separate local content generator and authoring notes are not included; edit these deployed HTML files directly. Do not run a stale external generator over recent Git edits.

## Publish with Git

The website is served by GitHub Pages from this repository. Preserve its existing Pages configuration. Review the diff, commit named files with a meaningful message, then push the `main` branch:

```sh
git diff --check
git diff
git add snake-duel.html index.html portfolio.html assets/projects/snake-native-backend.webp README.md
git commit -m "Update Snake Duel native AI case study"
git push origin main
```

Allow GitHub Pages to finish deploying before checking the live page. Use ordinary commits and pushes to retain reviewable history.

## Design and verification

The cream background, dark typography, orange accents and illustrated elements are retained across pages. Native links and buttons, a skip link, visible keyboard focus, labelled dialogs, Escape dismissal, reduced-motion styles and scrollable wide tables support access on desktop and mobile.

Project pages distinguish gameplay rewards from AI utility and separate controlled CPU measurements from rendered responsiveness. Snake Duel's **200.14 to 33.97 ms** world-update result belongs to its earlier scheduling stage; **1.950 to 0.047 ms** BFS/path CPU result belongs to the later C++ comparison. Neither is a general FPS claim.

## Contribution and credits

I set the content hierarchy, visual direction and engineering focus, selected project evidence and reviewed the results. Codex assisted with coding and content refinement. Each project page records relevant tutorial foundations, third-party assets and assistance. The website screenshots and project materials are supplied for this portfolio; separate game source repositories carry their own notices. This README does not assign a new licence to those materials.
