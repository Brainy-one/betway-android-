# Create placeholder PNG icons using .NET
Add-Type -AssemblyName System.Drawing

function Create-Icon {
    param($size, $filename)
    
    $bitmap = New-Object System.Drawing.Bitmap($size, $size)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    
    # Gradient background
    $rect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $rect,
        [System.Drawing.Color]::FromArgb(16, 185, 129),
        [System.Drawing.Color]::FromArgb(59, 130, 246),
        45
    )
    $graphics.FillRectangle($brush, $rect)
    
    # Clock circle
    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, ($size * 0.04))
    $centerX = $size / 2
    $centerY = $size / 2
    $radius = $size * 0.35
    $graphics.DrawEllipse($pen, ($centerX - $radius), ($centerY - $radius), ($radius * 2), ($radius * 2))
    
    # Hour hand
    $pen2 = New-Object System.Drawing.Pen([System.Drawing.Color]::White, ($size * 0.06))
    $pen2.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pen2.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $graphics.DrawLine($pen2, $centerX, $centerY, ($centerX + $radius * 0.3), ($centerY - $radius * 0.4))
    
    # Minute hand
    $pen3 = New-Object System.Drawing.Pen([System.Drawing.Color]::White, ($size * 0.04))
    $pen3.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pen3.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $graphics.DrawLine($pen3, $centerX, $centerY, ($centerX + $radius * 0.5), ($centerY - $radius * 0.2))
    
    # Center dot
    $dotRadius = $size * 0.03
    $graphics.FillEllipse([System.Drawing.Brushes]::White, ($centerX - $dotRadius), ($centerY - $dotRadius), ($dotRadius * 2), ($dotRadius * 2))
    
    # Save
    $bitmap.Save($filename, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $bitmap.Dispose()
    
    Write-Host "Created $filename"
}

# Create icons
Create-Icon 192 "icons\icon-192.png"
Create-Icon 512 "icons\icon-512.png"

Write-Host "Icons created successfully!"
