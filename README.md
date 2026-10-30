# CampusConnect: Smart Campus Management System

CampusConnect is a web-based campus information and student-service portal designed to centralize notices, upcoming events, campus directory, and service requests.

## Project Structure
```
campusconnect/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── validation.js
├── tests/
│   └── validation.test.js
├── package.json
├── .gitignore
├── .gitlab-ci.yml
└── README.md
```

## Features
- **Notice Board**: View and filter campus updates by category.
- **Student Dashboard**: Summarized view of new notices, events, and pending requests.
- **Service Request Portal**: Submit maintenance or IT support requests with input validation.
- **Automated CI/CD**: GitLab pipeline for building assets and running Node.js unit tests.

## Running Tests Locally
To execute the automated validation tests:
```bash
npm test
# OR
node tests/validation.test.js
```
