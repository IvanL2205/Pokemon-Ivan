import {
  html,
  fixture,
  assert,
  fixtureCleanup
} from '@open-wc/testing';
import '../pokemon-list.js';

suite('PokemonList', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('default', () => {
    setup(async () => {
      el = await fixture(html`
        <pokemon-list></pokemon-list>
      `);
      await el.updateComplete;
    });

    test('a11y', async () => {
      await assert.isAccessible(el);
    });
  });
});
