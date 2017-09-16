import { TestGitPage } from './app.po';

describe('test-git App', () => {
  let page: TestGitPage;

  beforeEach(() => {
    page = new TestGitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
