/**
 * Universal hook for managing component state and disabled status
 * Can be used with any component that has state and disabled props
 */

export interface ComponentStateProps<T = string> {
  state?: T | null;
  disabled?: boolean;
}

export interface ComponentStateReturn<T = string> {
  finalDisabled: boolean;
  finalState: T | null | undefined;
}

/**
 * Hook to determine final component state and disabled status
 * Handles the relationship between state and disabled props
 *
 * @param props - Component props containing state and disabled
 * @param disabledStates - Array of state values that should disable the component
 * @returns Object with finalDisabled and finalState
 */
export const useComponentState = <T = string>(
  props: ComponentStateProps<T>,
  disabledStates: T[] = ['disabled', 'loading'] as T[],
  defaultDisabledState?: T,
  defaultState?: T,
): ComponentStateReturn<T> => {
  const { state, disabled } = props;

  const isDisabledByState = state && disabledStates.includes(state);
  const isDisabledByProp = disabled === true;
  const finalDisabled = isDisabledByState || isDisabledByProp;

  // Determine final state with proper fallbacks:
  // - If disabled=true, use defaultDisabledState for styling
  // - If disabled=false, use state or defaultState
  const finalState =
    isDisabledByProp && defaultDisabledState ? defaultDisabledState : state || defaultState;

  return {
    finalDisabled,
    finalState,
  };
};
