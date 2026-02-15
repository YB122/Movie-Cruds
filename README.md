# NoteFlow - Movies CRUD System 🎬

A modern, feature-rich CRUD (Create, Read, Update, Delete) application for managing movie collections, built with vanilla JavaScript, Bootstrap 5, and LocalStorage persistence. This project demonstrates advanced DOM manipulation, form validation, and responsive design principles.

## 📋 Project Overview

NoteFlow is a complete movies management system developed during Week 2 of the NTI Open Source Application Developer Track. It showcases proficiency in JavaScript fundamentals, DOM manipulation, event handling, data persistence, and modern web development practices.

**Project Title**: NoteFlow CRUDS System  
**Tagline**: Manage your ideas effortlessly  
**Duration**: Week 2 - NTI Hire Ready Program  
**Tech Stack**: Vanilla JavaScript, Bootstrap 5, SweetAlert2, LocalStorage

## ✨ Key Features

### Core CRUD Operations
- **Create**: Add new movies with name, rating, description, and photo upload
- **Read**: Display all movies in a responsive card grid layout
- **Update**: Edit existing movie entries with pre-populated forms
- **Delete**: Remove individual movies with confirmation prompts
- **Search**: Filter movies by name or rating in real-time

### Advanced Functionality
- **Form Validation**: Real-time regex-based validation with error messages
- **Image Upload**: File upload with preview and format validation
- **LocalStorage Persistence**: Data persists across browser sessions
- **Dynamic DOM Creation**: Entire UI built programmatically with JavaScript
- **Search Modes**: Toggle between searching by movie name or rating
- **Responsive Design**: Mobile-first approach with Bootstrap grid system
- **User Feedback**: SweetAlert2 integration for elegant notifications
- **Error Handling**: Comprehensive validation for all input fields

### Validation Rules
- **Movie Name**: Minimum 4 characters, no quotes
- **Rating**: Numeric value between 0.0 and 5.0
- **Description**: Alphanumeric with punctuation support
- **Photo**: Valid image formats (jpg, jpeg, png, gif, webp, svg, bmp, ico, tiff, avif)

## 🛠️ Technologies Used

### Core Technologies
- **HTML5**: Semantic structure and file upload API
- **CSS3**: Custom properties, Grid, Flexbox, modern animations
- **JavaScript (ES6+)**: 
  - DOM manipulation
  - Event handling
  - Regular expressions
  - FileReader API
  - LocalStorage API
  - IIFE pattern
  - Arrow functions

### Frameworks & Libraries
- **Bootstrap 5.x**: Responsive grid system and utility classes
- **SweetAlert2**: Beautiful, customizable alert dialogs
- **Font Awesome**: Icon library for UI enhancement
- **Google Fonts (Outfit)**: Modern typography

## 📁 Project Structure

```
noteflow-movies-crud/
├── index.html              # Main HTML file
├── css/
│   ├── bootstrap.min.css   # Bootstrap framework
│   ├── all.min.css         # Font Awesome icons
│   ├── main.css            # Custom styles
│   └── media.css           # Responsive styles
├── js/
│   ├── bootstrap.bundle.min.js
│   └── main.js             # Core application logic (475 lines)
├── node_modules/
│   └── sweetalert2/        # Alert library
└── README.md               # Documentation
```

## 🎨 Design Features

### Color Scheme (Dark Theme)
```css
--bg-color: #0f172a        /* Primary background */
--card-bg: #1e293b         /* Card backgrounds */
--text-primary: #e2e8f0    /* Main text */
--text-secondary: #94a3b8  /* Secondary text */
--accent-color: #3b82f6    /* Primary actions */
--accent-hover: #2563eb    /* Hover states */
--danger-color: #ef4444    /* Delete actions */
--warning-color: #f59e0b   /* Update actions */
```

### UI Components
- Gradient text headings (blue to purple)
- Glassmorphic movie cards
- Input fields with focus states and shadows
- Responsive grid layout (1-2-3 columns)
- Image preview on file upload
- Badge rating system
- Smooth hover transitions

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of JavaScript and DOM
- Node.js (for npm dependencies) - optional if using CDN

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YB122/Movie-Cruds.git
   cd noteflow-movies-crud
   ```

2. **Install dependencies (if using npm)**
   ```bash
   npm install sweetalert2
   ```
   
   **OR use CDN** (add to HTML):
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
   <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html
   # Or use a local server
   python -m http.server 8000
   # Navigate to http://localhost:8000
   ```

### Usage

1. **Adding a Movie**:
   - Fill in movie name (4+ characters)
   - Enter rating (0.0 to 5.0)
   - Add description
   - Upload an image
   - Click "Create Movie"

2. **Searching Movies**:
   - Type in search box
   - Click "Search Name" or "Search Rate" to filter

3. **Updating a Movie**:
   - Click "Update" button on any movie card
   - Modify fields as needed
   - Click "Update Movie"

4. **Deleting a Movie**:
   - Click "Delete" button on any movie card
   - Confirm deletion in prompt

## 💻 Code Architecture

### Key Components

#### 1. Application Initialization (IIFE Pattern)
```javascript
(function () {
  initializeApp();
})();
```
- Self-invoking function for encapsulation
- Prevents global namespace pollution
- Ensures code runs immediately on load

#### 2. Dynamic DOM Creation
```javascript
function initializeApp() {
  // Creates entire UI programmatically
  // Header, input section, output section
  // All form fields, buttons, labels
}
```

#### 3. Data Management
```javascript
var notesList;              // Array of movie objects
var currentIndex;           // Index for updates
var isUpdating = false;     // Update mode flag
var photoLoaded = false;    // Async image loading
```

#### 4. Validation System
```javascript
var regaxInput = {
  photoInput: /.*\.(jpg|jpeg|png|...)$/i,
  rateInput: /^([0-4](\.[0-9])?|5(\.0)?)$/,
  descriptionInput: /^[a-zA-Z0-9\s.,!?'"()-]+$/,
  nameInput: /^([^"]{4,})$/
};
```

#### 5. CRUD Operations
- **Create**: `submitNote("add")`
- **Read**: `displayAllMovie()`, `displayMovie()`
- **Update**: `updateSetup(index)`, `submitNote("update")`
- **Delete**: `deleteMovie(index)`

### Key Functions

| Function | Purpose |
|----------|---------|
| `initializeApp()` | Builds entire UI dynamically |
| `submitNote(flag)` | Handles create/update operations |
| `displayMovie(flag)` | Renders movies or filters search |
| `makeMovie(note, index)` | Creates movie card DOM elements |
| `deleteMovie(index)` | Removes movie with confirmation |
| `updateSetup(index)` | Prepares form for editing |
| `validateAllInput(flag)` | Validates specific input field |
| `checkAllInput()` | Validates all inputs before submit |
| `reSetIndex(i)` | Updates event handlers after deletion |

## 🔧 Advanced Features Explained

### 1. FileReader API for Image Upload
```javascript
var reader = new FileReader();
reader.onload = function (e) {
  photoSrc = e.target.result;  // Base64 data URL
  photoLoaded = true;
};
reader.readAsDataURL(file);
```
- Converts image to Base64 string
- Stores in LocalStorage (no server needed)
- Displays preview before submission

### 2. LocalStorage Persistence
```javascript
localStorage.setItem("notes", JSON.stringify(notesList));
notesList = JSON.parse(localStorage.getItem("notes")) || [];
```
- Survives page refreshes and browser restarts
- Stores data as JSON strings
- Fallback to empty array if no data exists

### 3. Real-time Search Filtering
```javascript
function displayMovie(flag) {
  for (let index = 0; index < notesList.length; index++) {
    if (!notesList[index][flag]
        .toLowerCase()
        .includes(searchInput.value.trim().toLowerCase())) {
      document.getElementById("movieSpecial")
        .children[index].classList.add("d-none");
    }
  }
}
```

### 4. Dynamic Event Binding
```javascript
deleteBtn.setAttribute("onclick", `deleteMovie(${index})`);
updateBtn.setAttribute("onclick", `updateSetup(${index})`);
```
- Updates event handlers when indices change
- Maintains correct references after deletions

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 600px (1 column)
- **Tablet**: 600px - 991px (2 columns)
- **Desktop**: ≥ 992px (3 columns)

### Bootstrap Grid Usage
```javascript
movieDiv.classList.add("col-md-6", "col-lg-4");
// Mobile: full width
// Tablet: 2 columns (col-md-6)
// Desktop: 3 columns (col-lg-4)
```

## 🎯 Learning Outcomes

This project demonstrates mastery of:

### JavaScript Fundamentals
✅ Variables, data types, operators  
✅ Functions (regular, arrow, IIFE)  
✅ Arrays and objects manipulation  
✅ Conditional statements and loops  
✅ Regular expressions (regex)  

### DOM Manipulation
✅ `createElement()`, `appendChild()`  
✅ `querySelector()`, `getElementById()`  
✅ `classList` manipulation  
✅ `setAttribute()`, `getAttribute()`  
✅ Event handling (`onclick`, `onkeyup`, `onchange`)  

### Web APIs
✅ LocalStorage API (setItem, getItem)  
✅ FileReader API (image upload)  
✅ JSON methods (stringify, parse)  

### Modern Development Practices
✅ Separation of concerns  
✅ DRY (Don't Repeat Yourself) principle  
✅ Error handling and validation  
✅ User experience considerations  
✅ Responsive design implementation  

## 🔍 Code Quality

### Best Practices Implemented
- Consistent naming conventions (camelCase)
- Modular function design (single responsibility)
- Input sanitization (trim, regex validation)
- Defensive programming (null checks, fallbacks)
- User feedback (validation messages, confirmations)
- Performance considerations (async image loading)

### Validation Coverage
| Field | Validation Type | Error Message |
|-------|----------------|---------------|
| Name | Length + Characters | "Name don't less than 3 letter" |
| Rating | Range (0.0-5.0) | "Rate must write from 0.0 to 5.0" |
| Description | Pattern matching | "Description must be at least one word" |
| Photo | File extension | "Photo must end with valid extensions" |

## 🚀 Future Enhancements

Planned features for future iterations:

### Phase 1 (Short-term)
- [ ] Delete all movies functionality
- [ ] Sort by rating or name
- [ ] Category/genre tagging system
- [ ] Export data to JSON file
- [ ] Import data from JSON file
- [ ] Dark/light theme toggle

### Phase 2 (Medium-term)
- [ ] Backend integration (Node.js + Express)
- [ ] Database storage (MongoDB)
- [ ] User authentication system
- [ ] Multi-user support
- [ ] API integration (OMDB/TMDB)
- [ ] Advanced filtering options

### Phase 3 (Long-term)
- [ ] Progressive Web App (PWA) features
- [ ] Offline functionality
- [ ] Cloud image storage
- [ ] Collaborative features
- [ ] Data analytics dashboard
- [ ] Mobile app (React Native)

## 🐛 Known Issues & Limitations

### Current Limitations
- LocalStorage has 5-10MB size limit (limits number of images)
- Base64 images increase storage size significantly
- No server-side validation or data backup
- Single-user system (no multi-user support)
- No image compression or optimization

### Workarounds
- Use smaller images (<500KB recommended)
- Clear old data periodically
- Export important data regularly
- Consider cloud storage for production use

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas
- Add unit tests (Jest, Mocha)
- Improve accessibility (ARIA labels, keyboard navigation)
- Add more validation rules
- Create additional themes
- Optimize image handling
- Add internationalization (i18n)

## 📄 License

This project is open source and available under the [Movie-Cruds]([https://yb122.github.io/Movie-Cruds/]).

## 👨‍💻 Author

**[Your Name]**
- GitHub: [@YB122](https://github.com/YB122)
- LinkedIn: [LinkedIn]([https://www.linkedin.com/in/youssef-benyamine-b55a81219/])

## 🙏 Acknowledgments

- **NTI (National Telecommunication Institute)** - Open Source Application Developer Track
- **Bootstrap Team** - Responsive framework
- **SweetAlert2** - Beautiful alert library
- **Font Awesome** - Icon library
- **MDN Web Docs** - JavaScript reference and learning resources

## 📞 Contact

For questions, suggestions, or collaboration:
- Email: youssefbenyamine2eme@gmail.com
- LinkedIn: [LinkedIn]([https://www.linkedin.com/in/youssef-benyamine-b55a81219/])


---

## 📊 Project Statistics

- **Lines of Code**: ~700+ lines (475 JS + CSS + HTML)
- **Functions**: 15+ core functions
- **Features**: 10+ major features
- **Validations**: 4 regex patterns
- **Components**: 20+ DOM elements created dynamically
- **Development Time**: Week 2 (NTI Track)

---

⭐ **If you find this project helpful or impressive, please consider giving it a star!** ⭐

*Built with passion and dedication during the NTI Open Source Application Developer Track - Week 2*

**Note**: This project demonstrates pure vanilla JavaScript without frameworks like React or Vue, showcasing fundamental web development skills and DOM manipulation mastery.
