export interface CategoryDef {
  name: string;
  label: string;
}

// 🩷🩷🩷🩷
// Her kan du legge til flere kategorier!

export const categories: CategoryDef[] = [
  {
    name: 'bukser',
    label: 'Bukser',
  },
  {
    name: 'vesker',
    label: 'Vesker',
  },
  {
    name: 'sko',
    label: 'Sko',
  },
  {
    name: 'blomster',
    label: 'Blomster',
  }
];
