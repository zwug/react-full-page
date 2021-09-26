const SCREEN_HEIGHT = 750;
const SCROLL_Y_VALUES = [
  0, 750, 1500, 2250,
];

const slideChanges = [{
  from: 0,
  to: 1,
}, {
  from: 1,
  to: 0,
}, {
  from: 0,
  to: 1,
}, {
  from: 1,
  to: 2,
}, {
  from: 2,
  to: 3,
}, {
  from: 3,
  to: 3,
}];

describe('react-full-page', () => {
  beforeEach(() => {
    cy.viewport(800, SCREEN_HEIGHT);
    cy.visit('http://localhost:8080');
    cy.wait(800); // because of scrollToSlide call in componentDidMount
    cy.window().then((win) => {
      expect(win).to.have.property('pageYOffset', 0);
    });
  });

  it('Tests that scroll works as a slideshow', () => {
    slideChanges.forEach(({ from, to }) => {
      const isScrollDown = from <= to;

      cy.get('h1').eq(from).trigger('wheel', {
        wheelDelta: 30 * (isScrollDown ? -1 : 1),
      });
      cy.wait(800);
      cy.window().then((win) => {
        expect(win).to.have.property('pageYOffset', SCROLL_Y_VALUES[to]);
      });
    });
  });
});
