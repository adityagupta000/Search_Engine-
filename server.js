const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Articles dataset about Sahyadri College
let articles = [
  { id: 1, title: 'About Sahyadri College', content: 'Sahyadri College of Engineering & Management is a premier institution located in Mangalore, Karnataka.' },
  { id: 2, title: 'Infrastructure and Facilities', content: 'The campus features state-of-the-art infrastructure, including modern labs, libraries, and a vibrant environment for learning.' },
  { id: 3, title: 'Academic Excellence', content: 'Sahyadri offers top-notch education in engineering, management, and other disciplines, emphasizing innovation and research.' },
  { id: 4, title: 'Student Life at Sahyadri', content: 'The college provides a holistic environment with cultural, technical, and sports activities to enhance students’ overall development.' },
  { id: 5, title: 'Placements at Sahyadri', content: 'Sahyadri has a strong placement record, with partnerships with leading companies and a focus on student employability.' },
  { id: 6, title: 'Research and Innovation', content: 'The institution fosters a culture of research and innovation with dedicated labs, incubation centers, and industry collaborations.' },
];

// Endpoint to retrieve all articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// Endpoint to retrieve an article by ID
app.get('/api/articles/:id', (req, res) => {
  const articleId = parseInt(req.params.id, 10);
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }

  res.json(article);
});

// Search endpoint with "not found" feature
app.get('/api/search', (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ message: 'Search query (q) is required' });
  }

  const lowercaseQuery = query.toLowerCase();
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.content.toLowerCase().includes(lowercaseQuery)
  );

  if (filteredArticles.length === 0) {
    return res.status(404).json({ message: 'No articles found' });
  }

  res.json(filteredArticles);
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
