import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.route').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./pages/history/history.route').then((m) => m.HISTORY_ROUTES),
  },
  {
    path: 'subscriptions',
    loadChildren: () =>
      import('./pages/subscriptions/subscriptions.route').then(
        (m) => m.SUBSCRIPTIONS_ROUTES,
      ),
  },
  {
    path: 'watch',
    loadChildren: () =>
      import('./pages/watch/watch.route').then((m) => m.WATCH_ROUTES),
  },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./pages/playlist/playlist.route').then((m) => m.PLAYLIST_ROUTES),
  },
  {
    path: 'playlist',
    loadChildren: () =>
      import('./pages/playlist-detail/playlist-detail.route').then(
        (m) => m.PLAYLIST_DETAIL_ROUTES,
      ),
  },
  {
    path: 'watch-later',
    loadChildren: () =>
      import('./pages/watch-later/watch-later.route').then(
        (m) => m.WATCH_LATER_ROUTES,
      ),
  },
  {
    path: 'liked-videos',
    loadChildren: () =>
      import('./pages/liked-videos/liked-videos.route').then(
        (m) => m.LIKED_VIDEOS_ROUTES,
      ),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('./pages/search/search.route').then((m) => m.SEARCH_ROUTES),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./pages/categories/categories.route').then(
        (m) => m.CATEGORIES_ROUTES,
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./pages/category-detail/category-detail.route').then(
        (m) => m.CATEGORY_DETAIL_ROUTES,
      ),
  },
  {
    path: 'profile/:id',
    loadChildren: () =>
      import('./pages/profile/profile.route').then((m) => m.PROFILE_ROUTES),
  },

  {
    path: 'video-control',
    loadChildren: () =>
      import('./pages/video-control/video-control.route').then(
        (m) => m.VIDEOCONTROL_ROUTES),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
