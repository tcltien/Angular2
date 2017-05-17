import { StarterAngularPage } from './app.po';

describe('starter-angular App', () => {
  let page: StarterAngularPage;

  beforeEach(() => {
    page = new StarterAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
