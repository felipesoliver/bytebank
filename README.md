# Next.js Project | Bytebank

### Note***

This project is a micro-frontend based application, it's important to make sure all zones within it is simultaneously running:

### Getting Started

Before you begin, certificates your system meets the following requirements:

- [`Node.js 20`](https://nodejs.org/pt) or later.
- macOS, Windows (including WSL), or Linux.

You can manually run each app zone individually or use Docker to build full project, to do it:

- Open `/k8s` directory in terminal and run `docker compose up -d` command.

### Project Architecture Overview

This section outlines the folder structure of the project located at the `app-with-zones/` directory. It's divided by two independents zones: `full-site/` and `investments/`.

````
app-with-zones/
├── full-site/
│   └── */
├── investments/
│   └── */
├── api/
│   └── */
k8s/
└── */
````
