import { MiamPage } from './app.po';

describe('miam App', () => {
  let page: MiamPage;

  beforeEach(() => {
    page = new MiamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
