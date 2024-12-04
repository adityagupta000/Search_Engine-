# **Sahyadri College Articles API**

A simple RESTful API to manage and retrieve articles about Sahyadri College, including details about infrastructure, placements, and college overview.

---

## **Features**

- Fetch all articles.
- Retrieve a specific article by its ID.
- Search articles using a query string.

---

## **Tech Stack**

- **Node.js** with **Express**
- **body-parser** for JSON handling
- **CORS** for cross-origin requests

---

## **Getting Started**

### **1. Install Dependencies**

```bash
git clone https://github.com/your-username/sahyadri-api.git
cd sahyadri-api
npm install
```

### **2. Start the Server**

```bash
npm start
```

The API will run at `http://localhost:5000`.

---

## **API Endpoints**

### **1. Get All Articles**

- **URL**: `GET /api/articles`
- **Description**: Fetches all articles.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "About Sahyadri College",
      "content": "Sahyadri College is a premier institution in Mangalore."
    },
    {
      "id": 2,
      "title": "Infrastructure and Facilities",
      "content": "The campus has state-of-the-art facilities."
    }
  ]
  ```

### **2. Get Article by ID**

- **URL**: `GET /api/articles/:id`
- **Description**: Fetches an article by ID.
- **Example**: `GET /api/articles/2`
- **Response**:
  ```json
  {
    "id": 2,
    "title": "Infrastructure and Facilities",
    "content": "The campus has state-of-the-art facilities."
  }
  ```

### **3. Search Articles**

- **URL**: `GET /api/search?q=<query>`
- **Description**: Searches for articles by keyword.
- **Example**: `GET /api/search?q=placement`
- **Response**:
  ```json
  [
    {
      "id": 3,
      "title": "Placements at Sahyadri",
      "content": "Sahyadri has a strong placement record."
    }
  ]
  ```

---

## **Dataset**

| **ID** | **Title**                     | **Content**                                                                |
| ------ | ----------------------------- | -------------------------------------------------------------------------- |
| 1      | About Sahyadri College        | Sahyadri College is a premier institution located in Mangalore, Karnataka. |
| 2      | Infrastructure and Facilities | The campus has state-of-the-art labs, libraries, and learning spaces.      |
| 3      | Placements at Sahyadri        | Sahyadri has a great placement record with leading companies.              |
