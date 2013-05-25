Ext.define('YDisk.view.Files', {
    extend: 'Ext.List',
    xtype: 'files',

    config: {
        title: 'Disk Files',
        //cls: 'x-contacts',
        variableHeights: true,

        store: 'Files',
        itemTpl: '{name}'
    }
});