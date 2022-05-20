export class DOMListener {
  constructor($root) {
    if (!$root) {
      throw new Error('No $root provided to DOMListener.');
    }
    this.$root = $root;
  }
}
