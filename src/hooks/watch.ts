/**
 * Watches for changes and notifies observers.
 * @param {T} initialValue - Initial value to set for the watched state.
 * @returns A tuple with:
 *    - A function to get the current value.
 *    - A function to set a new value.
 *    - A function to register observers and return an unsubscribe function.
 */
export const WatchFunction = <T>(initialValue?: T): [() => T, (newValue: T) => void, (observer: () => void) => () => void] => {
    let value: T = initialValue ?? null as T;  // Store the value with the specified type
    const observers: (() => void)[] = [];  // List of observer functions
  
    // Function to set a new value and notify observers if it changes
    const set = (newValue: T) => {
      if (newValue !== value) {
        value = newValue;
        notify();  // Notify all observers of the state change
      }
    };
  
    // Function to notify all registered observers
    const notify = () => {
      observers.forEach(observer => observer());
    };
  
    // Register a new observer and return a function to unsubscribe
    const observe = (observer: () => void) => {
      observers.push(observer);
  
      // Return a function to unsubscribe the observer
      return () => {
        const index = observers.indexOf(observer);
        if (index > -1) {
          observers.splice(index, 1);
        }
      };
    };
  
    // Return the getter function, setter function, and the observer registration function
    return [() => value, set, observe];
  };
  