import { ListthingsPage } from './app.po';

describe('listthings App', () => {
  let page: ListthingsPage;

  beforeEach(() => {
    page = new ListthingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
