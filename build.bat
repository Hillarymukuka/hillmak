@echo off
echo Building HillMak website for production...
echo.
npm run build
echo.
if %errorlevel% equ 0 (
    echo Build completed successfully!
) else (
    echo Build failed. Please check the errors above.
)
echo.
pause
