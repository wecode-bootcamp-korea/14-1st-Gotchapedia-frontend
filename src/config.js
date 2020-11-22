export const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=bts&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const MYPAGE_API = 'http://localhost:3000/data/myPage.json';
export const MYPAGE_TOKEN = '';

export const PREFERRED_API = 'http://localhost:3000/data/preferredCountryGenre.json';
// const PREFERRED_API =
// 'http://10.58.0.152:8000/analysis/favorite?category=country';
export const PREFERRED_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';

// const MYSTAR_API = 'http://10.58.7.222:8000/analysis/my_star';
export const MYSTAR_API = 'http://localhost:3000/data/my_star.json';
export const MYSTAR_TOKEN =
'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.YYwzzz5zYJpbkb6HvV-kEAOYXPLiS6LkmHRGHl5R1vA';