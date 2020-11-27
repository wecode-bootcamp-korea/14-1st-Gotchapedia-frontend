export const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=bts&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

// export const MYPAGE_API = '/data/myPage.json';
export const MYPAGE_API = 'http://10.58.0.152:8000/movie/movies/user?id=1';
export const WANNAWATCH_API =
  'http://10.58.0.152:8000/movie/interests?category=0';
export const WATCHING_API =
  'http://10.58.0.152:8000/movie/interests?category=1';
export const MYPAGE_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.YYwzzz5zYJpbkb6HvV-kEAOYXPLiS6LkmHRGHl5R1vA';

// export const PREFERRED_API =
// '/data/preferredCountryGenre.json';
export const PREFERRED_API =
  'http://10.58.0.152:8000/analysis/favorite?category=country';
export const PREFERRED_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.YYwzzz5zYJpbkb6HvV-kEAOYXPLiS6LkmHRGHl5R1vA';

export const MYSTAR_API = 'http://10.58.0.152:8000/analysis/my_star';
// export const MYSTAR_API = '/data/my_star.json';
export const MYSTAR_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.YYwzzz5zYJpbkb6HvV-kEAOYXPLiS6LkmHRGHl5R1vA';

export const DETAIL_API = 'http://10.58.1.5:8000/movie/23';
export const DETAIL_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';

export const MOVIEDETAIL_MOCKUP_API = 'http://localhost:3000/data/contentdata.json'
export const MOVIEDETAIL_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';

export const OVERVIEW_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';

export const COMMENT_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';

export const BELOVEDPEOPLE_API = '/data/belovedPeople.json';
