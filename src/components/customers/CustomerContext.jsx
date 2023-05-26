import { createStore } from 'solid-js/store';
import { createContext, useContext, createSignal } from 'solid-js';

export const TAB = Object.freeze({
  search: Symbol(),
  create: Symbol(),
});

const customersDefault = {
  search: {
    page: 1,
    perPage: '10',
    sort: '-updated',
  },
  results: '',
  create: '',
  details: '',
  tab: TAB.search,
};
export const CustomerContext = createContext();

export function CustomerProvider(props) {
  const [customers, setCustomers] = createStore(customersDefault),
    [settings, setSettings] = createSignal(),
    customersData = {
      customers: customers,
      setCustomers,
      settings,
      setSettings,
    };

  return (
    <CustomerContext.Provider value={customersData}>
      {props.children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  return useContext(CustomerContext);
}
