import { VirtuosoGridMockContext } from "react-virtuoso";

/* All the code contained in this file is for testing purposes */

type WrapperProps = {
  children: React.ReactNode;
};

type VirtuosoGridMockWrapperProps = {
  viewportHeight: number;
  viewportWidth: number;
  itemHeight: number;
  itemWidth: number;
};

export const VirtuosoGridMockWrapper =
  (props: VirtuosoGridMockWrapperProps) =>
  ({ children }: WrapperProps) =>
    (
      <VirtuosoGridMockContext.Provider value={props}>
        {children}
      </VirtuosoGridMockContext.Provider>
    );
