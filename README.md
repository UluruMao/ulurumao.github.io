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


