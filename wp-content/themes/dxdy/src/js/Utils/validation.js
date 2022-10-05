/**
 * A class which handles field validations
 */
export class Validation {
  /**
     * validate
     *
     * A function which processes validations
     * NOTE: this could be expanded and reused
     *
     * @param {String=} fieldvalue tthe value of the field to be validated
     * @param {String=} fieldtype type of field to be validated
     * @param {Object=} rules validation rules
     * @param {String=} type are we matching or testing? Default = match
     */
  validate(fieldvalue, fieldtype, rules, type = MISC.MATCH) {
    return type === 'match' ? fieldvalue.match(rules[fieldtype].rule) : rules[fieldtype].rule.test(fieldvalue);
  }
}
