Ext.define('YDisk.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    id: 'mainView',

	requires: [
        'YDisk.view.Accounts'
    ],

    config: {
        autoDestroy: false,
        fullscreen: true,
        
        navigationBar: {
            //ui: 'sencha',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'add',
                    id: 'addButton',
                    align: 'right',
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                }
            ]
        },

	     items: [
            { xtype: 'accounts' }
        ]
    }
});
