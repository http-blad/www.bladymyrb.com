# setup.ps1 - Run this in PowerShell to set up the project

Write-Host "🚀 Setting up Portfolio Project..." -ForegroundColor Green

# Check Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js is not installed. Please install from https://nodejs.org" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Node.js found: $(node --version)" -ForegroundColor Green

# Create project structure
New-Item -ItemType Directory -Force -Path "components/portfolio" | Out-Null
New-Item -ItemType Directory -Force -Path "public" | Out-Null

Write-Host "📁 Created folder structure" -ForegroundColor Green

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install
npm install framer-motion lucide-react

Write-Host "✅ Dependencies installed" -ForegroundColor Green

# Copy your page.tsx
Write-Host "📝 Creating page.tsx..." -ForegroundColor Yellow
# You would copy your code here

Write-Host "✨ Setup complete!" -ForegroundColor Green
Write-Host "👉 Run 'npm run dev' to start the development server" -ForegroundColor Cyan