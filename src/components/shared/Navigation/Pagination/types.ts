export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number; // Максимальное количество видимых кнопок
  showFirstLast?: boolean; // Показывать ли кнопки "Первая" и "Последняя"
  showPrevNext?: boolean; // Показывать ли кнопки "Предыдущая" и "Следующая"
  showEllipsis?: boolean; // Показывать ли многоточие для скрытых страниц
}
