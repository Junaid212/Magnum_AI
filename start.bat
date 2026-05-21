@echo off
echo ============================================
echo  MagnumAI - Installing Dependencies
echo ============================================
cd /d "d:\Bright Media WORK\magnum-ai"

echo.
echo [1/2] Installing npm packages...
npm install

echo.
echo [2/2] Starting development server...
echo.
echo ============================================
echo  Open your browser at: http://localhost:3000
echo ============================================
npm run dev
pause
