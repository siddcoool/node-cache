# Cache API Demo

A simple API demonstration using tinyhttp and node-cache for in-memory caching.

## Installation

```bash
npm install
```

## Development

Run the server with Node.js watch mode:

```bash
node --watch app.js
```

## API Endpoints

### POST /:id
- Creates or updates a cached item
- Body: JSON object
- Returns: Created/Updated object
- Cache TTL: 15 seconds

## Dependencies

- @tinyhttp/app - Lightweight Express-like web framework
- @tinyhttp/logger - Logger middleware
- node-cache - Simple in-memory caching
- milliparsec - Body parsing middleware
