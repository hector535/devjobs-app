import { Button } from "@/components";
import { type ListFooterProps } from "./list-footer.types";
import style from "./list-footer.module.scss";

export const ListFooter = (props: ListFooterProps) => {
  const { context } = props;
  const { loadMore, isLoadingMore } = context!;

  return (
    <div className={style.footer_container}>
      <Button loading={isLoadingMore} onClick={loadMore}>
        {isLoadingMore ? "Loading..." : "Press to load more"}
      </Button>
    </div>
  );
};
