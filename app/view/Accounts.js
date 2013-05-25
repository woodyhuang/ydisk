Ext.define('YDisk.view.Accounts', {
    extend: 'Ext.List',
    xtype: 'accounts',

    config: {
        title: 'Accounts',
        //cls: 'x-contacts',
        variableHeights: true,

        store: 'Accounts',
        itemTpl: '{title}'
    }
});