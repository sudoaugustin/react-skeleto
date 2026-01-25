import { ComponentPropsWithoutRef, ElementType, ReactNode, createContext } from "react";

type TValue = number | string;

export type SkelComponentProps<T extends ElementType> = {
  sw?: TValue;
  sh?: TValue;
  sr?: TValue;
} & ComponentPropsWithoutRef<T>;

export const IsLoadingContext = createContext(false);

export function SkelRoot({ children, isLoading = true }: { children: ReactNode; isLoading: boolean }) {
  return <IsLoadingContext.Provider value={isLoading}>{children}</IsLoadingContext.Provider>;
}

type Placeholder<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? string : null;
};

export function generatePlaceholder<T, K extends keyof T>(length: number, primary: K): Placeholder<T, K>[] {
  return Array(length)
    .fill(null)
    .map((_, index) => ({ [primary]: `${String(primary)}-${index}` }) as Placeholder<T, K>);
}
