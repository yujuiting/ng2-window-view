import { Ng2WindowViewPage } from './app.po';

describe('ng2-window-view App', function() {
  let page: Ng2WindowViewPage;

  beforeEach(() => {
    page = new Ng2WindowViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
