import { HeyBaristaPage } from './app.po';

describe('hey-barista App', () => {
  let page: HeyBaristaPage;

  beforeEach(() => {
    page = new HeyBaristaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hey-barista works!');
  });
});
