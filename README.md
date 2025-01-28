# Number Sum Calculator

A full-stack application that calculates the sum of numbers from 1 to N using FastAPI and React TypeScript.

## Features

- FastAPI backend with async endpoint
- React TypeScript frontend with form validation
- Error handling and loading states
- CORS enabled for local development

## Project Structure
```
suprema-fullstack/
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
└── frontend/
    ├── src/
    │   ├── App.tsx         # Main React component
    │   └── index.tsx       # React entry point
    ├── public/             # Static files
    ├── package.json        # Node.js dependencies
    └── tsconfig.json       # TypeScript configuration
```

## Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn
- Git (optional)

## Setup Instructions

### Backend Setup

1. Create and activate virtual environment:
```bash
cd backend
python -m venv venv

# On Windows:
venv\Scripts\activate
# On Unix/MacOS:
source venv/bin/activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Start the FastAPI server:
```bash
python -m uvicorn main:app --reload --port 8888
```

The API will be available at http://localhost:8888

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm start
```

The frontend will be available at http://localhost:3000

## API Documentation

### Calculate Sum Endpoint

- **URL**: `/sum`
- **Method**: `POST`
- **Query Parameters**: 
  - `upto` (integer): The number up to which to calculate the sum
- **Response Format**:
```json
{
  "success": boolean,
  "value": number | null,
  "error": string | null
}
```

### Example Request

```bash
curl -X POST "http://localhost:8888/sum?upto=5"
```

### Example Response

```json
{
  "success": true,
  "value": 15,
  "error": null
}
```

## Development

- Backend uses FastAPI with CORS enabled for localhost:3000
- Frontend uses React 18 with TypeScript
- API calls are made using Axios
- Error handling implemented on both frontend and backend

## Troubleshooting

1. If you get module not found errors:
   - Ensure you're in the correct directory
   - Verify virtual environment is activated
   - Reinstall dependencies

2. If CORS errors occur:
   - Verify backend is running on port 8888
   - Check CORS configuration in main.py

3. If TypeScript errors occur:
   - Run `npm install` again
   - Verify tsconfig.json exists
   - Check file extensions (.tsx)
