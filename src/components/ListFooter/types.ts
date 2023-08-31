export type ListFooterProps = {
  context?: {
    loadMore: () => Promise<void>;
    isLoadingMore: boolean;
  };
};
