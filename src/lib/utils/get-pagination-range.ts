// Based on mantine usePagination hook
// https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/hooks/src/use-pagination/use-pagination.ts

import { getRange } from "./get-range";

export interface UsePaginationOptions {
  /** Controlled active page number */
  page?: number;

  /** Total amount of pages */
  total: number;

  /** Siblings amount on left/right side of selected page, defaults to 1 */
  siblings?: number;

  /** Amount of elements visible on left/right edges, defaults to 1  */
  boundaries?: number;
}

export const DOTS = "dots";

export const getPaginationRange = ({
  total,
  siblings = 1,
  boundaries = 1,
  page = 1,
}: UsePaginationOptions): (number | "dots")[] => {
  const _total = Math.max(Math.trunc(total), 0);

  const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
  if (totalPageNumbers >= _total) {
    return getRange(1, _total);
  }

  const leftSiblingIndex = Math.max(page - siblings, boundaries);
  const rightSiblingIndex = Math.min(page + siblings, _total - boundaries);

  const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
  const shouldShowRightDots = rightSiblingIndex < _total - (boundaries + 1);

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = siblings * 2 + boundaries + 2;
    return [
      ...getRange(1, leftItemCount),
      DOTS,
      ...getRange(_total - (boundaries - 1), _total),
    ];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = boundaries + 1 + 2 * siblings;
    return [
      ...getRange(1, boundaries),
      DOTS,
      ...getRange(_total - rightItemCount, _total),
    ];
  }

  return [
    ...getRange(1, boundaries),
    DOTS,
    ...getRange(leftSiblingIndex, rightSiblingIndex),
    DOTS,
    ...getRange(_total - boundaries + 1, _total),
  ];
};
