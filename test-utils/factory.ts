export const factory =
  <TData>(create: (index: number) => TData) =>
  (count: number): TData[] => {
    return Array.from({ length: count }, (_, index) => create(index + 1));
  };
