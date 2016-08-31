"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_base_1 = require('./question-base');
var TextBoxtQuestion = (function (_super) {
    __extends(TextBoxtQuestion, _super);
    function TextBoxtQuestion(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = "textbox";
        this.type = options['type'] || '';
    }
    return TextBoxtQuestion;
}(question_base_1.QuestionBase));
exports.TextBoxtQuestion = TextBoxtQuestion;
//# sourceMappingURL=question-textbox.js.map