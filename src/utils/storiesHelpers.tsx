/**
 * Generates HTML description for Storybook component documentation
 * @param inheritFrom - The component to inherit from (optional)
 * @param source - The source code path of the component
 * @returns HTML string for Storybook description
 */
export const getStoryDescription = ({
  inheritFrom,
  source,
}: {
  inheritFrom?: string;
  source: string;
}) => {
  const inheritBlock = inheritFrom
    ? `<p style="font-weight: bold; color: blue; margin-bottom: 8px;">Inherit from ${inheritFrom}</p>`
    : '';

  const sourceBlock = `<p style="background-color: #f0f0f0; padding: 8px; border-radius: 4px; font-family: monospace; margin: 0;">${source}</p>`;

  return `${inheritBlock}${sourceBlock}`;
};

/**
 * Creates Storybook argTypes object from array of argType items
 * @param array - Array of argTypes objects with 'name' property
 * @returns Object with argTypes configuration for Storybook
 */
interface ArgTypeTable {
  category?: string;
  subcategory?: string;
  type?: string;
  defaultValue?: unknown;
  [key: string]: unknown;
}

interface ArgTypeItem {
  name: string;
  control?: string | boolean;
  options?: unknown[];
  description?: string;
  defaultValue?: unknown;
  category?: string;
  subcategory?: string;
  table?: ArgTypeTable;
  type?: string;
  [key: string]: unknown;
}

type ArgTypeResult = Omit<ArgTypeItem, 'name'>;

export const createArgTypesFromArray = (array: Array<ArgTypeItem>) => {
  const result: Record<string, ArgTypeResult> = {};

  array.forEach((item) => {
    const { name, ...rest } = item;

    result[name] = {
      control: rest.control || rest.control === false ? rest.control : 'text',
      options: rest.options || null,
      description: rest.description || null,
      table: {
        type: { summary: rest.type || null },
        defaultValue: { summary: rest.defaultValue || null },
        category: rest.category || null,
        subcategory: rest.subcategory || null,
      },
    };
  });

  return result;
};
