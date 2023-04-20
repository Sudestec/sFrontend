import { createStore } from 'solid-js/store';
import { createContext, useContext, onMount, createEffect } from 'solid-js';
import { url } from './modules/pbConnection';
import getLocalToken from './modules/getLocalToken';

export const CustomerContext = createContext();

export function CustomerProvider(props) {
  const [ customers, setCustomers ] = createStore({state:'refetch', data: false}),
    customerData = {

    };
  onMount( () => {
    if (getLocalToken()) {
      setCustomers({state: 'loading', data: {token: getLocalToken()}});
      getCustomers(url, getLocalToken())
        .then( e => setCustomers({state: e.state, data: e.data}));
    } else (setCustomers({state: 'refetch'}));
  });
  return (

    <CustomerContext.Provider value={customerData}>

      {props.children}

    </CustomerContext.Provider>
  );}

export function usePocket() { return useContext(CustomerContext); }