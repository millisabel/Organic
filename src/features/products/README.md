# Products Feature

Этот feature содержит всю логику для работы с продуктами в магазине.

## Структура

```
src/features/products/
├── hooks/
│   ├── useProducts.ts          # Основной хук для работы с продуктами
│   └── useProductSorting.ts    # Хук для сортировки продуктов
├── components/
│   ├── CategoryFilter/         # Фильтр по категориям
│   ├── ProductsList/           # Список продуктов с пагинацией
│   ├── ProductSorting/         # Компонент сортировки
│   └── ShopSection/            # Основная секция магазина
└── index.ts                    # Экспорты
```

## Хуки

### useProducts

Основной хук для работы с продуктами. Включает:

- Фильтрацию по категориям
- Поиск по названию и категории
- Пагинацию
- URL синхронизацию
- Адаптацию данных из JSON

```typescript
const {
  productCategories,
  displayedProducts,
  currentPage,
  selectedCategory,
  isPaginationVisible,
  hasMoreProducts,
  totalPages,
  handlePageChange,
  handleCategorySelect,
  handleLoadMore,
} = useProducts();
```

### useProductSorting

Хук для сортировки продуктов по различным критериям:

- По названию (A-Z)
- По цене (возрастание/убывание)
- По рейтингу
- По новизне

```typescript
const sortedProducts = useProductSorting(products, 'price-asc');
```

## Компоненты

### CategoryFilter

Фильтр по категориям продуктов с кнопками.

### ProductsList

Список продуктов с поддержкой:

- Сетки продуктов
- Пагинации
- Кнопки "Load More"
- Ссылок на страницы продуктов

### ProductSorting

Выпадающий список для сортировки продуктов.

### ShopSection

Основная секция, объединяющая фильтрацию и список продуктов.

## Использование

```typescript
import { useProducts, ShopSection } from '@/features/products';

const ShopPage = () => {
  const {
    productCategories,
    displayedProducts,
    currentPage,
    selectedCategory,
    isPaginationVisible,
    hasMoreProducts,
    totalPages,
    handlePageChange,
    handleCategorySelect,
    handleLoadMore,
  } = useProducts();

  return (
    <ShopSection
      productCategories={productCategories}
      selectedCategory={selectedCategory}
      displayedProducts={displayedProducts}
      currentPage={currentPage}
      totalPages={totalPages}
      isPaginationVisible={isPaginationVisible}
      hasMoreProducts={hasMoreProducts}
      onCategorySelect={handleCategorySelect}
      onPageChange={handlePageChange}
      onLoadMore={handleLoadMore}
    />
  );
};
```

## Особенности

- **URL синхронизация**: Состояние фильтров сохраняется в URL
- **Адаптация данных**: Автоматическое преобразование JSON данных в типизированные объекты
- **Производительность**: Использование useMemo для оптимизации
- **Доступность**: Поддержка ARIA атрибутов
- **Типизация**: Полная TypeScript поддержка
