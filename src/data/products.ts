export interface Product {
    id: string;
    category: string; // må matche categories.ts (f.eks. 'bukser', 'vesker', 'sko')
    title: string;
    subtitle?: string;
    file: string; // sti relativt til produkter/ (f.eks. 'bukser/bukse-1.webp')
    image: string;
}


const IMAGE_ROOT = 'produkter/';


const fileMap = import.meta.glob('../bilder/**/*.{png,jpg,jpeg,webp,avif,svg}', {
    eager: true,
    import: 'default'
}) as Record<string, string>;


// 🩷🩷🩷🩷🩷 Her kan du legge til flere av bilder du ønsker
const bildeliste: Omit<Product, 'image'>[] = [
    {id: 'hvit-bukse', category: 'bukser', title: 'Hvit bukse', subtitle: '100 kr', file: 'bukser/bukse-1.webp'},
    {id: 'bla-bukse', category: 'bukser', title: 'Blå bukse', subtitle: '200 kr', file: 'bukser/bukse-2.webp'},


    {id: 'gra-veske', category: 'vesker', title: 'Grå veske', subtitle: '550 kr', file: 'vesker/veske-1.webp'},

    {id: 'addidas-sko', category: 'sko', title: 'Addidas originals', subtitle: '300 kr', file: 'sko/sko-1.webp'},

    {id: 'blomst', category: 'blomster', title: 'Prestekrage', subtitle: '100 kr', file: 'blomster/Oxeye Daisy.jpg'},

    {id: 'hest', category: 'hester', title: 'Hest', subtitle: '1000 kr', file: 'hester/svart-hest.jpeg'},
];


function resolveImage(file: string): string | undefined {
    const key = `../bilder/${IMAGE_ROOT}${file}`; // matcher nøkkel i glob
    return fileMap[key];
}

export const products: Product[] = bildeliste.map(r => {
    const img = resolveImage(r.file);
    if (!img) {
        console.warn('[products] Fant ikke bilde for', r.file, '(forventet sti: ', `../bilder/${IMAGE_ROOT}${r.file}`, ')');
    }
    return {...r, image: img || ''};
});

export const allProducts = products;
