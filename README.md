# Web Dev Quiz App

An interactive web development quiz application powered by Google's Gemini AI. Test your knowledge across multiple programming languages and web technologies with dynamically generated questions.

## 🚀 Features

- **AI-Generated Questions**: Each quiz is uniquely generated using Google's Gemini AI
- **Multiple Topics**: HTML, CSS, JavaScript, React, Python, Java, and more
- **Difficulty Levels**: Easy, Medium, and Hard questions
- **Timed Challenges**: 60-second timer per question
- **Study Resources**: Curated learning materials for each topic
- **Performance Tracking**: Detailed quiz results and explanations

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM 7
- **Styling**: Custom CSS
- **AI Integration**: Google Generative AI (Gemini)
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key (free)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/web-dev-quiz.git
   cd web-dev-quiz
    ```
2. **Install Dependencies**
```bash
npm install
```

3. **Get a Gemini API Key**
- Visit Google AI Studio.
- Sign in with your Google account.
- Click "Create API Key".
- Copy your new API key.

4. **Set up environment variables**
- Create a .env file in the root directory:
```bash
REACT_APP_GEMINI_API_KEY=your_api_key_here
```

5. **Update the API key in App.js**
- Open src/App.js and replace the API key line with:
```bash
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
```

6. **Start the development server**
```bash
npm start
```

7. **Open http://localhost:3000 to view it in your browser**

## 🏗️ Project Structure

*(navigation bar and footer live under `src/components` and are
memoized with `React.memo` so they don’t re-render on every state change.)*

```bash
web-dev-quiz/
├── public/                  # Static files
│   ├── index.html           # Main HTML file
│   ├── favicon.ico          # Browser icon
│   ├── manifest.json        # PWA manifest
│   └── logo*.png            # App icons
├── src/                      # Source code
│   ├── components/           # Reusable components (navbar, footer, etc.)
│   ├── styles/               # CSS styles
│   │   ├── App.css           # Main app styles
│   │   └── index.css         # Global styles
│   ├── App.js                # Main application
│   ├── index.js              # Entry point
│   └── reportWebVitals.js    # Performance monitoring
├── .env                      # Environment variables
├── .gitignore                # Git ignore file
├── package.json              # Dependencies
├── README.md                 # This file
├── check-models.js           # Utility to check available models
└── test-ai.js                # Test script for AI
```

## 🎯 Usage
- **Start a Quiz**: Click "Start Quiz" on the home page
- **Select Topic**: Choose from HTML, CSS, JavaScript, React, Python, or Java
- **Choose Difficulty**: Pick Easy, Medium, or Hard
- **Answer Questions**: You have 60 seconds per question
- **View Results**: See your score and correct answers with explanations

## 🧪 Testing AI Models
- You can test which Gemini models are available with:
```bash
node check-models.js YOUR_API_KEY
```

## Test a simple AI generation with:
```bash
node test-ai.js
```
## 🚀 Deployment
- Build for production
```bash
npm run build
```
## Deploy to Netlify
- Push to GitHub
- Import project to Netlify
- Build command: npm run build
- Publish directory: build
- Add environment variable

## 🤝 Contributing
- Contributions are welcome! Please feel free to submit a Pull Request.
- Fork the repository
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## 📝 License
- This project is licensed under the ISC License.

## 🙏 Acknowledgments
- Google Gemini AI for providing the AI capabilities
- Lucide for the beautiful icons
- Create React App for the build setup

## ⚠️ Troubleshooting
**Q: AI questions aren't generating**
- A: Check that your API key is valid and has the Generative Language API enabled

**Q: 404 errors with Gemini models**
- A: Try using "gemini-pro" instead of "gemini-1.5-flash" in App.js

**Q: App won't start**
- A: Run npm install to ensure all dependencies are installed