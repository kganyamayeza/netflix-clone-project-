# Installation & Setup Guide

## Prerequisites
Python 3.7+ is required to run the Flask backend. If Python is not installed:

1. Download Python from [python.org](https://www.python.org/downloads/)
2. Run the installer and ensure "Add Python to PATH" is checked
3. Restart your terminal/PowerShell

## Installing Dependencies

After Python is installed, run these commands:

```powershell
pip install flask
pip install requests
```

## Running the Project

1. Open PowerShell/Command Prompt
2. Navigate to the project directory
3. Run the Flask server:
   ```powershell
   python app.py
   ```
4. Open your browser and visit: `http://localhost:5000`

## Troubleshooting

**Python not found**: Restart your terminal after installing Python and ensure it's in your PATH.

**Port 5000 already in use**: Change the port in `app.py` by modifying the last line to `app.run(debug=True, port=5001)`

**Module not found errors**: Ensure you've installed flask and requests with pip.

Made by kganya(phila)Mayeza
