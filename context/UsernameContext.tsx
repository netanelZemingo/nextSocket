// // context/restaurant-context.js
// import { ReactNode, createContext, useContext } from "react";

// const UsernameContext = createContext();

// export function UsernameProvider({ children }: { children: ReactNode }) {
//   const [restaurant, setRestaurant] = useState(null);

//   const value = { restaurant, setRestaurant };

//   return <UsernameProvider.Provider value={value}>{children}</UsernameProvider.Provider>;
// }

// export function useRestaurant() {
//   return useContext(RestaurantContext);
// }

import { createContext, useContext } from "react";
export type GlobalContent = {
  username: string;
  setUsername: (c: string) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  username: "", // set a default value
  setUsername: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
