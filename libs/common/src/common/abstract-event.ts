export default abstract class AbstractEvent {
  toString() {
    return JSON.stringify(this);
  }
}
