import { WatoPage } from './app.po';

describe('wato App', () => {
  let page: WatoPage;

  beforeEach(() => {
    page = new WatoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
