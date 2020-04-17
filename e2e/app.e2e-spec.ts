import { AngularExpressNodePage } from './app.po';

describe('angular-express-node App', function() {
  let page: AngularExpressNodePage;

  beforeEach(() => {
    page = new AngularExpressNodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
