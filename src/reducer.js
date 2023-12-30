export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   token: null, change back after finish developing
  // token:
  //   "BQAZMrKU6duMO9I581nHT7AmMUfVhodQrq7QutO5xYO5c6aR5yZnS15TCYaLKpne8vD9XHM7dx0ZeA5xAvGkI9E04gnJRbhCou0HzGR9WYQQsPm5RVkm3BjfaLK1tYqXkrxrmI9E7L0YxTRUx1K-22T1XRm1Rd9u6E52iGR-RGHS1ZvvZ01zfTgU6HTCkgtd1dZnkU3O0FV3gCfwvpEP",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.currentSong,
      };

    default:
      return state;
  }
};

export default reducer;
