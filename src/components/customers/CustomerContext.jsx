import { createStore } from 'solid-js/store';
import { createContext, useContext, onMount, createSignal } from 'solid-js';

export const CustomerContext = createContext();

const customersDefault = {
  search: {
    page: 1,
    perPage: '10',
    sort: '-updated'
  },
  results: '',
  create: '',
  details: '',
  tab: 'search'  
};

export function CustomerProvider(props) {
  const [ customers, setCustomers ] = createStore(customersDefault),
    [ searchSettings, setSearchSettings ] = createSignal(),
    customersData = [
      customers,
      setCustomers
    ];
  onMount(() => {
  });
    
  return (
    <CustomerContext.Provider value={customersData}>
      {props.children}
    </CustomerContext.Provider>
  );}

export function useCustomer() { return useContext(CustomerContext); }