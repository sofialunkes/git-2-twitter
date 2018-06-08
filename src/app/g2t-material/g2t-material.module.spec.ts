import { G2tMaterialModule } from './g2t-material.module';

describe('G2tMaterialModule', () => {
  let g2tMaterialModule: G2tMaterialModule;

  beforeEach(() => {
    g2tMaterialModule = new G2tMaterialModule();
  });

  it('should create an instance', () => {
    expect(g2tMaterialModule).toBeTruthy();
  });
});
