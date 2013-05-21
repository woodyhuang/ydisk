Ext.define('YDisk.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    id: 'mainView',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
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
        
        items: [{
            id: 'listView',
            title: 'Accounts',
            xtype: 'list',
            itemTpl: '{title}',
            data: [
                { title: 'Item 1' },
                { title: 'Item 2' },
                { title: 'Item 3' },
                { title: 'Item 4' }
            ],
            handler: function() {
                // use the push() method to push another view. It works much like
                // add() or setActiveItem(). it accepts a view instance, or you can give it
                // a view config.
                view.push({
                    title: 'Second',
                    html: 'Second view!'
                });
            }
        }]
    }
});
