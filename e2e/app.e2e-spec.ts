import { BuddyPage } from './app.po';

describe('buddy App', () => {
  let page: BuddyPage;

  beforeEach(() => {
    page = new BuddyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
