# useLoadMore Hook

Универсальный хук для управления пагинацией и загрузкой элементов в любых секциях.

## Использование

```tsx
import { useLoadMore } from '@/hooks/useLoadMore';
import LoadMoreButton from '@/components/shared/Button/LoadMoreButton';

const MySection = ({ data }) => {
  const { displayedItems, hasMore, isLoading, remainingCount, loadMore, reset } = useLoadMore({
    data: data,
    itemsPerPage: 6,
    initialItems: 6,
  });

  return (
    <div>
      {/* Отображаем элементы */}
      {displayedItems.map((item) => (
        <MyCard key={item.id} data={item} />
      ))}

      {/* Кнопка загрузки */}
      {hasMore && (
        <LoadMoreButton
          onLoadMore={loadMore}
          hasMore={hasMore}
          isLoading={isLoading}
          remainingCount={remainingCount}
          children="Load More Items"
        />
      )}
    </div>
  );
};
```

## Параметры

### UseLoadMoreOptions<T>

| Параметр       | Тип      | Обязательный | Описание                                                     |
| -------------- | -------- | ------------ | ------------------------------------------------------------ |
| `data`         | `T[]`    | Да           | Массив данных для пагинации                                  |
| `itemsPerPage` | `number` | Да           | Количество элементов для загрузки за раз                     |
| `initialItems` | `number` | Нет          | Начальное количество элементов (по умолчанию = itemsPerPage) |

## Возвращаемые значения

### UseLoadMoreReturn<T>

| Свойство         | Тип          | Описание                                  |
| ---------------- | ------------ | ----------------------------------------- |
| `displayedItems` | `T[]`        | Текущие отображаемые элементы             |
| `hasMore`        | `boolean`    | Есть ли еще элементы для загрузки         |
| `isLoading`      | `boolean`    | Состояние загрузки                        |
| `remainingCount` | `number`     | Количество оставшихся элементов           |
| `loadMore`       | `() => void` | Функция для загрузки следующей порции     |
| `reset`          | `() => void` | Функция для сброса к начальному состоянию |

## Особенности

- **Автоматическая задержка**: Добавлена задержка 300мс для лучшего UX
- **Типизация**: Полная поддержка TypeScript
- **Универсальность**: Работает с любыми типами данных
- **Сброс**: Автоматический сброс при изменении данных

## Примеры использования

### NewsSection

```tsx
const { displayedItems, hasMore, isLoading, remainingCount, loadMore } = useLoadMore({
  data: filteredNews,
  itemsPerPage: itemsDisplay || 6,
  initialItems: itemsDisplay || 6,
});
```

### ProductSection

```tsx
const { displayedItems, hasMore, isLoading, remainingCount, loadMore } = useLoadMore({
  data: products,
  itemsPerPage: 8,
  initialItems: 8,
});
```
