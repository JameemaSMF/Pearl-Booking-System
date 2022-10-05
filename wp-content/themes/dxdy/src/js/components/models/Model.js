/**
 * Model
 *
 * This is the base model upon which other models
 * will extend. This class simply enforces the
 * standard that a model should have a fromJSON
 * method and a toJSON method.
 */
export default class Model {
  /**
     * Constructor for the Model class which tests that data was
     * passed into the constructor and then calls the `fromJSON`
     * function to being translating the data
     *
     * @param  {Object} data An object of data to transform and model
     */
  constructor(data) {
    if (!data) {
      throw new Error('Model requires data');
    }

    this.fromJSON(data);
  }

  /**
     * A method which translates an object's properties
     * to properties on the Model class so that they
     * can be referenced later.
     *
     * @param  {Object} data An object of data to transform and model
     * @return {Object} Model A reference to the current instance of the class
     * @chainable
     */
  fromJSON(data) {
    throw new Error('A model requires a `fromJSON` method');

    return this;
  }

  /**
     * A method which translates an properties from the
     * class into a object which can be used as necessary.
     * This is usually called when a model's data needs to be
     * submitted to an API/
     */
  toJSON() {
    throw new Error('A model requires a `toJSON` method');
  }
}
