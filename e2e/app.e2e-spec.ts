import { IntegrationTestingDemoPage } from './app.po';

describe('integration-testing-demo App', () => {
  let page: IntegrationTestingDemoPage;

  beforeEach(() => {
    page = new IntegrationTestingDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
