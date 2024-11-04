export interface GenerateAngularLibraryGeneratorSchema {
  name: string;
  domain: 'home' | 'product' | 'inventory' | 'cart' | 'shared';
  type: 'ui' | 'data-access' | 'feature' | 'util' | 'all';
}
