# downgrade-tailwind.ps1
Write-Host "📦 Downgrading Tailwind CSS from v4 to v3..." -ForegroundColor Yellow

# Check current version
npm list tailwindcss

# Uninstall v4
npm uninstall tailwindcss

# Install v3 with all required dependencies
npm install tailwindcss@^3.4.0 postcss autoprefixer

# Reinitialize config (optional - backup your config first)
# npx tailwindcss init -p

Write-Host "✅ Tailwind CSS downgraded to v3!" -ForegroundColor Green
Write-Host "📋 Run 'npm list tailwindcss' to verify" -ForegroundColor Cyan