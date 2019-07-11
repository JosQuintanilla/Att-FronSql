import { AttFronSqlPage } from './app.po';

describe('att-fron-sql App', function() {
  let page: AttFronSqlPage;

  beforeEach(() => {
    page = new AttFronSqlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
