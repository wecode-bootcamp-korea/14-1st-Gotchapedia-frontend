export const SERVER = 'http://3.35.216.109:8000';

export const SIGNUP_API = `${SERVER}/users`;
export const LOGIN_API = `${SERVER}/users/log-in`;

// export const MAINPAGE_API2 = '/Data/mainpage.json';
export const MAINPAGE_API1 = `${SERVER}/movies/user?id=1`;
export const MAINPAGE_API2 = `${SERVER}/movies/user?id=2`;
export const MAINPAGE_API3 = `${SERVER}/movies/user?id=3`;
export const MAINPAGE_API4 = `${SERVER}/movies/user?id=4`;
export const MAINPAGE_API5 = `${SERVER}/movies/user?id=5`;
export const MAINPAGE_API6 = `${SERVER}/movies/user?id=6`;

export const MYPAGE_API = `${SERVER}/movies/user?id=2`;
export const WANNAWATCH_API = `${SERVER}/movies/interests?status=0`;
export const WATCHING_API = `${SERVER}/movies/interests?status=1`;
export const MYPAGE_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.YYwzzz5zYJpbkb6HvV-kEAOYXPLiS6LkmHRGHl5R1vA';

// export const PREFERRED_API = '/data/preferredCountryGenre.json';
// export const PREFERRED_GENRE_API = '/data/preferredCountryGenre.json';
export const PREFERRED_API = 'http://3.35.216.109:8000/analysis/favorite?category=country';
export const PREFERRED_GENRE_API = 'http://3.35.216.109:8000/analysis/favorite?category=genre';
export const PREFERRED_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.YYwzzz5zYJpbkb6HvV-kEAOYXPLiS6LkmHRGHl5R1vA';

export const MYSTAR_API = `${SERVER}/analysis/my_star`;
export const MYSTAR_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.YYwzzz5zYJpbkb6HvV-kEAOYXPLiS6LkmHRGHl5R1vA';

export const DETAIL_API = `${SERVER}/movies/22`;
export const DETAIL_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';

export const MOVIEDETAIL_MOCKUP_API =
  'http://localhost:3000/data/contentdata.json';
export const MOVIEDETAIL_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';

export const OVERVIEW_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';

export const COMMENT_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.GOPhcT6nmt8M7Apx1rI-fvvQfSDIMTtWMe371hZ3t8E';

export const BELOVEDPEOPLE_API = '/data/belovedPeople.json';
export const BELOVEDDIRECTOR_API = '/data/belovedDirector.json';
