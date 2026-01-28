# create-shadcn-components.ps1
Write-Host "🚀 Creating shadcn/ui component files..." -ForegroundColor Green

# Define the component names
$components = @(
    # First batch from your screenshot
    "sidebar",
    "select",
    "toggle-group",
    "breadcrumb",
    "table",
    "command",
    "menubar",
    "popover",
    "badge",
    "chart",
    "input-otp",
    "navigation-menu",
    "progress",
    "carousel",
    "form",
    "toaster",
    "button",
    "label",
    "toggle",
    "sheet",
    "checkbox",
    "hover-card",
    "input",
    "slider",
    "use-toast",
    "pagination",
    
    # Second batch
    "aspect-ratio",
    "accordion",
    "toast",
    "avatar",
    "sonner",
    "calendar",
    "resizable",
    "scroll-area",
    "tooltip",
    "collapsible",
    "alert",
    "context-menu",
    "dialog",
    "skeleton",
    "alert-dialog",
    "switch",
    "textarea",
    "card",
    "separator",
    "dropdown-menu",
    "radio-group",
    "drawer",
    "tabs"
)

# Create components/ui directory if it doesn't exist
$uiPath = "components/ui"
if (-not (Test-Path $uiPath)) {
    New-Item -ItemType Directory -Force -Path $uiPath
    Write-Host "📁 Created directory: $uiPath" -ForegroundColor Green
}

# Template for .tsx component file
$componentTemplate = @"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const COMPONENT_NAME_VARIANTS = cva(
  "COMPONENT_NAME-base-styles",
  {
    variants: {
      variant: {
        default: "COMPONENT_NAME-default",
        destructive: "COMPONENT_NAME-destructive",
        outline: "COMPONENT_NAME-outline",
        secondary: "COMPONENT_NAME-secondary",
        ghost: "COMPONENT_NAME-ghost",
        link: "COMPONENT_NAME-link",
      },
      size: {
        default: "COMPONENT_NAME-default-size",
        sm: "COMPONENT_NAME-sm",
        lg: "COMPONENT_NAME-lg",
        icon: "COMPONENT_NAME-icon",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface COMPONENT_NAMEProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof COMPONENT_NAME_VARIANTS> {
  // Add custom props here
}

const COMPONENT_NAME = React.forwardRef<HTMLDivElement, COMPONENT_NAMEProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(COMPONENT_NAME_VARIANTS({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
COMPONENT_NAME.displayName = "COMPONENT_NAME"

export { COMPONENT_NAME, COMPONENT_NAME_VARIANTS }
"@

# Create each component file
$createdCount = 0
$skippedCount = 0

foreach ($component in $components) {
    $fileName = "$uiPath/$component.tsx"
    
    # Convert component name to PascalCase for the component name
    $componentName = (Get-Culture).TextInfo.ToTitleCase($component).Replace("-", "")
    
    if (-not (Test-Path $fileName)) {
        # Replace placeholder with actual component name
        $content = $componentTemplate.Replace("COMPONENT_NAME", $componentName)
        
        Set-Content -Path $fileName -Value $content
        Write-Host "✅ Created: $fileName" -ForegroundColor Green
        $createdCount++
    } else {
        Write-Host "⏭️  Skipped (already exists): $fileName" -ForegroundColor Yellow
        $skippedCount++
    }
}

Write-Host "`n📊 Summary:" -ForegroundColor Cyan
Write-Host "✅ Created: $createdCount files" -ForegroundColor Green
Write-Host "⏭️  Skipped: $skippedCount files" -ForegroundColor Yellow
Write-Host "📁 Total: $($components.Count) components processed" -ForegroundColor Cyan

# Create lib/utils.ts if it doesn't exist
$libPath = "lib"
if (-not (Test-Path $libPath)) {
    New-Item -ItemType Directory -Force -Path $libPath
}

$utilsPath = "$libPath/utils.ts"
if (-not (Test-Path $utilsPath)) {
    $utilsContent = @"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
"@
    Set-Content -Path $utilsPath -Value $utilsContent
    Write-Host "✅ Created: $utilsPath" -ForegroundColor Green
}

Write-Host "`n🎉 All component files created successfully!" -ForegroundColor Green
Write-Host "📦 Install required dependencies:" -ForegroundColor Cyan
Write-Host "npm install class-variance-authority clsx tailwind-merge lucide-react" -ForegroundColor Yellow