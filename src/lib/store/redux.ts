import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    /* categoryPreview: categoryPreviewReducer,
    bookList: bookListReducer,
    bookDescription: bookDescriptionReducer,
    cart: cartReducer,
    search: searchReducer, */
})

export const store = configureStore({
    reducer: rootReducer,
  })

  export type RootState = ReturnType<typeof store.getState>
  
  export type AppDispatch = typeof store.dispatch