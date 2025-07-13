# Card Component

Универсальный компонент карточки с использованием CVA (Class Variance Authority) для управления стилями.

## Улучшения в новой версии

### ✅ Что улучшено:

- **Упрощенная структура CVA**: Один вариант вместо множественных вариантов
- **Типобезопасность**: Строгая типизация с TypeScript
- **Обработка ошибок**: Fallback для изображений и состояния загрузки
- **Доступность**: Улучшенная поддержка клавиатурной навигации
- **Производительность**: Оптимизированная структура классов

### ❌ Что было исправлено:

- Убраны небезопасные приведения типов (`as unknown as`)
- Устранено дублирование логики между card и content variants
- Упрощена функция выбора вариантов (убраны множественные if/else)
- Добавлена обработка состояний загрузки и ошибок изображений

## Использование

### Базовый пример

```tsx
import Card from '@/components/ui/Card';

<Card
  variant="default"
  imgProps={{
    name: 'image.webp',
    folder: 'products',
    alt: 'Product image',
  }}
>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>;
```

### Варианты карточек

#### Продуктовая карточка

```tsx
<Card
  variant="product"
  imgProps={{
    name: 'Banana.webp',
    folder: 'products',
    alt: 'Fresh Banana',
  }}
  onClick={() => console.log('Product clicked')}
>
  <h3>Fresh Banana</h3>
  <p>$2.99</p>
</Card>
```

#### Детальная продуктовая карточка

```tsx
<Card
  variant="productDetailed"
  imgProps={{
    name: 'Banana.webp',
    folder: 'products',
  }}
>
  <div>
    <h3>Fresh Banana</h3>
    <p>Organic, locally sourced bananas...</p>
    <div className="price">$2.99</div>
  </div>
</Card>
```

#### Карточка команды

```tsx
<Card
  variant="team"
  imgProps={{
    name: 'john_doe.webp',
    folder: 'teams',
    alt: 'John Doe',
  }}
>
  <h3>John Doe</h3>
  <p>Senior Developer</p>
</Card>
```

#### Новостная карточка

```tsx
<Card
  variant="news"
  imgProps={{
    name: 'news_1.webp',
    folder: 'news',
  }}
>
  <div>
    <h3>Latest News</h3>
    <p>News description...</p>
    <time>2024-01-15</time>
  </div>
</Card>
```

## API

### Props

| Prop               | Type                         | Default     | Description                |
| ------------------ | ---------------------------- | ----------- | -------------------------- |
| `variant`          | `CardVariants`               | `'default'` | Тип карточки               |
| `children`         | `ReactNode`                  | -           | Содержимое карточки        |
| `imgProps`         | `ImageProps`                 | -           | Свойства изображения       |
| `className`        | `string`                     | -           | Дополнительные CSS классы  |
| `imgClassName`     | `string`                     | -           | CSS классы для изображения |
| `contentClassName` | `string`                     | -           | CSS классы для контента    |
| `badges`           | `ReactNode \| ReactNode[]`   | -           | Бейджи карточки            |
| `onClick`          | `() => void`                 | -           | Обработчик клика           |
| `onKeyDown`        | `(e: KeyboardEvent) => void` | -           | Обработчик клавиатуры      |
| `tabIndex`         | `number`                     | -           | Tab index для навигации    |
| `ariaLabel`        | `string`                     | -           | ARIA label для доступности |

### ImageProps

| Prop      | Type                | Default      | Description                       |
| --------- | ------------------- | ------------ | --------------------------------- |
| `name`    | `string`            | **required** | Имя файла изображения             |
| `folder`  | `string`            | **required** | Папка в assets/images             |
| `alt`     | `string`            | -            | Alt текст (автогенерация из name) |
| `loading` | `'lazy' \| 'eager'` | `'lazy'`     | Стратегия загрузки                |

### Варианты (CardVariants)

- `default` - Стандартная карточка
- `product` - Компактная продуктовая карточка
- `productDetailed` - Детальная продуктовая карточка
- `team` - Карточка участника команды
- `category` - Карточка категории
- `gallery` - Галерейная карточка
- `news` - Новостная карточка
- `review` - Карточка отзыва

## Особенности

### Обработка состояний изображения

- **Загрузка**: Показывает индикатор загрузки
- **Ошибка**: Показывает fallback с сообщением об ошибке
- **Успех**: Показывает изображение

### Доступность

- Автоматическое назначение `role="button"` для интерактивных карточек
- Поддержка клавиатурной навигации (Enter, Space)
- ARIA атрибуты для скрин-ридеров

### Типобезопасность

- Строгая типизация всех props
- Type-safe варианты через CVA
- IntelliSense поддержка в IDE

## Миграция со старой версии

### Было:

```tsx
// Старый подход с множественными вариантами
const cardVariants = cva(baseClasses, {
  variants: {
    layout: { ... },
    size: { ... },
    background: { ... }
  }
});
```

### Стало:

```tsx
// Новый подход с одним вариантом
const cardVariants = cva(baseClasses, {
  variants: {
    variant: {
      product: 'complete-class-string',
      team: 'complete-class-string',
    },
  },
});
```

### Преимущества нового подхода:

1. **Простота**: Один вариант вместо множественных
2. **Читабельность**: Полные строки классов для каждого типа
3. **Типобезопасность**: Строгая типизация без приведений
4. **Производительность**: Меньше вычислений во время рендера
