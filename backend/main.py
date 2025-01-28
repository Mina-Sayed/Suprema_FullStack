from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/sum")
async def calculate_sum(upto: int):
    try:
        if upto < 1:
            return {
                "success": False,
                "value": None,
                "error": "Number must be greater than 0"
            }
        
        total = sum(range(1, upto + 1))
        return {
            "success": True,
            "value": total,
            "error": None
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
