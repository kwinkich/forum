import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createContext } from 'react';
import Store from './store/store';
import { StoreContext } from './store/store';


interface State {
	store: Store;
}

const store = new Store();

export const Context = createContext<State>({
	store,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StoreContext.Provider value={store}>
		<Context.Provider value={{ store }}>
					<App />
		</Context.Provider>
	</StoreContext.Provider>,
)
