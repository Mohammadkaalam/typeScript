enum ButtonKey {
    Save = 'SAVE',
    Cancel = 'CANCEL',
    Delete = 'DELETE',
    Edit = 'EDIT'
}

interface Button {
    key: ButtonKey;
    label: string;
}
// تعریف لیست دکمه‌ها

const buttons: Button[] = [
    { key: ButtonKey.Save, label: 'Save' },
    { key: ButtonKey.Cancel, label: 'Cancel' },
    { key: ButtonKey.Delete, label: 'Delete' },
    { key: ButtonKey.Edit, label: 'Edit' }
];
// تعریف فانکشن برای برگرداندن دکمه‌های درخواستی

function getButtonsByKeys(keys: ButtonKey[]): Button[] {
    return buttons.filter(button => keys.includes(button.key));
}

// استفاده از فانکشن برای دریافت دکمه‌های درخواستی


const selectedKeys: ButtonKey[] = [ButtonKey.Cancel, ButtonKey.Delete,ButtonKey.Edit];
const selectedButtons = getButtonsByKeys(selectedKeys);

console.log(selectedButtons);