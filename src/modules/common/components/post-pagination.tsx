import { DOTS, getPaginationRange } from "@/lib/utils/get-pagination-range";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/modules/common/components/pagination";

export default function PostPagination({
  page,
  totalPages,
  className,
}: {
  page: number;
  totalPages: number;
  className?: string;
}) {
  const paginationRange = getPaginationRange({
    page,
    total: totalPages,
  });

  if (totalPages <= 1) return null;
  return (
    <Pagination className={className}>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={{
                query: {
                  page: page - 1,
                },
              }}
            />
          </PaginationItem>
        )}
        {paginationRange.map((item, index) => (
          <PaginationItem key={index}>
            {item === DOTS ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                isActive={item === page}
                href={{
                  query: {
                    page: item,
                  },
                }}
              >
                {item}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        {page < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={{
                query: {
                  page: page + 1,
                },
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
