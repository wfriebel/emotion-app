export const numSelected = items => {
  return items.reduce((acc, item) => acc + (item.selected ? 1 : 0), 0);
}