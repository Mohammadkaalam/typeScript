"use strict";
var ButtonKey;
(function (ButtonKey) {
    ButtonKey["Save"] = "SAVE";
    ButtonKey["Cancel"] = "CANCEL";
    ButtonKey["Delete"] = "DELETE";
    ButtonKey["Edit"] = "EDIT";
})(ButtonKey || (ButtonKey = {}));
const buttons = [
    { key: ButtonKey.Save, label: 'Save' },
    { key: ButtonKey.Cancel, label: 'Cancel' },
    { key: ButtonKey.Delete, label: 'Delete' },
    { key: ButtonKey.Edit, label: 'Edit' }
];
function getButtonsByKeys(keys) {
    return buttons.filter(button => keys.includes(button.key));
}
const selectedKeys = [ButtonKey.Cancel, ButtonKey.Delete, ButtonKey.Edit];
const selectedButtons = getButtonsByKeys(selectedKeys);
console.log(selectedButtons);
