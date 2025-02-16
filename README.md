# Academic Portfolio Website

A professional academic portfolio website showcasing academic achievements, research expertise, and media contributions through an interactive and modern web interface.

## Tech Stack

- React.js frontend with TypeScript
- Tailwind CSS for styling
- Express.js backend
- Responsive and accessible design
- Dynamic content presentation

## Setup Instructions

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [your-repo-name]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=your_postgresql_database_url
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## Project Structure

- `client/`: React frontend application
  - `src/components/`: Reusable UI components
  - `src/pages/`: Page components
  - `src/lib/`: Utility functions and constants
  - `src/hooks/`: Custom React hooks

- `server/`: Express backend
  - `routes.ts`: API routes
  - `storage.ts`: Data storage interface
  - `db.ts`: Database configuration

- `shared/`: Shared TypeScript types and schemas

## Features

- Responsive design with mobile-first approach
- Research publications showcase
- Journalism portfolio
- Media coverage section
- Academic achievements and awards
- Contact information

## Development

- Run `npm run dev` to start both frontend and backend in development mode
- Frontend uses Vite for fast development experience
- Backend automatically restarts on file changes

## License

MIT License. See LICENSE for more information.
