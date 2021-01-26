:step_one
@echo &cls
@echo off & echo.
@echo off & echo.
echo          **        **     **   ******  **       **  *****   **       ******  *****         *
echo         ****      **     **    **      ** *   * **  **  **  **       **      **  **   * * * * * *
echo        **  **    *****  *****  ******  **  * *  **  *****   **       ******  *****       *   *
echo       ********     **     **   **      **   *   **  **  **  **       **      **  **     * * * *
echo      **      **   **     **    ******  **       **  *****   *******  ******  **   **   * v.0.1 *  
@echo off & echo.
@echo off & echo.
@REM  SET PATH=C:\Program Files\Nodejs;%PATH%
@REM  setx PATH "%PATH%;C:\Program Files\nodejs"
@REM echo "node build.js [path]"
echo The current directory is %CD%
set /p p="Enter project directory = " 
:step_two
node build.js %p%
echo "Press:"
echo "Any key - repeat"
echo "n - new directory"
echo "e - exit"
set /p r="Chose your destiny: "
:while
if %r%==n GOTO step_one
if %r%==e GOTO end
if %r%==r GOTO step_two
GOTO step_two
:end
