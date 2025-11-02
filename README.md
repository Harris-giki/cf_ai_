# AI Chatbot with Cloudflare Agents SDK

A modern AI-powered chatbot built with Cloudflare Workers and Agents SDK.

## Features

-  **Interactive Chat Interface** - Real-time conversation with AI
-  **Streaming Responses** - Get instant, streaming AI responses
-  **Persistent Storage** - Chat history stored in Cloudflare Durable Objects

##  Prerequisites

Before you begin, make sure you have:

- **Node.js** (v18 or later) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Cloudflare account** - Sign up at [cloudflare.com](https://www.cloudflare.com/)
- **OpenAI API Key** - Get one from [platform.openai.com](https://platform.openai.com/api-keys)

##  Getting Started

### Step 1: Clone or Download the Repository

```bash
git clone <https://github.com/Harris-giki/cf_ai_>
cd cloudfare-sdk
```

Or download and extract the ZIP file to your desired location.

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

This will install all the necessary dependencies including React, Vite, Cloudflare Workers types, and AI SDK packages.

### Step 3: Configure Environment Variables

Create a `.dev.vars` file in the root directory (if it doesn't exist):

```bash
touch .dev.vars
```

Add your OpenAI API key to the `.dev.vars` file:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### Step 4: Run the Application Locally

Start the development server:

```bash
npm run start
```

##  Project Structure

```
cloudfare-sdk/
├── src/
│   ├── app.tsx              # Main chat UI component
│   ├── client.tsx           # React client entry point
│   ├── server.ts            # Cloudflare Worker and AI agent logic
│   ├── tools.ts             # AI tool definitions
│   ├── utils.ts             # Utility functions for tool processing
│   ├── shared.ts            # Shared constants
│   ├── styles.css           # Global styles
│   ├── components/          # React UI components
│   │   ├── avatar/
│   │   ├── button/
│   │   ├── card/
│   │   ├── loader/
│   │   ├── slot/
│   │   ├── textarea/
│   │   ├── tool-invocation-card/
│   │   ├── tooltip/
│   │   └── memoized-markdown.tsx
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn, etc.)
│   └── providers/
│       ├── index.tsx        # Provider setup
│       └── TooltipProvider.tsx
├── public/                  # Static assets
├── index.html              # HTML entry point
├── wrangler.jsonc          # Cloudflare Workers configuration
├── vite.config.ts          # Vite build configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```


## Contributing

Feel free to submit issues and enhancement requests!
