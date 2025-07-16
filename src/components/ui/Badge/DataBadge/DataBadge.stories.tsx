import { DataBadge } from '.';

export default {
  title: 'UI/Badge/DataBadge',
  component: DataBadge,
};

export const DataBadgeDefault = () => {
  return (
    <div className="relative w-28 h-28 bg-gray-200">
      <DataBadge date={new Date()} />
    </div>
  );
};
export const DataBadgeShort = () => {
  return (
    <div className="relative w-28 h-28 bg-gray-200">
      <DataBadge date={new Date()} format="short" />
    </div>
  );
};
export const DataBadgeLong = () => {
  return (
    <div className="relative w-screen h-28 bg-gray-200">
      <DataBadge date={new Date()} format="long" />
    </div>
  );
};
